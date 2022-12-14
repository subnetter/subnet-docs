---
id: client_onboarding
title: Onboarding Clients
sidebar_label: Onboarding Clients
---

## Overview
Clients are apps run by users on their digital devices. Clients go through the bootstrap sequence described here when connecting to the network for the first time. Clients may run the bootstrap sequence again at any time to replace the network provider that provides them with network services on the network with a different one.

## Entities
The following entities are used in this walk-through and (as well as in many other platform walk-throughs):

```
- `A` - Alice's client app.
- `B` - Bob's client app.
- `BNode` - a SUB bootstrap node
- `SA` - A's Service Provider
- `SB` - B's Service Provider
- `Chain` - a canonical ledger agreed upon by all honest service providers.
```

## algorithms / building blocks
- `X2DH` - an extended diffie-hellman algorithm based on X3DH.
- `DR` - the Double Ratchet algorithm.
- `IKA` - A's public identity.
- `SKA` - SA's public identity.

-----

## Initial Bootstrap Sequence - Using a Bootstrap Node

In the flow below we describe a sequence which includes service providers discovery using a bootstrap node.  

Alternatively, A might obtain SA dial up info outside the protocol, for example, via a services directory made available by the community. In this case, A can skip the step where it searches for a set providers close to it based on its identity which effectively provides random service providers to choose from.

Alternatively, A may obtain a service provider public id SA offline and use the bootstrap service to find the dial-up info of SA and skip the step of getting several providers in this flow.


<img style={{backgroundColor: 'white'}} src='/seqs/bootstrap.sequence.svg'/>


Service providers nodes and bootstrap nodes provide a well-defined public API over a well-known host and tcp port.

A generates an elliptical curve key-pair `(SKA, IKA)`. For example, using `ED25519`. SKA is A private key and IKA is the corresponding public key which is used as A's identity in the network. This pair is A long-term identity on the network. Note that it is not tied to a device or to a personally identifiable information such as phone number.

A connects to the bootstrap node BNode directly via the BNode public API and sends a `GetAvailableProviders()` message to it.
Bnode is running an SUB Blockchain node which has an identity bundle published for all available providers.

> A know has a `ProviderIdentityBundle` bundle for all available providers. The bundle includes dialup information for connecting to each provider directly. ProviderIdentityBundle are periodically generated by service providers and distributed to the network using Kad.

#### Provider Identity Bundle
```protobuf
// Public service provider identity bundle.
// See x2dh protocol for additional details.
// Only include public data
message ProviderIdentityBundle {
    uint64 time_stamp = 1; // unique publishing time per provider
    EntityId provider_id = 2; // This is IKb in x2dh terms for Bob
    Address address = 3; // Provider account's address for payments
    repeated DialupInfo dial_up_info = 4; // node dial-up info
    PreKey pre_key = 5; // current x2dh pre-key (SPKb in x2dh protocol)
    repeated PreKey one_time_keys = 6; // x2dh one-time keys (optional)
    MediaContent profile_image = 7; // profile image
    Signature node_signature = 8; // node attests for keys (provider has node private key)
    Signature provider_signature = 9; // provider attests node id (node belongs to provider)
}
```

A connects directly to each of the providers and calls `GetServiceTerms()` to get each provider current service terms for new users. It gets a `ServiceTermsBundle` from each provider, and presents them to Alice.

Alice decides which provider to use. In the sequence we show how A obtaining terms of service from one provider.

#### Provider Service Terms Bundle
```protobuf
message ServiceTermsBundle {
    EntityId provider_id = 1; // Provider public id
    uint32 free_trial_period = 2; // free trial duration in hours for new users (can be 0)
    Amount registration_amount = 3; // registration amount (can be 0) - required to register
    Amount base_cost = 4; // Base cost per client message (can be 0)
    Amount cost_per_byte_per_month = 5; // Cost to store 1 byte per month (can be 0)
    uint64 max_user_bytes = 6; // max per account storage space
    Amount cost_per_byte = 7; // Cost to relay 1 user-data byte (can be 0)
    bytes public_content_terms_of_service = 8; // terms of service for public content hosting (public group, public channels).
    uint32 wind_down_period = 9; // hours that provider will serve client request past client termination
    uint32 wind_down_period_client_data = 10; // days until provider will not serve client related data to other providers
    uint64 max_file_size = 11; // max user file size in bytes
    uint64 valid_from = 12; // Timestamp
    uint64 valid_until = 13; // Timestamp
    Address payment_account = 14; // provider payment account (layer 2)
    Signature signature = 15; // bundles are self contained and are signed
}
```

