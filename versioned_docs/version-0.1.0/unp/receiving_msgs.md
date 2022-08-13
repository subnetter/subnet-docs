---
id: receiving_msgs
title: Receiving Messages
sidebar_label: Receiving Messages
---

## Pull and Push Message Delivery
In the 2 algorithms described on this page, B retrieves messages sent to him by another user A. Messages are messages in a higher-level application protocol that both A and B understand. It is generalized to receiving messages from any number of other users.

In the first algorithm, B requests meta-data about new messages SB has for it when it goes online. This is a form of a `pull pattern`.

If B already has an active full-duplex bi-directional network connection with its provider SB such as an active GRPC RPC protocol stream, then SB pushes new messages meta-data to B that triggers message delivery to B over the connection. This is a form of a `push pattern`. In this case, B doesn't need to pull messages meta-data from its provider and they are delivered to him automatically. See Algorithm 2 blow.

## Algorithm 1 - Pull

We assume that B is not currently connected to SB.  B executes this algorithm as soon as it connects to the network and decides that it wants to check for new incoming messages that SB may have for it.

<img style={{backgroundColor: 'white'}} src='/seqs/get_msgs.sequence.svg'/>

### Step 1 - Metadata Request
B goes online after being offline. It calls `NewSession(GetMessages(B, t))` or `Message(GetMessages(B, t))` on SB's `client service api endpoint`. B can decide to ask SB to start a new DR session with him at any time by calling `NewSession`. If it decides to use an existing DR session with SB, then it calls `Message` using the DR session. `t` is a timestamp which indicates the minimum time of new messages. It is based on the time of the last messages delivery from SB to B.

### Step 2 - Meta Data Delivery
SB responds with a list of new messages metadata `{msg_metadata...}` that it has available for B. The meta-data includes unique message id and message binary byte size. The metadata includes the ids of all messages designated to B that other service providers sent to SB and were not already delivered to B.

:::note
Note that SB doesn't know the identity of message senders, only the size and the id of messages.
:::

### Step 3 - Receive Message Creation
B prepares the data for a `Receive({msg_id...}, payment)` message that it is going to send to SB.

B decides which messages it wants to download from SB. If B is on a pay-per-usage service plan then it creates and signs a `payment authorization` for the total cost of messages based delivery on pricing in the current `effective service terms` it has with SB.
If B is on a fixed-monthly plan then it can skip this step.

### Step 4 - Receive Message Sending
B sends the `Receive` message with the data it prepared in the previous step to SB.

### Step 5 - Receive Message Processing
If B is on a payer-per-usage plan then SB verifies the payment based on B `current free balance`, otherwise it just checks that B is a serviced client with an effective monthly-payment service plan.

It sends `{msg...}` back to B - the set of messages B requested back to B. Note that these are encrypted messages that only B can decrypt. The messages are sent over the secure communications virtual channel between B and SB that is protected by a DR session.

### Step 6 - Incoming Messages Processing
B stores the messages locally with a ttl (messages may set to expire by sender) and executes the client-side message handler code based on the message type. It also updates `t` - the last time it pulled messages from SB so it can use a newer t for future GetMessages() calls to SB.

---

## Algorithm 2 - Push

SB provides messages meta-data streaming option for B in B's service terms.

### Step 1 - Subscribe on Server Stream
B requests SB to subscribe to new messages automatically by subscribing on SB's `GetClientMessages` server streaming API endpoint.
Once B is subscribed to new messages stream, SB sends `{msg_metadata...}` - meta data about new messages designated to B, over that stream and B determines which ones to request.

### Step 2
The algorithm execution continuous from Algorithm 1, step 3 above.
