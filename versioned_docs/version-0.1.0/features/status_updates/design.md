---
id: design
title: Status Updates Design
sidebar_label: Design
---

## Intro - Status Updates, Channels, Feeds

Status updates are shared by users in status updates `channels`. To publish a `status update`, the user's client first creates a status updates channel. Channels are an abstraction that gives context for status updates.

>You can think about Twitter as a publishing system network each user account can publish only one channel. So channels in Twitter are implicit and have 1:1 relationships with accounts.

When a user decides he wants to publish status updates, he's prompted to create a channel. More advanced users can create multiple channels. For most novice users, one channel is sufficient to publish updates to others.

User can name his channel without any limitations, so the channel's name doesn't not necessarily personally identity the user unless he decides he wants to be personally identified (unlike systems like Twitter where all channels are personally identifiable by the company which runs the network).

To receive status updates from a user, another user needs to explicitly subscribe to one of the user's published channels. When a user subscribes to a status update channel, his client creates a `feed` that receives all updates posted on that channel.

User may add add additional status updates channels or groups to any of his feed in order to receive status updates and group messages from multiple sources in one context. This makes it easier to consume content than having to browse multiple content streams. Status update publishers have no notion of feeds. They only know about subscribers to their update channels and groups and their clients publish updates in the context of a channel.

The user which creates a channel, becomes its super-admin and has full total control over the channel's meta-data, content and configuration.

Service providers are responsible to route status updates messages between clients. All of the messages involved in status updates are encrypted, are similar to 1:1 messages exchanged between clients, and provide forward and backward secrecy and some anonymity.  Providers do not have access to a channel's content, meta-data or subscribers list.

> Channels and feeds are built on top of the platform's secure 1:1 messaging capabilities and use similar delivery mechanisms as 1:1 user messages. Unlike other social media platforms, even those that provide end-to-end encryption for 1:1 messaging, there is no compromise of privacy or security when users communicate via status feeds or groups.

## Intro - Replies and Conversations

Any user who receives a status update in a channel from another user may reply to that update. The reply will be viewable by other users who are subscribed to the status updates channel.

Users can also reply to any existing reply, thereby creating a threaded conversation in the context of a status update.

A status update channel creator can ban any other entity from replying to his status updates or to other replies. Channel creator may also remove a reply author from the channel at his sole discretion.

Channel creator can also remove replies from the channel at any time.

> the  policy of what content is an acceptable reply to a channel and who can do it is totally up to the channel's publisher.

If a user's replies are getting deleted they can start their own channel and post their thoughts and opinions there. **This is a key product feature as part of pushing moderation to the edge and decentralizing it**.

>It is our strongly held opinion that it is not the job of service providers or anyone else to monitor content in a channel and to decide what is acceptable content and what is not. This is the channel's creator role. In addition, channel creator may assign other users to have admin rights and moderate a channel he's created. This is important to ensure that channels with lots of content are properly moderated.

The main disadvantage of the status updates design is that replies to updates (or to other replies) are only sent to subscribers when the channel creator's client comes online. If his client is offline for a long period of time then these replies won't get published. This is needed to ensure privacy, authenticity and security of replies. We believe the pros outweigh the cons in this tradeoffs. e.g. no server-hosted subscribers list, high-degree of encryption for status updates (they are encrypted per receiver using a double ratchet for forward and back secrecy, etc...). It is a reasonable expectation that active users will run their client at least once a day.

----

### Terminology
- `Status Channel` - What a user creates to share public status updates with others.
- `Status Updates` - Content shared by channel creator to a public status channel.
- `Status Channel Subscription` - A subscription by a user to receive updates posted to the channel. A subscription to a channel creates a feed for the subscriber.
- `Status Feed` - A subscription to a public status channel by a user. Clients subscribe to channels to get a feed of posts in his client app. Users can also create a feed that combines public (and private) status updates published on multiple channels.
- `Reply` - a reply is content published by a user in response to a specific status update or to another reply to a status update. Replies enable threaded discussion about any status update.

---

## Channel Creation and Subscription

### Entities
- `User A` - Alice.
- `User B` - Bob.
- `A` - Alice's client app.
- `B` - Bob's client app.

<img style={{backgroundColor: 'white'}} src='/seqs/channel_creation.sequence.svg'/>

