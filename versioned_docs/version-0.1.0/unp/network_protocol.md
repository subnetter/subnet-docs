---
id: network_protocol
title: The Subnet Network Protocol
sidebar_label: Core Protocol
---

This document provides an overview of the core Subnet network protocol, a.k.a SNP as well as `protobuf3` service definitions.

## SNP Network Stack

The following diagram outline the SNP network stack:

<img align="center" width="75%" src="/net_stack.png"/>
<br/>
<br/>

`App protocol` is a Subnet communications protocol defined as a set of typed messages that provide app-specific functionality. Typically messages are `request messages`, initiated by an entity who starts an operation, and `response messages` which returns data requested in a request. Messages are asynchronous and response messages may be received in any order. When needed, response messages includes an identifier of a request message to enable receiver to associate the response with a request. Messages are defined using the protobuf3 rpc definition language using protobuf messages data type.

`ProviderCore` is a `grpc service` implemented by service providers nodes to receive messages from other network entities. In SNP, network entities are users's client software and service providers nodes. These entities form a virtual SNP network over the Internet. Each network is identified by an id designed to enable several SNP networks to operate concurrently and separately over the Internet.

ProviderCoreService uses HTTP/2 and TCP/IP for transport.


## Provider Core Service

`Service Providers Nodes` provide the `ProviderCoreService` as a `GRPC service` over the Internet. The service is public and is designed to be used by any network entity such as clients and other service providers nodes as the main interface for communicating with a service provider node which implements it.

The service provides methods for sending messages in any `app-level protocol` to the node. These service define communications between clients and service providers.

The service endpoint for a provider is advertised in the provider's public identity bundle. The service should be provided over TCP/IP without any transport encryption such as TLS. The Subnet network stack does not use TLS certificates by design. SNP is designed to work over any TPC/IP network without relying on web-services security protocol which requires trust in centralized certificate authorities and for nodes to mange and configure certificates. SNP provides its own message authentication and encryption mechanisms. These are implemented directly over GRPC which is in itself implemented over HTTP/2 TCP/IP.

The service is defined using the following protobuf3 service definition language.

```protobuf
// ProviderService is a GRPC service provided by a provider to clients or other providers over the Internet

service ProviderCoreService {
  rpc NewSession(NewSessionRequest) returns (NewSessionResponse);
  rpc Message(MessageRequest) returns (MessageResponse);
  rpc SubscribeToClientMessages(SubscribeToClientMessagesRequest) returns (stream DRMessage);
  rpc GetIdentityBundle(GetIdentityBundleRequest) returns (GetIdentityBundleResponse);
  rpc GetTermsOfService(GetTermsOfServiceRequest) returns (GetTermsOfServiceResponse);
}
```

### NewSession
A network entity (such as Subnet client software or another service provider node) requests to create a new double-ratchet two-party message encryption session with the service provider node which implements this method and to process a first higher-level SNP message which is encrypted in the double-ratchet session.

### Message
A network entity (such as Subnet client software or another service provider node) sends a higher-level SNP message to the provider node which implements this method which is encrypted in an existing double-ratchet session between the entity and the node.

### SubscribeToClientMessages
This method enables a client to create a gRPC network stream with its service provider nodes. Once this stream is established, the node's sends messages to the client over it so client does not need to pull the node for new messages while it is online. gRPC streams are implemented over standard web sockets.

Clients should be configured to call this method when they go online. The stream is taken down when the client disconnects from the Internet or shuts down.

The provider node implementing this method, authenticates the calling client and only establishes the stream if the client calling it is a client of a currently served user by the provider and it should reject the request for any other caller.

### GetIdentityBundle
GetIdentityBundle is a public utility method designed to let other entities easily obtain the provider's current identity bundle directly from the provider's node based on only its Internet dial-up info without having to use Subnet blockchain. Implementation should return the provider's current identity bundle without doing any request authentication or version checks.

### GetTermsOfService
GetTermsOfService is a public utility method designed to let other entities easily obtain the provider's current terms of service for new users directly from the provider's node based on only its Internet dial-up info without having to use the Subnet blockchain. Implementation should return the provider's current terms of service for new users without doing any request authentication or version checks.

---

## Protocol Versioning
SNP implementations use semantic versioning to indicate the protocol they implement. This version includes the definitions of all SNP services and app communications protocol.

SNP Double-ratchet encrypted messages (which wrap all application-level messages) include the protocol version of their creator implementation, and by an integer network identifier. The Subnet protocol is designed to support multiple Subnet networks over the Internet. Each network is identified by an integer network id.