> The provider specifies if it supports a `free trial period` for new users or if it requires a payment to start servicing A.

A sets S0 as it it new service provider, based on Alice's input.

If SA doesn't provide a free trial period then A makes signs an SMP blockchain payment transaction to SA. This payment may include a one-time fee set in S0's terms of service and a deposit to the user's ledger maintained by S0.
[TODO: to learn more about service payments check...]

A establishes a secure communications session with S0 by calling `NewSessionReqeust(StartService(ClientBundle(A,SA), Deposit transaction))`.

> In terms of encryption and security, NewSessionRequest works in the following way. A uses data in S0 `ProviderIdentityBundle` to start a new double-ratchet session between it and SA. The double-ratchet session is bootstrapped via `X2DH`. A diffie-hellman key exchange between A and S0. The `NewSessionRequest` method includes all the data for SA to create the double-ratchet session with A. `NewSession` is a public API end-point provided by each service providers in their public API service to receive `NewSessionRequest`s.

The signed payment transaction is sent as part of the request.


```protobuf
// A 2-party DR session request using the X2DH protocol. Can be sent by Alice to Bob.
// Can also be sent as an inner message sent from Alice to Bob designated to Charlie.
// So receiver may be Bob or Charlie. DR is bootstrapped using shared secret and AD computed via the X2DH protocol.
// Receiver should start a DR session with caller, decrypt the encrypted message
// extract the caller id from the enc payload, verify signature on internal message
// and only then associate dr session with the public long term id of the caller.
// this is done so we don't leak sender public id in this clear-text network message.
message NewSessionRequest {
    uint64 time_stamp = 1; // request time signed by sender (to avoid replays at much later time)
    EntityId receiver = 2; // Receiver's IKa - long term public key
    PublicKey sender_ephemeral_key = 3; // Alice's x25519 protocol pub key 2. see X2DH protocol
    uint64 receiver_bundle_id = 4; // Receiver's bundle id used by sender. Also identifies the pre-key.
    uint64 receiver_one_time_prekey_id = 5; // one time prekey Bob should use for session (optional)
    Message message = 6; // First message from Alice to Receiver. Enc in DR protocol in a new DR session Alice created with Receiver.
    Signature sender_signature = 7; // on all of the above (with long-term id key inside message)
}
```

NewSessionRequest includes a first message in the new double-ratchet session between A and S0. In this flow, this is a `StartService` request.

> Note that by design, A's public ID is not included in the clear-text of NewSessionRequest which is sent unencrypted over the Internet to avoid man-in-the-middle from associating A current ip public address and its public identity A. SA authenticates A using information included in the the internal encrypted message which is signed by A.

The StartService message includes a signed `ClientIdentityBundle` that A creates. The bundle attests that S0 is A's service provider.

Note that once A and S0 a double-ratchet session, A sends messages to SA without requesting to start a new session but it can at any time decide to request to start a new session with S0 which is good for security as new fresh keys are used and old ones are thrown away and not used anymore.

### A Client Bundle
```protobuf
// Client published bundle specifying current provider and x2dh pre-keys
// Client represents a pseudo-anon identity that has its private key.
message ClientIdentityBundle {
    uint64 time_stamp = 1;
    EntityId client_id = 2; // cryptographic id - public key - ika...
    Address address = 3; // client current wallet address for payments
    ProviderIdentityBundle provider_bundle = 4; // client's current provider
    PreKey pre_key = 5; // client's current x2dh pre-key
    repeated PreKey one_time_keys = 6; // x2dh one-time keys (optional)
    MediaContent profile_image = 7; // profile data. e.g. profile image
    Signature signature = 8; // client signature on all other data fields
}
```

