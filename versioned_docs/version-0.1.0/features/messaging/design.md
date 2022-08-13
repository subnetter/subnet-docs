---
id: design
title: User to User Messaging
sidebar_label: Design
---

User to user multimedia messaging is implemented on top of the platform's [core 1:1 messaging protocol](/unp/messaging.md).

The content of messages exchanged between clients are the users messages.

It is as simple as that and fully enabled by-design by the platform's core p2p messaging. In a way, instant messaging is the simplest form of application that is built above the core messaging infrastructure.

Users can invite other users via instant messages to follow their status feeds, created groups and to purchase premium content items by sharing ids in instant messages sessions.

Users can send links to premium content items in 1:1 messaging sessions.

User can block and other user. Blocking is handled on the local client-level. Clients just drop messages from blocked users so user never sees them and user is able to unblock a user at any time.
