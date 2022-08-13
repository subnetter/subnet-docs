---
id: privacy
title: Privacy Design
sidebar_label: overview
---

## Intro

> Privacy is complex and information leakage is surprisingly easy. Privacy-preserving systems need to be extremely strong to ensure reasonable amounts of protection. Unfortunately, they often fail in practice simply because they are cumbersome to use, causing people to revert to convenience. [Source](https://docs.grin.mw/about-grin/privacy/).


Striking the right balance between users convenience and privacy considerations is an unsolved problem in distributed systems design. Subnet proposes a unique protocol and network designs that aim to provide good user privacy guarantees without compromising to much users user-experience. Privacy is one of the platform's core design goals which we attempt to optimize for.


## Overview
The Subnet network protocol is a permissionless protocol which is designed to be used in the permissionless network settings. The protocol provides strong privacy guarantees.

The actual privacy level of a Subnet network depends on the actual behavior of the network's service providers which provide the p2p nodes which implement the server-to-server parts of the protocol.

The security assumption of a Subnet network is 2/3+ of service providers are honest, in the sense that they do not deviate their behavior from what is specified in the Subnet protocol.

Under these assumptions, in the worse case of 1/3 malicious service providers, a Subnet network provides 88% privacy for communications meta-data and 100% privacy for communications content. The communications metadata privacy can be higher based on the actual number of honest service providers on the network beyond the worse-case scenario of 1/3 being malicious.

In this new schema of things, `don't be evil` is still applicable but changes from being a requirement for a service provider corporation to a collective requirement from an open group of service providers. Network's which claim `can't be evil` are dishonest regarding the fundamental fact that in a permissionless network, a large enough minority of nodes can always be evil by subverting from the protocol.

:::note
The Subnet protocol does provide `can't be evil` guarantees regarding other aspects of the network such as users billing according to agreed upon service terms and unlike centralized systems that promise the won't be evil, but still lock-in the users to them and are free to change their terms without notice and at any time, the protocol is designed so users in a Subnet network will be able to exchange their network service provider with another one at any time with minimal service disruptions.
:::

## Users Identity Privacy
Subnet users identity is not related to any personal identifiable information unless the identity chooses to disclose personal identifiable information. Identities are related to crypto `wallet addresses` on to transactions on a Subnet network ledger.

## Service Providers Identity Privacy
Service Providers are free to decide which organizational information to associated with their

## Wallet Addresses Privacy
Wallet addresses are only related to personal identifiable information if a coins seller required a buyer to provide such information and is associating this information with buyer's wallet address. In this release of the platforms, users should protect themselves by purchasing coins from identities that do not require personal identifiable information.

## Mining Rewards Privacy
Miner rewards wallet addresses can be associated by a third party who monitors the network's blockchain with a public IP address. Miners can ensure rewards privacy by transferring rewards coins wallet addresses to annoymous wallet addresses.

## Users Content Privacy
All content exchanged in a Subnet network, e.g. direct text messages, status updates, group messages, etc... is 100% end-to-end private using strong encryption measures. Only a designated entity can read content authored by another entity and shared with entity by the author.

There are also no implicit entities who may read authored content. In other words, all entities must be explicitly approved by content publisher in order to be able to read the content. this means, for example, that to join a group, user has to request group creator to approve his join request and that he can only read group content after being admitted to the group.

## Group Memberships Privacy
Group members identities are only known to other group members.

## Status updates subscribers
The identity of status updates subscribers is only known to the status updates publisher.

## Communications Metadata Privacy

### Technology Measures
When 2 users Alice and Bob communicate with each other and when each user has a different service provider SPA and SPB, SPA has records about Alice is sending message through it to SPB, but no record that Alice communicates with Bob.
SPB has a record that SPA forwarded a message from another entity to Bob but no record of Alice's identity.
The only way to identify that Alice and Bob are communicating is for SPA and SPB to collude, analyze and store information about messages to and and from their user's using a protocol outside of the Subnet protocol. In other words, they are dishonest malicious service providers as far as the protocol is concerned.

The basic security assumption is that there's 2/3+ honest majority of service providers on a Subnet network. Under these assumptions, a Subnet network provides a `89% guarantee that meta-data about messages exchanges between user remains private`. To obtain meta-data about communications between users, both of the user's providers must be malicious and they also need to explicitly collude with each other.

A healthy Subnet network is designed to have hundreds service providers from all over the world. Users are free to choose any service provider so in practice two users who communicate with each other may have the same service provider. In this case, the communications meta-data between these two users is as private as the provider's meta-data disclosure policy and practice to legal authorities in the jurisdiction it is operating at.

In order to estimate which users are talking with each other, a powerful adversary that can monitor the global Internet needs to correlate between a sending user sent messages timing and size and a receving user incoming messages timing and size. Additional measures will be used to increase meta-data privacy from even a powefull global adversary that can monitor the global Internet traffic. When a service provider forwards one of its serviced users messages to another service provider, it bundles several such recent messages into one message and can randomize the sending time, to make it harded for the adversary to analyize network traffic in order to conclude which users are exchanging messages. The number of these messages per minute increases with the number of users on the network and the number of users serviced by providers. It is expected that providers will service many thousands of indvidual users. The more messages are bundled between providers in this way, the harder it is to estimate which users are talking with each other. In addition, when a user pulls messages designated to him from other users from its provider, it gets all pending messages in one network message - this masks it harder for the adversary to estimate which user are talking with other users.

### Legal Measures
Subnet providers an additional legal level of defense beyond the technological one. Users are free to join any service provider on a Subnet network and to switch to a different service provider at any time. Users who cares about communications privacy, should not join a service provider who doesn't guarantee in its terms of service that he will not collude with another service provider to track users communications and that these terms may never change.

A service provider which tracks users under these service terms by colluding with one or more other service providers is breaking the service provider agreement between it and its users. When such a breach occurs, user is free to switch to another service providers and has legal grounds to sue the malicious provider for breach of terms.

## Public Information
The following information is public on a Subnet network.
- Users public identifiers.
- Service Providers public identifiers.
- Any information that user or service provider chooses to associate with their own public identifiers.
- Public identifier of users current and past service providers.
- Wallet address(es) associated with public identifiers.
- Wallet address's coin transactions.
- Wallet address's payments to service providers.

> This release of the Subnet protocol doesn't provide specifications for private coin transactions. The next releae of the protocol may include private transactions capabilities.
