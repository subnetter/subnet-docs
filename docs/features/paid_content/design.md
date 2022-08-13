---
id: design
title: Paid Content
sidebar_label: Design
---

Users can publish premium content on the SNP network. Premium content can be any binary data such as a video clip or an audio clip or several files of any type bundled together in a compressed archive. e.g. a zip file.


### Content Item Publishing


<img style={{backgroundColor: 'white'}} src='/seqs/premium_content.sequence.svg'/>



User A creates a premium content item such as a video clip. It sets its price and stores it on A.

User A composes a status update in channel C if channel is a status update channel or composes a new group message in channel C if channel is a group, with the id of the item and its price.

> User A can also share the item id and information in any other communication channel.

User B gets the status update or the information about the content item, and decides to purchase it. It pays the item price and obtains a receipt.

It sends A a request to get the item with a purchase receipt.

A verifies the payment via the receipt and sends the content item to B.

> Content Items are send as binary payloads in instant messages between A and B and the delivery of content item is implemented using instant messages delivery.
