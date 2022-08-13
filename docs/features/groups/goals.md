---
id: goals
title: Groups Design Goals
sidebar_label: Design Goals
---

- Users should be able to create any number of groups without limitation.

- Group creator is the group's `super admin` and he must authorize any new group member and can at any time remove a member from a group.

- Super admin should be able to invite new users to the group, remove existing users from the group and accept or reject requests to join the group from users.

- A group member should be able to leave the group at any time.

- Super admin should be able to assign admin right to one more other group member.

- Only group members should be able to read group messages and write messages to the group.

- Support large scale gorups: More than 256 members and up to 10,000 members.

#### Privacy Requirements

- Only group members should be able to see the id of other group members. Non-group members should not be able to see the group members.

- The only personally identifying information shared by group members is voluntarily information shared by a member about himself.

- Groups should provide high-degree of both forward and backward secrecy to group messages.

#### Groups and Status Feeds

Groups are somewhat similar to status feed with the following differences:

1. A group member (and only a group member) can send a message to all other group members.
2. A group member (and only a group member) can reply to any group message (threaded discussion).
