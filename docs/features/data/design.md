---
id: design
title: User Data
sidebar_label: User Data
---

## Overview
User data is stored in user's client devices, and is only accessible to the user using its client credentials.
A user can security backup his client data to his service provider (or to any other storage cloud service provider or storage device).

This data includes all content shared by the user, access lists to his channels (status updates and groups), user purchased digital items, and user for-sale digital content.

Backed-up data is always strongly encrypted and is only accessible to the user who owns the decryption keys.

User can restore backed-up client data from his provider at any time. This enables use cases such as restoration of user's data when user switches to a new client device when he has no access to old data on his older client device.
User can delete old shared data from his client at any time. This data will no longer be available to other users who still have access to it. This is useful when user is running out of storage space on his client device.
Some content items shared over SUB between users are marked with a non-zero ttl by their authors. Clients automatically delete such data once the ttl expires. This helps reduce clients used storage size.

## Distributed Data Store
Subnet includes a fully decentralized data store which is design to store public identity bundles, a ledger with users and providers coin balances and service terms. This data store is implemented in the `SUB Blockchain`. Bundles always have an expiration date, and the amount of data stored on the network is small even when it will have a large number of users, as bundles are small blobs of identity data and new bundles replace old ones.

 Providers runs an Subnet Blockchain nodes and provides the `Subnet Blockchain Service public API`. Sybil attacks are mitigated due to a transaction fee associated with adding or updating data. Service providers pay transactions fee for new clients to make the onboarding experience smoother.

## User Keys Backup
Users are responsible to backup their private identity keys. When user's identity keys are lost, he will lose access to his identity and will need to create a new identity, and establish a new service with a service provider.
There are several methods to retrieve lost identity keys such as `social key retrieval` that can be employed by the platform.

For example, splitting the key between a group of trusted third-parties and restoring keys from a social backup.

Users may use hardware wallets to manage his identity keys and coin accounts. In this case user needs to properly backup his wallet's seed phrase using a password manager, or have a paper wallet in order to restore keys later.

Users who hold large coin amounts are encouraged to use a hardware wallet to manage these funds and transfer small amounts to the client's hot-wallet for on-going platform payments. This way, even if user's hot wallet is hacked, user won't lose the majority of his funds.

## Backing-up Client Data using a Service Provider
Service provider advertises the price per byte per month it charges for stored user data as part of its service terms for users.

1. User A chooses to backup his client data.
1. Client A creates an encrypted archive of all client data using a secret encryption key derived from the user's main identity key pair.
1. Client A compute the monthly storage cost for the archive for the current month and presents it to user.
1. User A confirms payment of the amount it to its provider and may choose to pay for several months.
1. Client A pays the amount using the platform's crypto payments features, and obtains a receipt.
1. Client A uploads the data to the provider and includes the payment receipt and the payment period.
1. Service Provider verifies the payment and stores the encrypted user data.

## Backing-up Client Data without using a Provider
1. Client asks user for backup password and uses kdf to device an AES encryption key from the user provided password.
1. Client backups all local data to a one local file encrypted with the AES key.
1. User copies the file to another storage device or stores it on the cloud.

## Extending Client Data Storage Period
1. When the paid period for its stored data is over. Service provider sends a message to Client A with a payment request.
1. User A pays for an additional period using Client A.
1. Client A sends the receipt to the provider.
1. Provider verifies the receipt.

In the case that user doesn't extend the period by paying, provider removes the user data after a grace period is over.

## Migrating to a new Client using Provider
1. User backs up his Client A data to its provider and saves locally his identity key pair so they are accessible on his new device.
1. User A sets up a new client A on a new device or an existing device. He needs to keep his identity key pair and use them with the new client.
1. User A selects to restore data from provider.
1. Client A pays for the price of downloading the data from the provider and obtains a payment receipt.
1. Client A requests the data from the provider and provides the receipt. It downloads it, decrypts it and restores it on the client device.

## Migrating to a new Client without using a Provider
1. User creates a backup bundle of all client data. Backup is encrypted and password protected.
2. User installs client on new device and restores data from bundle.

## Granting Access to User Data
Note that user may share any data (personal or otherwise) with another entity on the network securely and privately. This can include archives of structured and unstructured data items that are available on user's device. This is implemented using a file sharing protocol and features in clients.
