---
id: design_goals
title: Design Goals
sidebar_label: Design Goals
---
:::info
Subnet is designed with great care to meet specific, concrete and well-defined design goals.
:::

### Optimal Pricing
A built-in free market mechanism, in which service providers compete with each-other on offering services to clients is designed so the network discovers the optimal price for the provided services.

The pricing model is designed to keep service providers profitable while keeping service fees low for end users.

Arguably, the network finds the optimal real value for instant messaging, and other forms of digital communications between people and organizations, and has a business model which doesn't involve toxic and harmful business practices.

### Sustainability
Users pay a `nano-fee` to send messages to and to receive messages from service providers that provide them with message routing and storage services.

This helps mitigating spam as there's a cost for every client message and published data. These costs should cover service providers operational costs and make the network sustainable without falling back to toxic private personal data sales or advertising business models.

### Incentive Compatibility
Service providers are incentivized to provide clients with services and to behave according to the SUB network protocol and not deviate from it.

As servie providers are paid by clients for services, per action performed, they have a strong incentive to provide the service as clients are always free to replace them with another service provider available on the network.

Incentive-compatibility helps to achieve sustainability.

### Decentralized Identities
The major vulnerability in all digital communication systems is identity. Subnet aims to build a decentralized identity system where the security model does not depend on root certificate authorities, or on trust in any one organization or authority.

We aim to replace DNS and TLS/SSL with better modern decentralized alternatives. In Subnet, users are 100% in control of their identity and personal data.

### Anonymity

:::info
In Subnet, users decide how anonymous or personally-identifiable they want to be, and the platform itself is neutral by design regarding this aspect.
:::

In Subnet, in most cases, no single service provider on the network can decide and produce evidence by itself that two clients are communicating with each other.

This is achieved without the heavy price of each server having to send o(n^2) network messages every short time period.

Anonymity is guaranteed unless two service providers, serving two users collude to create evidence about the two users communicating which is other.

Under the Subnet network basic security assumption - a majority of honest service providers, the network provides total anonymity for any two communicating users about 90% of the time.

This is not perfect but much better than present-day service providers such as Twitter, Telegram, Facebook and Signal which ALL require personally-identifiable information such as mobile phone number for signup.

### Decentralization
In Subnet, there is no central server or a single point of failure in the system. By design, users can choose to receive network services from one of several available providers based on well-defined provider published service terms, and to migrate from provider to provider at any time, if they don't receive the services promised by the provider terms.

There is also a low-barrier for anyone to become a service provider if they choose to do so - there is no party than needs to authorize an organization wish to become a service provider. This is enabled because service providers is a permissionless federation of entities that agree on a common network protocol between them to maintain the Subnet network.

### Spam Mitigation
Subnet aims to provide spam mitigation measures to minimize the amount of spam messages that users receive. There's a cost associated with each message sent on the network by users. So, sending bulk messages (messages with low click-through rate) to a large number of human receivers is uneconomical.

### Privacy
Beyond anonymity, Subnet aims to provide strong privacy guarantees by making it hard for any third party or man-in-the-middle to obtain the content of messages sent or exchanged on the platform between any number of entities. Subnet employs modern cryptography techniques to provide backward, forward secrecy to all content exchanged between users on it. Unlike other communications protocol, security and privacy features are designed at the core level of the protocol and not bolted on a non-secure and non-private network protocol.

### Uncensorable Payments
Subnet enables instant cryptocurrency payments between any two people or entities in the world without any exception.

As long as a client can connect to the Internet and to at least one honest service provider, it can pay or get paid by any other user or entity on the network without requiring any third party involvement or authorization.

Future versions of Subnet may also provide stronger private payments capabilities, where both the amount and the identity of the payer and the payee are private to the transacting parties.

### Robustness
Subnet is designed in a way that enables a full range of end-user communications and social media apps to be built in a straightforward way. In other words, SUB protocol is an open low-level digital communications protocol which is designed to enable a wide-range of higher-level communications patterns and apps.

### Scalability
Subnet is designed to enable communications and social media apps to hundreds of millions of people and entities. Its decentralized design of federated service providers is highly scalable. We envision hundreds of service providers on the Subnet network.

### Modern Mobile Internet
Subnet design assumes that users' client software frequently goes offline, and that users Internet connection is fragile, unreliable, and at times slow and limited. We strongly believe that future digital communication networks should not require client software to be online 24x7 nor users to have fast and reliable Internet connections.

---
