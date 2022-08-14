---
id: providers
title: Service Providers
sidebar_label: 🗼 Service Providers
---

### Service Providers Platform Software
The Subnet platform is provided to users by a federation of permission-less service providers. Each service provider run service providers software that implements the Subnet Network Protocol (SUB).

:::info
Each provider needs to configure run two processes on one or more computers. A `Service Provider Node` and a `Cryptocurrency Node`.
:::

### Service Provider Node
Service Providers Nodes implements Subnet Network Protocol for the provider. Clients of users serviced by this provider, and other service providers connect to this node over the Internet. Provider needs to properly configure the node according to its service terms and run this node 24x7 with sufficient network, storage and computing resources.

Service Provider Nodes are permission-less. Anyone can run them without limitation, however, service providers should participate in the Subnet cryptocurrency and payment network to be able to provide service to clients according to rules set in SUB. Clients should not chose service providers who can't prove participation in subnet consensus mechanisms. (see PoUW section below).

:::info
Service Provider Node should to be configured to use the provider's cryptocurrency node as its cryptocurrency API provider.
:::

### Cryptocurrency Node
Cryptocurrency nodes maintain the Subnet public ledger and payment network. Nodes provide the `Subnet Cryptocurrency API` to api clients.

Cryptocurrency Nodes are permission-less - anyone can run them without any limitation. Cryptocurrency Nodes get block mining and validation rewards.

---

### Service Provider Node Architecture

![](/provider_arch.png)

---

### Cryptocurrency Nodes Implementation

Internally a Cryptocurrency Node consists of 2 main software components:
1. Blockchain Component (aka L1).
2. Wallet Component.

#### Blockchain Component
Implements the blockchain protocol. This includes a canonical ledger, and a consensus mechanism for decentralized ledger updates.

### Wallet Component
Manages cryptographic key-pairs for users and enables them to sign transactions and payment requests.

### Proofs of useful Work (POuW)
Blockchain nodes perform different roles to maintain the ledger and the payment network such as participating in the blockchain consensus protocol and validating payment network payments. The nodes are rewarded with $SUB for this participation. The ledger consensus includes proofs of nodes participation in these protocols. We call these proofs `Proofs of Useful Work`.

According to SUB (Subnet Network Protocol) Service Providers need to present these proofs for new users and to other service providers.

For example, service providers only accept some provider-to-provider protocol messages from other service providers who they can verify to have performed some level of useful work for the platform. This mitigates sybil attacks on the network and minimized the damage that fraudulent service providers can cause to the Subnet network.


:::info
These mechanisms are designed to ensure that each service provider will run at least one cryptocurrency node and perform useful work to maintain the cryptocurrency ledger and p
:::

### Blockchain Software Implementation
Subnet Blockchain Component is implemented with Parity's `Substrate blockchain framework` and it uses a `proof of stake` consensus mechanism.
Custom transactions and the ledger are implemented using Substrate transactions.
