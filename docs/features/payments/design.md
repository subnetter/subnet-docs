---
id: design
title: Cryptocurrency Payments Design
sidebar_label:  Design
---

### Base Coin - $SUB

The Subnet platform uses its own native cryptocurrency $SUB.

The native cryptocurrency is awarded to servers for maintaining the core platform's ledger and other services. Service provider nodes (who don't opt-out) participate in permissionless consensus protocol to agree on a core platform's cryptocurrency ledger.

The base currency tracked on ledger of the blockchain that providers maintain between them. Providers get rewarded in the base coin for creating and validating blocks and running a full blockchain node. The production network protocol may require providers to bond an amount of the currency.


### Blockchain Architecture

Service Providers operate a blockchain network between them called the `Subnet Blockchain`. Subnet blockchain is permissionless, so any party, provider or not, can become a block producer and a validator. However, every service provider must be a block producer and a validator. The reason for that is that we want the blockchain to mainly be operated by service providers but we want to keep it permissionless.

Providers run `CryptoCurrency Nodes` to maintain the blockchain. Cryptocurrency node are blockchain p2p full nodes.

:::info 0.1.0 Release Note
Subnet Blockchain's ledger supports only the core cryptocurrency ($SUB). This release doesn't support a stable decentralized currency, custom tokens or an L2 payment network. These features will be added in future releases. Our long-term roadmap is for users to use stable coins and not a volatile cryptocurrency for payments to providers and to other users.
:::

:::tip
Clients should not start being serviced by a new service provider before validating recent participation as blockchain validator. The Cryptocurrency API provides means to obtain this data from any 'Cryptocurrency Node' via its `Cryptocurrency API`.
:::

#### Cryptocurrency Nodes
Cryptocurrency Node is the software component that operates the Subnet cryptocurrency and payment functionality. Cryptocurrency Nodes are permissionless - anyone can run them without any limitation.

Service Provider operate one or more Cryptocurrency Nodes in addition to a provider node. This is design for deployment flexibility and scalability. e.g A provider may run 2 cryptocurrency nodes and 1 provider node and provide infrastructure for each component based on its runtime requirements.

#### Users Transactions

::info
Users execute Subnet Blockchain transactions in several payment scenarios. Users can send transaction data to their providers for submission to the blockchain memory pool for processing, or send it to any available Cryptocurrency Node via its Cryptocurrency API.
:::

#### Security Assumptions

:::info
The basic security assumption of the platform is an honest majority of validators (2/3+) and of service providers (2/3+). This means that users should always be able to find a honest service provider to provide the service for them if their current provider is misbehaving and should always be able to execute blockchain transactions.
:::

### Blockchain Design

#### Validators

#### Block Generation and Submission

#### Block Finalization

#### Validators Bonds

#### Runtime Updates

#### Proof of Blockchain Work
A proof obtained by using the Blockchain API that includes a list of the most recent block production and finalization operations performed by a service provider.

#### Cryptocurrency API

#### Transactions Types

---
 
## Blockchain Transactions Summary - Release v0.1.0

### Onetime Transactions
1. One transaction per user on-ramp from $SUB seller to create user's on-chain account.
1. One transaction with credit from service provider when switching a service provider.

### Reoccurring Transactions
1. One transaction per user per to maintain required free balance. Ideally, once every about 3 calendar months.
1. One transaction per user-to-user purchase or direct payment.
