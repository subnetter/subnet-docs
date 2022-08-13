---
id: billing
title: Users Billing Design
sidebar_label:  Users Billing
---

### Provider Service Terms

Service providers determine the `pricing model` for client services. Pricing model can be a `fixed monthly fee` or `pay-per-use`.

In the `pay-per-use` model `billable items` define service items which clients need to pay for, such as cost per message delivered from another user to a serviced user. Providers publish the model and the billable items it in their public `Service Terms Bundle`. The bundle is a signed commitment from provider for the terms of service for new users.

Providers may set a `free trial period` for both pricing model. Users get free service for the duration of the period from the time they sign on with a provider.

The Subnet DAO may airdrop coin grants to early adopters of the platform to cover any payments for the first few months and to bootstrap the Subnet network. These grants may require proof of humanity to prevent sibyl attacks on the distribution.

Providers may set a `registration fee`. Users need to pay this fee to sign-up to the service. When a trial period ends and a registration fee are set, users needs to pay the registration fee at the end of the free trial period.

Provider publish service terms for new users in their `identity bundle` so they are available via the provider's `public api` and via the Subnet blockchain public interface.

#### Service Terms Bundle

```protobuf
message ServiceTermsBundle {
    EntityId provider_id = 1; // Provider public id
    unp.payments.ServiceTerms service_terms = 2; // new users service terms
    Signature signature = 3; // bundles are self contained and are signed by provider
}
```

#### Service Terms

```protobuf
enum ServiceContractOptions {
  PAY_PER_USAGE = 0;
  PAY_FIXED_MONTHLY= 1;
}

message ServiceTerms {
  uint64 id = 1; // unique referable contract id.
  uint64 created = 2; // date created. valid from this date
  uint64 valid_until = 3; // end of time period provider commits to provide service with these prices
  bytes  user_id = 4; // Contract is only for this user. 0 for offers for new users.
  // pricing
  uint32 free_trial_period = 5;   // free trial period for new users in weeks
  Amount min_balance = 6; // required min balance
  uint32 max_balance = 7; // required max balance
  Amount balance = 8; // user's balance at date of message creation if terms are for a user
  Amount routing_msg_base_cost = 9; // base cost for message routing
  Amount routing_msg_cost_per_byte = 10; // cost for message routing per byte
  Amount data_store_per_byte = 11; // store per byte per monthly cost
  Amount registration_fee = 12; // Optional registration fee
  Amount monthly_fixed_fee = 13; // option for fixed monthly fee instead of pay-per-usage
  uint64 max_user_storage_space = 14; // max storage per user limit in bytes
  uint64 max_file_size = 15; // max supported routed file size in bytes
  Address payable_account = 16; // provider's blockchain account to receive transactions
}
```

## Users Start of Service

Client is able to obtain from the network and display to its user the `new users service terms` of any provider based on provider public id. This information is available from the Subnet blockchain public API provided by any Subnet blockchain node, from the Subnet Dao or, any a web directory service or from provider's web site or social media profile.

Users should review the service terms received from a provider on their clients, before they ask their clients to start being serviced from a new provider.

When user decides to start using a provider, the user's client sends the provider a request to start servicing it. The request includes the service terms that the user agreed to.

Service terms are always defined to be valid for a finite period of time. They apply for a user from the time that the user started the service with the provider until their set expiration time. Once provider accepted a new user request for service, the terms the user agreed to become the `effective terms of service` between the user and its provider.

:::note
Users must have an `effective terms of service` with their provider at all times to use Subnet services and apps. Once the term expire, users need to agree to new terms of service currently offered by the the provider, or to migrate to another provider and agree to that provider terms of service, or to stop using Subnet. See below for additional information about service terms renewal and service termination.
:::

---

## The Pay-Per-Use Pricing Model

Users are charged for network services by their providers in `Subnet Cryptocurrency` $SNP coins. When a user has a pay-per-use service agreement with its provider, he must include a signed `payment authorization` for the cost of one or more network operation with each SNP operation messages it sends to its provider when using the service. The prices should come from the user's `effective service terms` with its provider.

`Payment Authorization` is a signed and dated payment commitment for a specific coin amount that references an operation or an item. For example, when a client wants to download several available messages from its provider, it prepares a service payment for the total delivery price of the messages and references the messages unique ids in the authorization. For additional details see the [sending messages](/) and [receiving messages](/) walkthroughs.

Payment authorization are used to bill users for provider services.

