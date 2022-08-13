---
id: design
title: Feeds Design
sidebar_label: Feeds Design
---

Feeds are a client-only abstraction. Feeds are not published but only consumed. They are created by users on their clients by specifying one or more status feeds and groups that the user has access to.

A feed contains a set of groups that the user is member of and status updates from other users that the user is subscribed. User's client should pull feed items by querying its service provider for new content items in each of the sources and combine them to one view.

When a client receives and decodes status update messages and group messages, it associates them with feeds so they can be viewed in the context of feeds by its user.

Associating new messages with feeds in the client is trivially done by using channel id which is part of a message's meta-data and feed's meta-data.
