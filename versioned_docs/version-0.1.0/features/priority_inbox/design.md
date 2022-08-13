    ---
id: design
title: Priority Inbox
sidebar_label: Design
---

## Priority Inbox Messages
> Priority inbox messages are similar in content to user-to-user messages. e.g. they may have rich text, multimedia content and links to paid content items, in addition they have a subject text field that is designed to provide a summary for display in inboxes.

## Setup
1. User decides if he'd like to enable the priority inbox feature. When enabled, user is able to receive priority inbox messages and get paid for openning them. When disabled, other users can't send the user priority inbox messages.
1. User is prompted to enter the price in coin per message he opens and reads.
1. Feature availability and price is added to the user's identity bundle and is published with it.

## Sending a Message
1. Sender creates message designated to the receiving user's priority inbox. Sender decides how many coins to pay for the receiver if he opens the message and reads it.
1. Sender's client creates, signs and submits to the transactions mem-pool a transaction to move funds to a new hash-locked account with the payment amount specified by the sender. The hash-locked account funds can only be redeemed by receiver's user using his private wallet key and the hash's preimage.
1. Sender's client waits for the hash-locked account to be created on-chain and sends a message to the receiver user with the hash-lock preimage. The preimage enables the receiver to issue a blockchain transaction to redeem the funds locked in the hash-lock account using his wallet account private key.

## Priority Inbox Display
1. Receiver's client receives a priority message. It checks that the hash-lock account exists onchain before adding it to the receiver's priority inbox.
1. Priority Inbox messages appears in the recipient's inbox. The inbox displays the message's subject, sender's nickname, price paid for an open, and icon.

## Message Display

1. Receiver user opens the message and reads it.
1. In response to the message openning interaction, receiver's client sends a blockchain transaction to move the funds locked in the hash-locked account to the receiver's acount. This requires sending the pre-image and signing the transaction with the user's account private key specified in the hash-locked account.

----

TODO: think about pay-for-reply.