:::note
Note that by design, creating a service payment is simple, cheap and fast and doesn't involve any blockchain or payment network operation. In addition, providers cannot overcharge users as charges can only include user-approved signed payments authorizations.
:::

### Balance
`Balance` is an Subnet accounting concept used for charging users for receiving network services from their providers based on payment history, usage, and provider pricing. The balance is an $SNP coin amount. Each user has a balance with its Provider. Each user and provider maintain the balance for the user based on user's coin payment transactions to the provider and user signed charges.

:::info
Each user's balance is equal to the total $SNP coins amount transferred by the user to its provider via blockchain transactions minus the total amount of provider's charges approved and signed by the user.
:::

### Minimum Balance
Service providers determine a `minimum balance` amount which they require their users to maintain at all times. The minimum balance for new users is advertised in the provider's service terms bundle.

The minimum balance is used to periodically balance client charges. This feature is designed so users need to execute a blockchain transaction (which incurs transaction fees) only once every few calendar months, so there are zero transaction fees on ongoing user payments to provider. Since most Subnet payments will be very small (e.g. fraction of a cent or few cents), this feature is critical to make the service affordable to users because otherwise blockchain transaction fee can easily make each payment significantly more expensive.

:::info
Users need to pay providers via a cryptocurrency transaction to bring their account's balance up to the minimum balance when their account balance with the provider goes below the minimum balance due to new billable items.
:::

Providers may change the `minimum balance` requirement for a user based on that user's past service usage and changes in $SNP fiat pricing or on any other competitive consideration in the providers market. For example, heavy-usage users may be required to have a higher minimum balance than casual baseline users.

Due to the core $SNP currency likely price volatility and service providers competing with each other for users, it is likely that providers will also need to adjust the monthly prices of billable services, and the minimum balance required in order to remain competitive with other providers and to reflect $SNP price changes over time.


### Users Accounting
Provider maintains payment data for each serviced user. The data includes:
1. All `payments authorizations` signed and submitted by the user.
2. The user `effective service terms` which include the user's required `minimum balance`.
3. All blockchain payment transactions made by the user to the provider to maintain its balance.

The user's `current balance` is computed based on user's payment authorizations (debits) and user blockchain payment to the provider as credits.
For example, if user paid 10 $SNP via a blockchain transactions and signed payment authorizations with a total of 6 $SNP then its current balance is 4 $SNP.

:::info
This design enables providers to update serviced users ledger efficiently, without having to perform an expensive blockchain transaction or a blockchain payment network operation, while users can't be overcharged for network services as all dated users bill items must be user-signed. Not having payments on a blockchain payment network avoid having to make security and privacy compromises.
:::

### Start of Service

Provider can trivially check at any time if the `current balance` gets close or goes below the `minimum balance` for any serviced user and send to the user's client a request to make a blockchain transaction to bring the user's `current balance` above the minimum.

To start receiving service from a provider, user must to pay (via a blockchain transaction) an amount equal to double of the `minimum balance` amount and a `service registration` fee in the case that the provider's service term require it. This is designed so users start being serviced with a positive balance above the minimum balance.

For example, if a provider minimum balance is 5 $SNP, then user pays 10 $SNP so its current free balance is 5 $SNP above the minimum at service start time.

The basic idea is that user's balance should always be between double the minimum balance and the minimum balance. Users are also given sufficient time to pay providers for services even when their balance goes below the minimum balance but is still positive.

## Billing
When a user's `current balance` goes close or below to the `minimum balance`, its provider sends him an an invoice which includes a `payment request`. The payment request includes a list of all of the user's signed payment authorizations (debits) since the last user last payment to the provider.

The payment request amount is set by the provider so the user's `current balance` will be double of the `minimum free balance` after the user makes the payment.

As soon as a user gets a `payment request` via its client, it should pay the payment request amount to the provider within a reasonable period of time to keep getting services from the provider. User is expected to make a blockchain transaction payment for the requested payment amount.

In case that the user doesn't make the payment in a reasonable period of time and its current balance goes below 50% of the `minimum balance`, the provider is entitled to stop serving the user.

This is designed to give users sufficient time to make a periodical payment to their providers without suffering service disruptions while making sure providers are paid for the network services they provide. Users can also configure their clients to make this payment automatically from a spending $SNP coins wallet as long as it is within user's set monthly budget for network services.

This design ensures that there's only one blockchain transaction per user when his balance goes below the 25% threshold based on his actual paid provided services usage, regardless of the number of billed service operations between client and its provider, and the billing design is secure. This is important as we want to scale the Subnet platform to millions of users and minimize the number of required blockchain transactions per user while having a secure payments design.