### Creating a New Channel

`User A` creates a new `status channel` with an optional `display name`, `profile image` and `description`. Channel is backed by a new cryptographic identity (public and private keys) so the channel id is the identity's account address. The channel information such as its unique id and name are signed by A in a `channel bundle`.

----

#### Channel Bundle and Channel Data

```protobuf
// A signed immutable bundle describing a status updates channel or a group channel.
// Designed to be made available for subscribers who have obtained channel_id.
// Signed by channel id and user to ensure that no-one else can create a channel with the same channel id
message ChannelBundle {
    EntityId channel_id = 1; // Channel public key id
    EntityId creator_id = 2; // Channel public key id
    ChannelType channel_type = 3; // status feed or group
    uint64 created = 4; // channel creation time
    string description = 5; // channel desc
    string acceptable_content_policy = 6; // creator stated acceptable content and moderation policy
    MediaContent logo = 7; // channel logo (optional)
    Address payable_address = 8; // account-payable for channel related users fees (paid content, subs, etc...)
    uint64 subscription_fee = 9; // Optional required monthly subscription fee for a status update channel
    Signature signature = 10; // signature of channel_id on all above fields- proves user has private key to channel id
    Signature creator_signature = 11; // channels' client signature on all other fields (including channel signature)
}

// Private data stored on publisher's client with mutable channel's or group's state.
// Channel can be public or private, status update channel or a group channel
message ChannelData {
    ChannelBundle bundle = 1; // current channel bundle and its data
    bool discoverable = 2; // when true, should be discoverable to anyone given client id
    uint64 last_updated = 3; // time of last content update
    repeated EntityId blocked_repliers = 5; // Users blocked by publisher from replying to status updates or group messages.
    repeated ContentItem content_items = 6; // all channel content item (including replies by other non-blocked subscribers).
    // Note: this needs to be indexed by item id and by reply_to in order to support threaded discussions and time-based fetch.
    repeated ChannelSubscribeRequest sub_requests = 7; // pending requests for subscription or membership
    repeated ChannelSubscriber member = 8; // subscribers for status updates
    repeated GroupMembersBundle group_members = 9; // members if channel is a group
}
```

```protobuf
// A channel member
message ChannelSubscriber {
    EntityId user_id = 1;
    uint64 date_subscribed = 2;
    uint64 time_next_payment_due = 3;
    // add receipts here for past payments
}

// A public or private status update, or a group message
message ContentItem {
    uint64 created = 1; // authoring time-stamp
    bytes channel_id = 2; // item's channel
    EntityId author = 3; // item's author
    uint64 post_id = 4; // unique post id
    uint64 price = 5; // price for a paid content item. 0 otherwise
    repeated MediaContent content = 6; // actual content (multi-part, multi-mime)
    bytes reply_item = 7; // can be a reply to another item
    Signature signature = 8; // on all of the above data by item's author
}

//////////////

//////// Channels client to client protocol
//////// Messages requests and responses from client to client regarding channels

// Request to subscribe to a channel or a group
// Note that there's not need to sign as app-level protocol messages are always delivered as a signed TypedMessage
message ChannelSubscribeRequest {
    uint64 time_stamp = 1;
    bytes channel_id = 2;
    EntityId user = 3;
    string message = 4; // short request message. e.g. Hi, this is foo - we talked on...
    // todo: add payment receipt if channels is paid channel
    GroupMemberBundle membership = 5; // empty for status updates channel. // For groups - subscriber adds signed membership bundle used by group creator
}

message ChannelSubscribeResponse {
    bool subscribed = 1; // confirmation
    string reason = 2; // rejection message or welcome message
}

message CancelChannelSubscription{
    uint64 time_stamp = 1;
    bytes channel_id = 2;
    EntityId user = 3;
    string message = 4; // short request message. e.g. Hi, this is foo - we talked on...
    // todo: add payment receipt if channels is paid channel
}

message CancelChannelSubscriptionResponse {
}

// New channel message
// Sent from channel creator to all status updates subscribers (or for a group, to group members)
message NewChannelMessage {
    ContentItem content_item = 1;
}
```

?> It is 100% up to the user to share personal information in the channel's display name or description or via his friendly nickname advertised via X2DH. For example, a user can choose not to share any such personal information. So, the decision to be anonymous is left to the user and is not in the hands of the service provider.