The `NewSession`, `SubscribeToClientMessages` and `Message` rpc methods implementation should drop incoming double-ratchet messages which are sent with a network identifier which is different than the node's own network identifier or which are in a protocol version which is incompatible with the node's own SNP protocol implemented version. This is designed so Subnet nodes only communicate with compatible entities on a specific Subnet network.

---

## Messages Routing Protocol
The `Message Routing Protocol` is an app-protocol designed to provide network services to other service providers' nodes, and to clients of users serviced by the provider. The functionality provided by this service is used in the various SNP core messaging algorithms.

### Design Pattern
The Messages Routing Service is an SNP `app-protocol` provided over the base `ProviderService`. It is designed as a set of logical methods. Each method provides a different functionality to service clients and is defined by a pair of `request messages` and `response messages`.

These message pairs are specified using the `protobuf3` messages syntax. So, for example, the `RouteMessage` method provides message routing capabilities to service clients, and is specified using `RouteMessageRequest` and `RouteMessageResponse` protobuf3 messages.

These messages are always sent encrypted in a two-party double-ratchet session using the `Message` or `NewSession` methods of the `Provider Service`. Also note that the messages are fully asynchronous so responses may be received out of order.

:::note
This design pattern is used in the design all other SNP app-level protocols.
:::

### The RouteMessage Method
This method is the main method used to deliver an app-protocol messages from a user's client to another user's client and therefore used in many use cases.

A client requests its service provider to forward a message to another service provider for delivery to one of that provider's serviced clients. The request message payload contains the message for delivery. The request message is encrypted using `eph-dh` - `ephemeral diffie-hellman encryption session` between the sending client and the other client's provider.

```protobuf
message RouteMessageRequest {
    // message to the destination service provider
    ForwardMessageRequest forward_message = 1;
    // destination service provider dial-up info
    DialupInfo dialup_info = 2;
}

message RouteMessageResponse {
    // empty as it only includes status code
}
```

### ForwardMessageRequest

This message is a message from the sending client to the service provider of the message's final designated receiving client. The message requests the service provider to forward a message to the receiving client it provides service for.

This message is sent to the sending client's service provider in a `RouteMessageRequest`.

The message payload is encrypted using key and ad obtained from EDH. The unencrypted payload (cleartext) of the payload is a `NewSessionRequest` or a `Message` designated the receiving client. The sender client should create a new ephemeral key for each such message and destroy the private key once the message was sent - it should be a one time key. There is no DR session created between the sender and the receiver service provider, only a one time key for the receiving service provider to decrypt the payload. The encryption/decryption key is obtained by executing diffie-hellman with receiver's public pre-key and sender's ephemeral key.

```protobuf
message ForwardMessageRequest {
    EntityId receiver = 1; // Provider receiver id - long term public key
    uint64 receiver_bundle_id = 2; // Receiver's bundle id used by sender. Also identifies the pre-key.
    PublicKey sender_ephemeral_key = 3; // Sender's x25519 protocol pub key. see 2XDH protocol
    bytes enc_payload = 4; // a binary ForwardMessagePayload message
}

// Payload is a NewSessionRequest or a Message to the final ForwardMessage receiver
message ForwardMessagePayload {
    EntityId receiver = 1; // we need this because Message doesn't have receiver id in it for privacy, and provider needs it.
    DRMessage dr_message = 2;
}

// A DRMessage is a NewSessionRequest or a Message
message DRMessage {
    oneof data {
        NewSessionRequest new_session_request = 1;
        Message message = 2;
    };
}

// A message that a service provider delivers to its client in a DR Session between them. It is a message from another client designated to this client.
message ForwardedMessage {
    // the message from another sender to the receiver
    DRMessage dr_message = 1;
}
```

### ForwardMessageResponse
The response includes status that indicates the message delivery status to its final receiving client destination. Client should use the received response as message delivery confirmation. The service provider may return multiple such responses, each with a different delivery status. e.g. Message received or message delivered to destination client.

```protobuf
message ForwardMessageResponse {}
```

## The SendMessageToServicedClient Method

### SendMessageToServicedClientRequest

This method is designed to send a message between two clients that are served by the same service provider. The sending client sends this request to its service provider.

```protobuf
message SendMessageToServicedClientRequest {
    DRMessage dr_message = 1; // new session request or message to receiving client
}
```

### SendMessageToServicedClientResponse

The response indicates the delivery status. Provider may send multiple such response messages to the sender client to indicate the current delivery status. e.g. message received, message delivered to client, etc...

```protobuf
message SendMessageToServicedClientResponse {
}
```
