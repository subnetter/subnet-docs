---
id: messaging
title: Sending Messages
sidebar_label: Sending Messages
---

## Intro

The Subnet Network Protocol (a.k.a SUB) is a message-oriented protocol built on-top of TCP/IP. A direct message is a 1:1 message sent from one entity (sender) to another entity (receiver) using the SUB network protocol. An entity is a `Service Provider Node` operated by a service provider, or a user's `client` running on his mobile device or computer. This document described how direct messages are sent in SUB.

SUB doesn't make strong assumptions regarding clients Inetrnet connectivity. It is assumed that clients use mobile devices, may not be able to receive incoming TCP/IP connections requests, go offline and online often and frequently change their IP address. These assumptions is based on the actuall typical configuration and usage patterns of mobile devices.

The core direct messaging algorithm described in this document is one of the fundamental networking algorithms in SUB. Many platform features and higher-level SUB algorithms utilize the core direct messaging algorithm. For example,  the `status updates` and the `group messaging` algorithms.

This is enabled by a design that specifies that the encrypted message payload sent between two parties using the core messaging algorithm is *an arbitrary communication protocol message* and not just a user-generated message. So, for example, a private direct message content may be an `instant message` from one user to another user, or any other kind of message in another higher-level SUB communication protocol between two users, such as status updates and group messages, between a user and its service provider, or between two service providers.

:::note
SUB guarantees messages delivery to frequently-offline clients without compromising their privacy and security. This goal is achieved by the design of both the `message sending algorithm` and the `message receiving algorithm`. When done reading this document which describes the sending algorithm, head over and review the [Receiving Messages Algorithm](/docs/unp/receiving_msgs).
:::

The following algorithm describes the flow of `sending a message with arbitrary content from a user to another`. The sequence to send a message from any entity to another entity, such as between two services providers is very similar with some minor changes.

The algorithm is a bit involved, but is necessary for SUB to meet its design goals regarding messages delivery, security, forward security, backward security, privacy and support for frequent-offline non-routable clients.

> Subnet has built a prototype and a playground that demonstrate the capabilities, correctness and feasabiliity of the message sending and receiving algroithms.

## Overview

### Network Entities
- `A` - Alice's SUB client app.
- `B` - Bob's SUB client app.
- `BNode` - SUB Bootstrap Node.
- `SA` - service provider node servicing A.
- `SB` - service provider node servicing B.
- `IKA` - A's public identity identifier.
- `IKB` - B's public identity identifier.