---

## The Fixed Monthly Payment Model
When a user signs up to a fixed monthly fee plan with a provider, it initially pays for at least one month of service when starting the service.

Users are responsible to pay for the next calendar month of service before or on the last week of the previous month to avoid service disruptions.

User can configure its client to automatically pay the monthly fee to keep being serviced without having to take any action, and the provider can stop servicing the user if such payments are not received.

Users may also pay for several months at a time to reduce transaction fees and the frequency of manual transactions they need to make.

Provider can stop servicing a user if a payment that covers a service month was not received before the first day of that calendar month.

When this model is used, users do NOT send `payments authorizations` to their provider and there are no provider `billable service items` used to charge users.

In addition, provider doesn't issue invoices and requests for payments.

Providers provide an api for clients to query the period of time for which they have paid for services to enable new clients who lost local data to determine when payments are due.

### Service Renewal
The providers commits to a `monthly service price` for services in their published terms of service. Terms of service always have a specific expiration time. Which is always set to the last day of a calendar month.

Close to the expiration time, the provider and the user must agree to new terms of service that cover an additional time period starting at the current service terms expiration time. Provider may request to change its `monthly service price` for services at that time.

When the current `effective terms of service` of a user with its provider are close to expiration, the provider sends the user via its client a proposal for service terms for a new time period starting at the expiration date. The provider is free to change the pricing and service terms based on market conditions, user's actual monthly usage patters or any other reason.

:::info
This is designed to enable providers to adjust service pricing based on overall service demand, competitive forces and volatility in the Subnet cryptocurrency fiat money value.
:::

The user is free to accept the new terms or to stop being serviced by the provider and move to another service provider.

When a user accepts the new terms, they become effective form the current terms expiration dates until their published expiration date.

New proposed service terms are sent in a message from the provider to the user's client when the client connect to the provider to receive new messages. The user needs to pay for network services based on the new terms and pricing before the new terms go in effect.

In the case where provider is offering both a fixed monthly plan and a pay-per-use plan, user may also switch between these plans.

---

## Client Payments

### Pay-per-use Model
Each user sets a monthly `spending amount allowance` that its client can spend on network services on the user's behalf without an explicit interactive user authorization.

This is an important design decision as there can be many thousands of `payment authorizations` in a typical usage month under a `pay-per-usage` plan and it is impractical to ask for explicit user confirmation for each `payment authorization`.

Most payment authorizations are likely to be in the range of a fraction of a US cent up to few US Cents.

User's client maintains a ledger of all `payments authorizations` it sent to the provider over time. When these payments go over the allowance in the current calendar month, the client notifies its user and requests him to increase the monthly `spending amount allowance`.

When a new `payment request` is received from the user's provider, client verifies it and pays it automatically by sending the provider a signed blockchain transaction for the invoiced amount to the provider's blockchain payment account. Payment request verification involves verifying the user's signature on all payment authorizations reported by the provider and a previously verified user's balance amount.

If the user doesn't pay the payment request, and its current balance gets to zero, then its service provider is allowed to suspend servicing the user until such payment is received.

### Pay-per-use Model
User may configure its client to automatically pay one or few months of service fees on its behalf. User can stop these automated payments if it wants to manually authorize each of these payments when they are due or when it decides to not renew the service it receives from its provider.

---

## Service Termination

### Pay-per-use Model
When a user wishes to stop receiving services from its provider, it should send it a service termination request. Upon receiving such a request, provider should keep servicing the client until the last date of the user's current effective terms of service but it should not send the user proposed terms of service for an additional period of time.

At the time of the service end-date, as defined in the service agreement, the provider should refund the user for his `current balance` via a blockchain transaction that must be submitted and executed in up to two weeks from the end of service date.

In case that the transaction was not executed, user may initiate a blockchain `dispute resolution procedure`. The user publishes a `service termination dispute transaction` to the blockchain with the amount it claims it should have received from the provider. In this case, provider must pay this amount to the user, provide alternative evidence such as payment authorizations signed by the user that were not submitted by the user in the dispute transaction, or be fined by the blockchain protocol.

The fine is executed by a transaction from the user to the dispute smart contract. Providers must all have a deposit in that contract and fines for wrong charges are deducted from that deposit. Providers must maintain a minimum amount locked in the contract to pay possible fines.