S0 receives the `StartService` request. If it decides it wants to start servicing A. e.g. become its service provider then it creates a ProviderSignedClientIdentityBundle. In this bundle, SA attests that it is currently A's service provider to the network and to A.

In case of a required payment it submits the transaction for execution on the SUB blockchain and waits for payment confirmation from the SUB blockchain.

```protobuf
// Provider published client bundle - includes provider signature on the data
message ProviderSignedClientIdentityBundle {
    ClientIdentityBundle client_bundle = 1;
    Signature signature = 2; // provider attests all data
}
```
S0 returns `ProviderSignedClientIdentityBundle(A, S0)` as a response to A's SetProvider() message using a message encrypted in the DR session between them. S0 also submits the bundle to the SUB blockchain so it is publicly available to anyone via the SUB blockchain public api.

---

## Network State After Sequence Execution
When the sequence completes via its happy path we have reached the following state:

1. A and S0 updated their local data to reflect the S0 is now A's service provider.
1. A and SA has a ProviderSignedClientIdentityBundle(A, s0) which includes S0's and A's bundles.
1. ProviderSignedClientIdentityBundle(A, S0) is published to the SUB blockchain and is available via the blockchain api.
1. S0 has received a start-of-service coin payment (when applicable)
1. S0 has received a coin deposit from A that sets the initial A's balance in the ledger it maintains for A (when applicable).

> We have basically published this authenticated information without resorting to a centralized server in a decentralized way which ensures that any client or server on the network may obtain this information if it knows IKA. A can publish its IKA on any channel on or off the network.

> `ProviderSignedClientBundle` enables any network node to securely and privately send messages to S0 or to A via s0. Given A id IKA, any node can find ProviderSignedClientBundle(A, S0) and use it.

---------


## Alternative Initial Bootstrap Sequence - Without using a Bootstrap Node

In this sequence A has obtained S0 dial-up info offline, Alice (A's user) has reviewed S0 terms of service and is interested in starting to be services by S0. E.g. make S0 her client's network service provider.

<img style={{backgroundColor: 'white'}} src='/seqs/bootstrap1.sequence.svg'/>


1. A connects to S0 over S0 public API and calls `GetIdentityBundle()`.
1. S0 returns to A its current `ProviderIdentityBundle`.
1. The sequence continues as described in the previous sequence starting with the step where A sends a `GetServiceTerms()` request to S0.


--------------------

## Client Bundle Update

<img style={{backgroundColor: 'white'}} src='/seqs/update_x3dh.sequence.svg'/>


> A can update its Identity Bundle at any time, or switch to a new provider at any time. This sequence is executed by A periodically to publish new pre-message public keys with an existing SA and when A decides to switch over to a new SA.

A sends a `GetBundle` message to SA, to obtain SA fresh and current X2DH and identity data.

A prepares `Bundle(A, SA)`, with new one-time pre-keys, signs it and send `PubBundle` to SA.

> If SA requires a fee for publishing A's updated info then the message should contain a signed payment transaction.

SA verifies that it is A's provider and signs the bundle. If payment was required then it executes the transaction by submitting it to the SUB blockchain and waits for transaction confirmation.

SA publishes the new `ProviderSignedClientIdentityBundle` to the SUB blockchain.

SA returns to A an update `ProviderSignedClientIdentityBundle`.

---

### An Intuitive Incentives Segway

Informally speaking, both bootstrapping and update sequences are incentive compatible.
- SA has an incentive to pay transaction fee and to publish A's ProviderSignedClientIdentityBundle(A, SA) to the SUB blockchain because this enables other clients to find A and start to messaging with A's client (in any SUB app).
- Bootstrap node has an incentive to publish providers so new users can be onboarded. Bootstrap node is operated by SUB Dao but anyone can provide additional bootstrap node.