?> Note that unlike Twitter, each human or AI user (who runs and controls A) may publish more than one public feed so they can represent themselves differently to different communities. For example, A may be a DJ but also a software developer. He may chose to share music related updates in his DJ feed and software related updates in a software feed. B might be interested in A's music updates but not in his musings on software... A's user may or may not associate any personally identifying information with these feeds.

?> Note that there's a built-in support for premium channels which require monthly subscription fee from subscribers. The platform also supports premium pay-per-content model for premium content shared via a channel.

?> Note that channel bundles support both groups and status updates scenarios.

----

`User A` can now share the channel public id and some information about it in any medium, for example, he may send the id to another user or share it on legacy social media platforms.

`User A` can set the channel to be discoverable to anyone who knows A user id. In this case, it sends the signed channel bundle to `SA` for indexing and `SA` will return the channel bundle for queries for discoverable channels by user a sent to it from other nodes or clients on the network. In this case, `User B` can query `SA` for the name and channel id of discoverable channels published by `User A`.

`User B` obtains `channel_id` via any medium and subscribes to the channel. B sends a `Subscribe` message to A. If the channel requires a monthly subscription fee then B makes a payment and adds the receipt as data to this call.

`A` receives the subscription request and, verifies it and adds B to the subscription request list. `A` maintains a data structure for the channel.

`User A` approves the subscription request. He can also set A to auto-approve any such request automatically on its behalf. `A` adds `B` to the subscribers list in its channel's data set.

`A` sends to `B` a subscription confirmation message.

`B` notifies it user `User B` about the subscription.

---

## Status Update Publishing

<img style={{backgroundColor: 'white'}} src='/seqs/publish_update.sequence.svg'/>

User A authors a status update in channel c, on A.
For each subscriber B to channel c, A validates subscription is valid (for example, B may have not pay a monthly subscription fee) and sends the update to each valid subscriber B.

?> This is a high-level flow, lower-level details are that the update is sent to B via SB using the core messaging algorithm. Note that each update is encrypted using forward secrecy in a double ratchet session between A and B and SA and SB can't read the content of the update or even tell it is a status update in channel c. From a messaging perspective, the update looks like any other message from A to B. SA knows A wants to send SB a message but not B's identity. SB knows that A wants to send a message to B but not the content of the message or the channel id or other meta-data.

---

## Publishing a Reply to a Status Update

<img style={{backgroundColor: 'white'}} src='/seqs/reply_to_update.sequence.svg'/>


B has a status update or a replay to a status update the User B is viewing. User B decides to reply to the update or the the reply.

User B submits the reply content to B. e.g. he enters reply's text.

B sends the reply to A using `SendReply`. It provides the channel id and the content item that his reply is about.

?> The `SendReply` message is sent using the core messaging algorithm between two clients.

A validates the reply. e.g. it checks the B is subscribed to channel c and that that User A didn't block B from posting replies to the channel. A stores the reply in the channel's data.

For each channel subscriber C, A sends the reply to C using the platform's core messaging protocol in a similar way to the way it sends a new status update from User A to all subscribers.

?> Note that the reply is encrypted using DR between A and every recipient and is protected forward secrecy.

C stores the reply in its local channel data in the content of the content that the reply is for.

 C present the reply to User C when he browses the channel in the context of the status update or the reply that this reply is about.

---

## Premium Content Items Publishing via Channels

1. User A creates a premium content item on his client and publishes its id in a status update channel.

2. User B receives the update and choose to purchase the item. He pays for it and Client B downloads it from A. User B experiences the item on Client B.

For additional details see [premium content publishing](/docs/features/paid_content/design)

----

## Status Update Channels Discovery

### Preliminaries

Users who wish to discover and subscribe to public feeds published by A need to know IKA - A's public identity.
...

---

## Receiving Status Updates

Status updates are received by clients using the generic [receive messages algorithm](/docs/unp/receiving_msgs). The content of the received message in this case is a status update from A.

Providers don't have any meta-data about a status update they forward to a client besides that the update is some data designated to be accessed by a client they provide a service for.

B associates each received status update with its client feed. For example, a status update message form A is associated with the Client B notion of the feed(s) which are configured to display status updates from A.


----