### Building Blocks
- `X2DH` - a custom, extended diffie-hellman two-party algorithm inspired by [X3DH](https://signal.org/docs/specifications/x3dh/x3dh.pdf)
- `DR` - The [double-ratchet algorithm](https://en.wikipedia.org/wiki/Double_Ratchet_Algorithm).
- `DR Session` - a two-party double-ratchet session.
- `Payload` - an arbitrary self-describing message payload.
- `Payment Authorization` - a payment authorization signed by a user authorizing a payment amount from a user's account to its service provider cryptocurrency account. (todo: add links to payments here)
- `Bundle(B, SB)` - Client B identity bundle and SB identity and net-info bundle signed by SB.


### Preliminaries
A and B exchanged `IKA` and `IKB` between them. For example, via clients QR-codes scanning like in Signal, or via any digital or analog communications channel, or at least B has shared IKB with A over any communications channel.

Both A and B have completed their own [network bootstrapping sequence](/features/onboarding/overview.md) with service providers nodes SA and SB respectively. So SA is A's service provider and SB is B's service provider and both A and B are serviced users.

The algorithm uses a modified version of `X2DH` that doesn't rely on a centralized server to manage, certify, and publish users keys. Unlike the [X3DH protocol](https://signal.org/docs/specifications/x3dh/x3dh.pdf), the algorithm we use doesn't leak the initiating party's public identity. We employ this design for privacy reasons. SUB provides full two-party message authentication without revealing the message sender public id, using an alternative method which are described below.

In this algorithm, A sends a first message to B. We assume that A and B didn't exchange messages between themselves previously on the network, so they don't have an existing `DR Session` between them. In other words, the sequence described here is the first message from A to B.

The first message from A to B is used to establish a virtual, secure, tow-party `DR Session` between themselves by using the DR and X2DH algorithms.

Once X2DH and DR session initiation is executed by the parties, they each have DR key-chains that enable them to exchange any number of messages between themselves with good security properties such as forward and backward security. All messages between A and B are protected using one-time symmetric message keys. See the [DR algorithm paper](https://signal.org/docs/specifications/doubleratchet/doubleratchet.pdf) for background and additional details.

The algorithm is also designed to ensure that each of SA and SB would not be able to determine individually or individually have evidence that A is messaging with B without attempting and succeeding to obtain information via a collusion outside of SUB.

Informally, *SA knows that A wants to send a message via SB, but it doesn't know the final message destination B. SB knows that a message was received via SA on behalf of one of its clients (or itself), and is designated to its client B. However, it doesn't know A's identity.* In addition, this is achieved without scarifying message authentication for A and B. B can verify that a message from A was authored by A, and A can verify from B was authored by B.

:::note Message Content
The actual message payload sent from A to B is in a higher-level network protocol and has a context defined by that protocol. The context can be `a 1:1 messaging session`, `a private status feed` or `a group message`. For simplicity sake, we describe in this document a simple 1:1 text message. Messages sent in other contexts use the same algorithm. In other words, the message payload is opaque to the core messaging delivery algorithm.
:::

## Message Sending Algorithm

<img style={{backgroundColor: 'white'}} src='/seqs/send_msg.sequence.svg'/>
<br/>
<br/>

### Step 1 - A Gets B and SB Bundles
A sends a `GetClientBundleId(B)` message to SA. The message is encrypted in a DR session between A and SA.

> As an alternative, A can also obtain B's `Bundle(B, SB)` by quering any entity which provides the SUB public blockchain API such as community public SUB blockchain nodes or SUB bootstrap nodes. SUB bootstrap nodes all run SUB blockchain nodes.

### Step 2 - SA returns Bundle(B, SB)
When B started being serviced by SB, SB published `ProviderSignedClientIdentityBundle(SB, B)` to the SUB blockchain via a store client bundle transaction.

SA queries the SUB blockchain to get `ProviderSignedClientIdentityBundle(SB, B)` and returns it to A. SA, and other service providers run an SUB blockchain node and so can read the requested data from their node's API. `ProviderSignedClientIdentityBundle(SB, B)` is stored on the SUB blockchain as part of the client's bootstrap process with thier service providers. So the data is already available to SA in its SUB blockchain global state and it doesn't need to use the network to obtain it.

```protobuf
// Provider published client bundle - includes provider signature on the data.
message ProviderSignedClientIdentityBundle {
    ClientIdentityBundle client_bundle = 1;
    Signature signature = 2; // provider attests all data
}
```

```protobuf
// Client published bundle specifying current provider and x2dh pre-keys.
// Client represents a pseudo-anon identity that has its private key.
message ClientIdentityBundle {
    uint64 time_stamp = 1;
    EntityId client_id = 2; // cryptographic id - public key - ika...
    Address address = 3; // client's payment address
    ProviderIdentityBundle provider_bundle = 4; // client's current provider
    PreKey pre_key = 5; // client's current x2dh pre-key
    repeated PreKey one_time_keys = 6; // x2dh one-time keys (optional)
    MediaContent profile_image = 7; // profile data. e.g. profile image
    Signature signature = 8; // client signature on all other data fields
}
```

:::note
A `ClientIdentityBundle` includes its current provider `ProviderIdentityBundle` and is signed by the client.
The provider signs `ProviderSignedClientIdentityBundle` and `ProviderIdentityBundle`. So, when a client gets a `ProviderSignedClientIdentityBundle` it verifies the signatures to be assured that both client and provider data is authentic and that the client is serviced by the service provider. Bundles are stored in the SUB Blockchain.
:::

:::tip
One may argue that we should have chosen to design the algorithm in a way that B has shared a public X2DH pre-keys (and even one-time key) with A when it shared IKB (its public id) with A. However, this design is not very flexible and a bit inconvenient as sharing two keys between people is harder than sharing just one.

In addition, A needs to locate SB on the network in order to send a message to B, and *SB's identity may change from time to time as B is free to replace SB with a new service provider at any time*. So, it is more flexible for A to query the network for an up-to-date `ProviderSignedClientIdentityBundle(SB, B)` which includes current dial-up information for SB and the current B's provider identity. A can cache this data locally and only attempt to retrieve it from the network if SA fails to deliver a message to B via SB on its behalf.
:::

### Step 3 - Store Bundles
A stores `(k = B, v = (ProviderSignedClientIdentityBundle(SB, B), ttl))` in its local key/value data store and uses this value until the ttl expiration time.

### Step 4 - Message M1 Creation
A prepares a message to B to be sent to it via SA and SB. A creates a message which includes the input to a 2XDH protocol between A and B, as well as a first message to B encrypted with a DR session using a shared secret created by the 2XDH algorithm execution. This establishes a DR session between A and B and and enables B to decrypt A's message and respond to it.

Let's assume that the message is the text message `Hi Bob, this is Alice`. The clients agree and implement an `application-level message type` for a `text-messaging protocol` which includes a simple message type that contains the sender's text. This message is encoded to binary data and A creates a `TypedMessage` for it using the following syntax:

:::note
`Typed Message` is a self-described message in a specific protocol, designated to a specific receiver, where all data is attested by by the sender. It enables dynamic decoding of a protobuf encoded messages to a specific runtime type which is needed because `protobuf 3`, which SUB uses to define RPC messages and service, does not support self-describing messages.
:::

```protobuf
message TypedMessage {
    uint64 time_stamp = 1; // message creation time signed by sender (to avoid later replays)
    MessageType msg_type = 2; // message type (enum)
    bytes message = 3; // Serialized protobuf message of msg_type
    EntityId receiver = 4; // Message designated receiver long-term public key
    EntityId sender = 5; // Message sender long-term public key
    Signature signature = 6; // Sender's signature on all other fields - authenticating the message content
}
```

A starts a `2XDH session` and a `DR session` with B, and creates the a `NewSessionRequest` message using the sessions' data. This message is denoted `M1 := NewSession (B, MSG)` in the sequence diagram.

:::note
Note that only B can decrypt M1 by executing the 2XDH and DR algorithms and it only needs data in M1 and its private identity keys to decrypt it.
:::

```protobuf
// A 2-party DR session request using the X2DH protocol. Can be sent by Alice to Bob.
// Can also be sent as an inner message sent from Alice to Bob designated to Charlie.
// So receiver may be Bob or Charlie. DR is bootstrapped using shared secret and AD computed via the X2DH protocol.
message NewSessionRequest {
    uint64 time_stamp = 1; // request time signed by sender (to avoid replay later on)
    EntityId sender = 2; // Alice public identity
    EntityId receiver = 3; // Bob public identity
    PublicKey sender_ephemeral_key = 4; // Alice's x25519 protocol pub key. see X2DH protocol.
    uint64 receiver_bundle_id = 5; // Bob's bundle id used by sender. Also identifies the pre-key.
    uint64 receiver_one_time_prekey_id = 6; // one time pre-key Bob should use for session (optional)
    Message message = 7; // First message from Alice to Receiver. Encrypted in DR protocol in a new DR session Alice created with Receiver. The cleartext is a TypedMessage.
    Signature sender_signature = 8; // Alice's signature on all of the above
}
```

```protobuf
// A message has a DR header and an encrypted TypedMessage, encrypted using DR. See DR protocol for more info
// Note that if we are able to decrypt a message using the DR info then it means
// that the sender is the entity which established the DR session with us and there's
// no need to check signatures on this message to verify it authenticity which helps to reduce complexity.
message Message {
    DRSessionHeader header = 1; // DR protocol unencrypted header
    bytes enc_typed_msg = 2; // a DR encrypted TypedMessage
}
```

```protobuf
message DRSessionHeader { // DR session header (see x2dh protocol for more info)
    EntityId sender_id = 1; // Sender public id - needed for receiver to locate the session
    PublicKey dr_pub_key = 2; // the public ratchet key currently in use by the sender
    uint32 prev_count= 3;  // number of messages in the previous sending chain
    uint32 count = 4; // number of messages in the current sending chain
}
```

### Step 5 - Message M2 Creation

A creates a message `M2 := ForwardMessage(SB, M1)` to SA which includes in its payload M1 and requests B to use the SendMessage app-level protocol to send M1 to B as well as SB signed bundle which includes SB dial-up info. The process here is similar - A is executing the X2DH if it doesn't have a DR session with SA or using its existing DR session with SA. M2 is encrypted with this DR session. So the `Message` sent from SA to SB is a `SendUserMessage` protocol message with M1 as its data.

```protobuf
// The sender is requesting the receiver to forward the message to one of the entities it is providing a service for.
// Payload is encrypted using key and ad obtained from EDH and can be a NewSessionRequest sent to a client that
// the receiver is providing service for or a Message to that client.
// Sender should create a new ephemeral key for each such message and destroy the private key once
// the message was sent - it should be a one time key
// >>> there is no DR session created between sender and receiver only a 1 time key to decrypt the payload
// The enc/dec key is obtained by doing DH with receiver public pre-key and sender ephemeral key
message ForwardMessageRequest {
    EntityId receiver = 1; // Provider receiver id - long term public key
    uint64 receiver_bundle_id = 2; // Receiver's bundle id used by sender. Also identifies the pre-key.
    PublicKey sender_ephemeral_key = 3; // Sender's x25519 protocol pub key. see 2XDH protocol
    bytes enc_payload = 4; // binary ForwardMessagePayload message
}

// Payload is a NewSessionRequest or a Message request
// to another entity that the ForwardMessage receiver
message ForwardMessagePayload {
    EntityId receiver = 1; // Receiver id - long term public key
    oneof data {
        NewSessionRequest new_session_request = 2;
        Message message = 3;
    };
}
```

### Step 6 - Payment Authorization

A creates an `payment authorization` that authorizes a payment for the message delivery to SA. The payment amount is  based on the effective `SA's service pricing terms` which A agreed to when A started to be serviced by SA, and properties of the cypher-text message to B such as message total byte-size.

:::note
A only needs to create a payment if he's served on a pay-per-use plan by SA. If A has a `fixed-monthly-fee service plan` with SA then this step is skipped.
:::

### Step 7 - Message from A to SA

A creates and signs a `Message(payment, RouteMessage(SB, M2))` designated to SA and sends it to SA using their existing DR session.

> Payment authorizations are signed by the payer and are used by the payee service provider for billing users.

### Step 8 - SA Message Processing
SA receives the message, verifies the payment using the algorithm described in the billing section (todo: add link here) and stores it in it's local A's billing ledger. In a nutshell, SA accepts the payment if A's `current free balance` with SA is greater than the payment amount and it deducts the payment from A's current free balance.

### Step 9 - Message from SA to SB
SA obtains {`RouteMessage(SB, M2)`, SB and M2} from the message it received from A and it creates a `ForwardMessage(M2)` message to SB. SA creates a new DR session with SB or uses an existing session between them to community and sends the message to SB.

### Step 10 - SB Message Processing
SB verifies that SA operates a `Cryptocurrency Node` which recently participated in the network's blockchain consensus (See `proof of useful work` verification) by looking at on-chain data which is in consensus, and it aborts the protocol if verification fails.

SB decrypts M2 to obtain M1 and verifies it is serving B as specified in M1.

SB stores `(key = B, key_2nd = now, value = M1, ttl)` in its local key value store and sends an `ACK(id)` message to SA acknowledging that it has stored the message to B and is going to send it to B.

:::note
Note that M1 binary payload is protected with a one time shared session key between A and B established via a new or an existing double-ratchet session between A and B, so only B can decrypt it. SB can't read the message content and only knows the message's recipient ID which is B.
:::

### Step 11 - Delivery Confirmation

SA sends `ACK(id)` message to A to confirm the message delivery (but not open or read as B didn't see the message yet).

:::note
Note that SB doesn't know that the message came from A, only that it is designated to B, and that SA doesn't know that the message is to B, only that it is from A and should be delivered to SB.
:::

## Next Steps - Message Delivery to B
If B recently communicated with SB then they should have an active secure full-duplex network connection between them. In this case, SB notifies B that it has a new message for it. This is a form of a `push pattern`. Otherwise, SB notifies B about the message the next time B connects to to query for new messages. This is a form of a `pull pattern`.

For additional information about the final message delivery, please see [Receiving Messages Walk-through](/unp/receiving_msgs.md).

## Design Notes

Conceptually the message A sends to SA has the following structure.

<img style={{width: '75%'}} src='/direct_message_structure.png'/>
<br/>
<br/>

This somewhat involved algorithm is required to ensure privacy and forward secrecy.

All messages between two parties are encrypted using the DR two-party algorithm. This means that A's message to SB and to B needs to use an existing double-ratchet session between the parties or that A needs to create a new session with SB and B. The X2DH information A has about SB and B enables it to do so. A is able to do perform these encryptions due to access to `X2DH(B, SB)`. This bundle allows A to establish a shared double-ratchet session with both B and with SB. It already has a double-ratchet session with SA as part of the bootstrap process. This design ensures that SA doesn't know that A is sending a message to B as A only asks it to send a message through SB and doesn't reveal B's identity to SA. SB doesn't know that A is sending a message to B because it only knows that SA asked it to send a message to B `on behalf of a client` and it has no access to A's identity.

Note that only SB public info, and an ephemeral public key are visible to SA. All other data is encrypted. Only SB is able to decrypt the payload to get message M2. In M2, only B public info and an ephemeral public key are in cleartext. Only B can decrypt the encrypted parts of this payload with its keys.

It is expected that both SA and SB serve many hundreds or even thousands of clients such as A and B and not just A and B. So deciding that a message sent from SA to SB is on behalf of A and is designated to B is informally hard and requires collusion between SA and SB. Also note that the platform's core security assumption is an honest majority of full nodes which not collude to reduce the privacy of client messages.

This X2DH part of the algorithm is in some ways similar to Telegram and Signal use of the X3DH protocol
The main difference is that in SUB `there is no central server that is used for the initial key exchange` and the distributed permissionless p2p nodes SA and SB are used instead. In Signal and Telegram, X3DH bundles are stored on a centralized server operated by one company. The server operator knows about every user request to communicate with another user and can also censor some users from having their keys available to anyone (or to a sub-group) of other users.

Im SUB, there's also `no central server that knows that a message M is sent between A and B`. Obtaining such knowledge requires obtaining meta-data from both SA and SB.

Unlike Signal and Whatsapp, messages cleartext sent over the Internet doesn't include the sender's identity (as required by the X3DH protocol), so much less meta-data about the sender is available for men in the middle.

SUB design also makes proxying message exchanged between A and B via a server in the case that both of them are not-routable unnecessary. In the case of a proxy, it has full information regarding the identity of conversing parties, the number of exchanged messages, and time of each message exchanged between the two users.

---

## Anonymity Guarantees

An attacker can determine that A sent a message to B and provide evidence of that fact, if it can access and analyze information that both SA and SB had during the sequence execution. I.e. it broke both A-SA and SB-B double ratchet protected messages or it has convinced SA and SB to provide that information to it.

The security assumption `2/3+ honest majority of full nodes participating in the protocol on the network`, includes not sharing clients messaging data or meta-data with each other or with any 3rd party. So, under the network's core security assumption, the probability of both SA and SB being dishonest in the sense that they both reveal their message routing data about A and B to the same party is `0.111...`

So, the algorithm described in this sequence provides anonymity for a single message from A to B with a probability of `0.888...` which is high but not overwhelmingly high.

This guarantee holds for any number of messages between A and B as long as one of them didn't replace its service provider with a new one.

Note that anonymity with overwhelming probability of 0.99 or better typically requires a much more complex and expensive messaging protocol that involves each full node on the network to constantly sending messages to other full nodes at the same high rate. For example see Orchid protocol and Whisper protocol.

---

## Single Service Provider Algorithm

:::note
Alice and Bob may be served by the same service provider. In this case sending a message from Alice to Bob and back flow is greatly simplified.
:::

<img style={{backgroundColor: 'white'}} src='/seqs/send_msg_same_provider.sequence.svg'/>

### Step 1 - Bundles Discovery
A queries SA for Bundle(B, SA) which SA has in its local data store since it is servicing B. SA returns it to A.

### Step 2 - Message to B
A creates the message to B and wraps it in a `NewSession` method if there is no existing DR session between the parties, or in a `Message` method if it has an existing DR session with B.

### Step 3 - Message to SA
It creates and signs a `MessageToServicedClientRequest` with its body set to the message to B. It prepares and sign `payment authorization` for the message delivery fee, adds it to the message and sends it to SA.

### Step 4 - Message Processing
SA gets the message, verifies the payment authorization, verifies that it serves both A and B and storeד the message to B for delivery next time B connects to it, or alternatively, push it to B if B is online is connected to SA when the message from A is received.

:::note
Note that in this case, SA knows that A and B, both clients it is serving are communicating with each other but not the content of their messages with is private between A and B.
:::

> Read about [Receiving Messages](/unp/receiving_msgs.md)
