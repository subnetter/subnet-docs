---
id: goals
title: Status Updates Design Goals
sidebar_label: Design Goals
---
### High Level Design Goals

1. **Free Speech Enabler** Anyone should be able to post a public status update without any limitations on the content - *absolute free speech*.

2. **Orgs and AIs participation** There shouldn't be any human verification requirements. Bots and AI should be able to post as well. There should be a monetary cost to post an update and this should take care of most spam issues related to bots and AI Spam posts. *There should NOT be a limit to the number of identities that a user chooses to use for sharing public updates.* In other words, users should be able to post updates from one or more identities they manage. This is different from a product like Twitter where each user is only allowed to have one identity which posts status updates and non-personal-identifiable accounts are not allowed.

3. **Censorship Freeness Publishing** 3rd parties should not be able to censor a person (or an Organization or an AI) from publishing a status update as long as that person can connect to the Internet and put up the nano-payment in coins required to post.

4. **Anonymity** Users should not have to reveal any personal identifying information when posting an update, and get good anonymity guarantees from platform.

5. **Censors Free Consumption** Anyone should be able to read public status updates posted by others without any limitations such as a 3rd party censoring content from readers.

---

### Subscriptions Design Goals
Subscriptions are a way to receive status updates from specific sources automatically in one feed. When a user subscribes to a channel, his client collects the channel's status updates for display from a specific source. So, a user should be able to see all status updates posted to sources he's subscribed to in one coherent time-based list.

Anyone should be able to subscribe to public status updates from anyone without any limitations.

A subscriber to a feed should be able to un-subscribe from any feed at any time and without limitations. Once un-subscribed, the user should not receive status updates from the un-subscribed source in his client software.

A Client should be able to pull status updates from feeds that its user is subscribed to.

Public feed publisher may block anyone from commenting on his posts but not from receiving updates. He can at any time make a public feed private.

---

### Replies Design Goals
Any user (or entity) should be able to reply to any public status update (threaded discussion) without any limitations or censorship.

>All replies to public status updates should be public and be viewable by any user who's subscribed to public status updates. Replies should have a small posting costs so spam and bots replies are mitigated.

A user posting public status updates should NOT be able to block another user from seeing these updates, or from replying to one of his public updates. This is what private status updates are for. In private status updates, the user posting the updates has full control over who can see them.

----

### Privacy and Security Design Goals
No provider should have a list of subscribers, store channel meta-data such as name and description or have access to status updates and replies content.

Updates should be sent to subscribers via a full double ratchet encryption session between updater and subscriber to provide similar privacy and security guarantees as private messaging.

The list of users who are subscribed to any update is only known to the public updates publisher's client, and not to any other user or providers.
