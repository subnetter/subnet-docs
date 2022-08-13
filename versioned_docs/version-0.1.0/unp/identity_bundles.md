---
id: identity_bundles
title: Identity Bundles
sidebar_label: Identity Bundles
---

Identity bundles are self-signed certificates of identity extensively used in SNP. They are the fundamental data structures used in Subnet's decentralized identity system.

Service providers publish their identity bundles to enable clients and other service providers to securely communicate with them and to authenticate message they get from them. Clients use identity bundles to advertise their service provider and their identity on the network.

There is no central server that stores bundles and no root certificates. Bundles are distributed over the network and any entity on the network can locate bundles based on public information such as entity's identity key. Bundles only contain public information that enables network entities to securely and privately communicate with them using SNP.

:::note
Bundles are stored on SNP blockchain. This guarantees that at any time, any client or provider is able to obtain any other client or provider bundle from the network without relying on a central domain name authority. In addition, the SNP blockchain provides censorship-free store. As long as there's at least one honest validator, providers and clients can't be blocked from publishing their identiity to SNP by any party.
:::

- `ProviderIdentityBundle` is a certificate created and published by a service provider to announce its identity, additional public key and network dial-up info.

- `ClientIdentityBundle` is a certificate created and published by  clients to attest to their identity and their current service provider. It includes the client's `ProviderIdentityBundle`. Client is attesting its public id, pre-keys and its current service provider.

- `ProviderSignedClientIdentityBundle` is a certificate created and published by a provider to attest that it is providing a service to a client. It includes an `ClientIdentityBundle`. Provider is attesting its public id, pre-key, the client data and the fact that it is the client's service provider. Provider creates this bundle and publishes it on the network and return it to the client when it accepts a request from a client to become its service provider on the network received via its public-service api.

```protobuf
// Public service provider identity bundle.
// See X2DH protocol for additional details.
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

// Provider identity bundle with private data corresponding to the public data.
// Private data includes private keys for public keys shared via the public bundle
// todo: move this to another package - data objects - this is not used in the api
message PrivateProviderIdentityBundle {
    ProviderIdentityBundle public_bundle = 1;
    KeyPair provider_id_keypair = 2;
    PrivateKey pre_key = 3; // current x2dh x25519 pre-key private (SPKb in x2dh protocol)
    repeated KeyPair one_time_keys_pairs = 4; // x2dh one-time key-pairs (optional)
}

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

// Provider client service data - not api specific - move to data objects package
message ClientServiceData {
    uint64 service_started = 1;
    uint64 service_ended = 2;
    ClientIdentityBundle client_identity_bundle = 3;
}

// Provided published client bundle - includes provider signature on the data
message ProviderSignedClientIdentityBundle {
    ClientIdentityBundle client_bundle = 1;
    Signature signature = 2; // provider attests all data
}
```

## Obtaining Providers and Client Bundles

Service providers operate SNP blockchain full nodes which have access to all data stored on the SNP blockchain. This data includes published identity bundles.

Service providers operate `service providers nodes` which are online 24x7 on the network. Their nodes provide a public-service api for getting their signed bundles. So, to obtain a any published client or provider signed public bundle, a client or node needs only need to know its public service api dialup info.

Once a client connects to one service provider node or to a bootstrap node, it can query it for bundles for any entity on the network using the provider's `Blockcahin Service` api.

Service providers sign publish the identity bundles of their clients based on client's requests.

```protobuf
// Subnet blockchain service.
// This service is provided to anyone by any provider or public SNP blockchain api provider.
// Using this service, any entitiy can obtain the identity of any client or provider on the network.
service BlockchainService {

  // Submit a transaction for processing
  rpc SubmitTransaction(SubmitTransactionRequest) returns (SubmitTransactionResponse);

  // Sets balance for an address. Address will be added to ledger if needed. Used in genesis only.
  rpc SetBalance(SetBalanceRequest) returns (SetBalanceResponse);

  // Gets TransactionInfo for a tx id - will returned if in pool or on ledger
  rpc GetTransaction(GetTransactionRequest) returns (GetTransactionResponse);

  // Returns account current state if exists on ledger
  rpc GetAccount(GetAccountRequest) returns (GetAccountResponse);

  // Returns block data
  rpc GetBlock(GetBlockRequest) returns (GetBlockResponse);

  // Returns current block data
  rpc GetCurrentBlock(GetCurrentBlockRequest) returns (GetBlockResponse);

  // built-in identity bundles support

  // Gets the current provider identity bundle from the ledger for a provider id
  rpc GetProviderIdentityBundle(GetProviderIdentityBundleRequest) returns (GetProviderIdentityBundleResponse);

  // Get the current client identity bundle from the ledger for a client id
  rpc GetClientIdentityBundle(GetClientIdentityBundleRequest) returns (GetClientIdentityBundleResponse);

  // A temp convenience method used to get all clients registered in a network
  rpc GetClients(GetClientsRequest) returns (GetClientsResponse);

  // Returns all providers registered in a network
  rpc GetProviders(GetProvidersRequest) returns (GetProvidersResponse);

  // Proof of Useful Work related methods
  /////////////////

  // Returns recent created blocks count by an entity - PoUW
  rpc GetValidatedBlocksCountByEntity(GetBlocksCountByEntityRequest) returns (GetBlocksCountByEntityResponse);

  // Returns recent sealed blocks count by an entity - PoUW
  rpc GetSealedBlocksCountByEntity(GetBlocksCountByEntityRequest) returns (GetBlocksCountByEntityResponse);
}
```
