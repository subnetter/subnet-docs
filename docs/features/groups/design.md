---
id: design
title: Groups
sidebar_label: Design
---

### Overview

A group is created in a similar way to how status update channels are created.
Creator can set a monthly group membership fee and later publish premium content items to group members.
When A creates a group he becomes its super admin.
There are no public or private groups - group access is set by a members list and group creator has total moderation power over content and members.
Creator can ban users from posting to a group while still letting them be members and receive group content.
Creator can remove a member from the group at any time.

### Entities

- `User A` - Group C creator.
- `A` - User A's client.
- `User B` - a user.
- `B` - User B's client.
- 'G' - A group that User A creates.

### Creating a Group
User A creates a `ChannelBundle` for the group G, on A (A's Client). See status updates design for more information about channel bundles.

A publishes G's `group id` (or bundle) via any channel to specific people or publicly.

### Joining a Group
User B provides B with the group id from A. B requests the group bundle by id from A using a 1:1 message. A returns to B the group's bundle.

If User B had the group bundle that it can skip the step above.

User B creates a subscription request (which includes a signed membership bundle) and sends it to A via a 1:1 message from B. It contains a group membership bundle.

```protobuf
// Request to subscribe to a channel or a group
message SubscriptionRequest {
    uint64 time_stamp = 1;
    bytes channel_id = 2;
    AccountId requesting_user = 3;
    string message = 4; // short request message. e.g. Hi, this is avive - we talked on...
    // todo: add payment receipt if channels is paid channel
    GroupMemberBundle membership = 5; // for groups - subscriber adds signed membership bundle used by group creator
    Signature signature = 6;
}
```

```protobuf
// A group member bundle
message GroupMemberBundle {
    AccountId user_id = 1;
    AccountId group_id = 2;
    Signature signature = 3; // user_id signature attesting it is a group member
}
```

A presents to User A the group join request of user B. User A accepts B to the group.

 A adds B's membership bundle to the group's GroupMemembersBundle data structure it maintains for the group.

```protobuf
// Group members bundle is shared by group creator with group members and
// is updated with membership changes
message GroupMembersBundle {
    uint64 created = 1; // signature timestamp
    AccountId channel_id = 2; // group id
    ClientId client_id = 3; // channel's creator current client id
    repeated GroupMemberBundle members = 4; // group members ids
    Signature signature = 5; // signature of channel_id on all other fields (proves bundle author created this channel)
    Signature client_signature = 6; // channel's user's client signature on all other fields (proves identity of owner's client)
}
```

Note that this bundle includes signed bundle by each group member as all as the group's creator signature on all data.

A sends the updated bundle to all group members via 1:1 messaging. This can be batched to only be sent once a day in case of a popular group with many daily new members. Alternatively, A prompts User A to welcome B to the group and writes a short message to share with the group. This message includes the updated bundle and is sent to all group members.

---
### Sending a message to a group
Each member who has a GroupMembmersBundle can use it to send group messages. Group messages are sent to all group members.

Clients which receive group messages from non-members should discard them.

A group message may be top-level or in response to any other previous message, enabling threaded discussions in groups.

Each message from a member to a group is sent encrypted in a two-party double-ratchet session between the sender and the receiver using the platform's core messaging capabilities. There is not single group encryption key, and providers don't have access to group's content or to its keys.

Note that users don't have to be online to receive group messages. When they come online they pull it from their service providers who temporarily store messages for them.

### Removing a group member
Group creator can remove a member from the group at any time.
To remove a group member, creator uses his client and the member is removed from the members list. Next, the client sends an updated group membership bundle to all group members with the member not included in it. Members clients store the updated members list and only send and receive group messages from members in this list.

### Muting a group member
Group creator can mute or un-mute any member. Muting a member leaves the member in the group but prevents him from posting messages to the group. The muting flag is set for that member and a new groups members bundle is sent to all group members.
Group members clients should drop group messages they receive by muted users.

### Leaving a Group

### Requesting an update-to-date membership list
Members client should routinely (say once in 48 hours) request an updates membership list from the group's creator and process it to ensure they have updated membership list and they should refuse group messages from users who are not in the most recent memberships bundle obtained from the group's creator.
In case the creator has deleted the group, clients should notify their users and delete the group.

---

 
