---
id: clients
title: Client Design
sidebar_label: 💻 Clients
---

## Overview
Subnet design assumes many clients will mainly be mobile native apps or desktop native apps on restrictive networks that often go offline but users will access their clients on their devices often while using the service for digital communications applications.

Restrictive networks means that clients need to be able to connect to other hosts on the Internet but not have other hosts routable on the Internet. Meaning, other hosts such as providers or other clients do not need to connect directly to clients.

For mobile native apps, clients can frequently connect to their providers in the background to receive and process small messages, and not only when running in the foreground. Desktop clients should also run in the background and receive and process data while not running the foreground.

The client is a software packages ran by people in order to use the service. We foresee web-based clients, native desktop clients and mobile native clients. Clients provide UI for the applications provided on the platform and include a wallet that maintains user private keys and enables users to sign transactions, messages and other commitments. Clients are not required to be Internet-routable, they only need to be able to connect to one online server which is on the network. Some servers will provide a Websocket connection for clients, other servers may provide a json/http or a GRPC/web2.0 style endpoint.

Clients can be honest or byzantine. `Honest Clients` implement the Subnet public protocols and APIs and `Byzantine Clients` do not. This concept is used in our security analysis.

## Usage Pattern
The following flow describes what clients do when they are launched on a user's device.

1. Client connect to its provider and registers to receive streaming provided messages on the connection.
2. Client's provider sends message from the network designated to the client over this connection.
3. Client processes messages from the network and sends messages back to its provider when applicable based on the Subnet application protocol for the incoming messages.

:::note
Client uses its built-in spending wallet and pays for messages to provider while the wallet's monthly allowance balance is sufficient so users don't need to interactively sign nano-payments. When the monthly balance is low the client notifies its user and prompts it to increase the balance from the wallet's non-allowed account.
:::

When a client runs in the background on a mobile or desktop device, it frequently creates a connection to the provider, performs the steps outlined above and disconnects the connection after an idle period of no messages received on it so expensive provider network connections are not wasted and can be used to serve other online clients.

If client operation while in the background is limited by the OS, for example, iOS, then client collects incoming messages from the provider (which are mostly small meta-data about messages) and doesn't process expensive messages (such as request to get a large media message). These messages will be automatically processed when the client goes to the foreground on the device.


#### Client Software Architecture

![](/client_arch.png)