We expect dispute transactions to be rare as they are a provable deterrence mechanism.

TODO: outline dispute resolution smart contract system.

### Pay-per-use Model
User terminates the service by simply not to paying its provider with a transaction for the next due monthly payment transaction. When this happens, the provider simply terminates the user's service at the end of the last day of the calendar month that the user paid for services for. There is no need for a dispute resolution mechanism in this model.

It is the user's responsibility to enter a new service agreement with another provider that starts on the day in which the old service is terminated so the new provider may update the user's network public information (client identity bundle) on that date. Updating the client identity in the SNP Blockchain is required for other users clients to be able to communicate with the user and get content from its client via its new service provider.

### Data Migration

User's clients is capable to migrate all user's data to a new provider. As most data is stored in the client and not in service providers, the migration process is relatively straight forward. User signs up to receive service from a new service provider and that provider publishes a new user identity bundle to the Subnet blockchain. User's old providers answers user service related network requests with a response that indicates that the user is no longer serviced by the provider. When another client or service provider receives this message, it should check the Subnet blockchain for the new user's provider bundle and start using this provider to communicate with the user.

TODO: add example here. This is migration flow...

---

## Free Trails

Subnet is a very different platform than legacy social media and other digital communications apps. It is expected that many new users will find the platform billing and payment designs confusing and non-intuitive. Providers are encouraged to provide a free service layer for a period of 3 months to new users.

:::info
The free trial period is specified in the provider's `ServiceTerms` for new users.
:::

Users who start using the service on an on-going basis will need to convert to fully paying users after the free trial period ends to continue using the platform's services.

Providers can verify that users didn't hop from a different provider before signing them on to the free service by checking the user blockchain payment transactions and are free to decide not to offer a free trial period for users based on their platform usage history.

If Subnet is going to provide real value to users, then the inconvenience of creating a new user account from scratch every few months and move to a new provider, will not be worth-while for vast majority of users as most users want to be honest if the platform will make it easy enough to act honestly.

---

## Pay per Use Model - The Happy Flow - A Concrete Example

1. Provider SPA advertises a `minimum balance` requirement of 100 $SNP for new users in its service terms bundle. The bundle is publicly published on the Subnet blockchain.

2. Client A selects SPA as its service provider and submits a blockchain transaction to it for 200 $SNP so its `current balance` is set to double of the minimum balance.

3. Client A uses the platform via SPA and send signed `payment authorizations` to SPA per the Subnet network protocol specs.

4. Provider SPA stores the client's signed `payment authorizations`, and updates the client's balance based on the authorized amounts (debits).

5. When user's `current balance` gets close to 100 $SNP due to ongoing usage charges, the provider sends the user's client a `payment request` message with a request to pay 100 $SNP to the provider and to bring the user's `current balance` back to the double of the `minimum balance`.

6. Client A sends Provider SPA a signed blockchain transaction for 100 $SNP and the
provider submits it to the blockchain via the Cryptocurrency Node it operates.

7. When the transaction is confirmed, Provider SPA adds 100 $SNP to the user's current balance as credit.

8. Go to step 3.

---

## User to User Payments
For this release of the platform, user-to-user payments are implemented with blockchain transactions.

When a user wants to pay another user, or to buy an item from a user, its client signs a blockchain transaction and submits it via its provider (or via any public api of the Subnet public blockchain).

The user obtains the transaction id and sends it in a message to the payee. When the payee gets the message it can verify the transaction's blockchain finality status, and in case of paid items, only send the digital item to the payer (or subscribes him to a premium user-offered subscription) once the transaction has been sufficiently confirmed - based on the transaction confirmation status.
---

## Allowances
Users are expected to authorize their client to spend up to a `fixed monthly allowance` for provided network services.

This means that typical users will seldom need to execute an interactive blockchain transaction with their service provider for services. The exception is if user's billable usage goes above the monthly allowance during a service month.

In this case, user needs to agree to increase the allowance and to pay the provider to increase its free balance. Another exception is that when provider increases free balance requirement and or feature pricing at a beginning of a month. In this case, user will need to explicitly approve the change of terms and potentially increase the allowance.

### The Happy Flow
1. User specifies a monthly allowance amount for spending on network services. e.g. 100 $SNP.
1. User's client automatically signs `payment authorizations` on behalf of user without user interactive intervention throughout the month while the total payment amount is below the monthly allowance amount.
1. Client receives a request to update its balance from its provider, it executes the transaction if the request is below the monthly allowance amount without requiring user intervention.
