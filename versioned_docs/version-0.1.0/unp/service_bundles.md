---
id: service_bundles
title: Providers Terms
sidebar_label: Providers Terms of Service
---

Service Providers need to publish a signed service manifest with the prices they charge for provided services. Clients use this to decide which service provider to chose and provider's reputation is established based on the compatibility of their charges to their manifest. Service providers may be required to provide a coin bond which is redeem-able by an entity that can publish a fraud proof. A fraud proof is signed evidence that a provider deviated from its service manifest.

```protobuf
message ServiceTermsBundle {
    EntityId provider_id = 1; // Provider public id
    uint32 free_trial_period = 2; // free trial duration in hours for new users (can be 0)
    Amount registration_amount = 3; // registration amount (can be 0) - required to register
    Amount base_cost = 4; // Base cost per client  message (can be 0)
    Amount cost_per_byte_per_month = 5; // Cost to store 1 byte per month (can be 0)
    uint64 max_user_bytes = 6; // max per account storage space
    Amount cost_per_byte = 7; // Cost to relay 1 user-data byte (can be 0)
    bytes public_content_terms_of_service = 8; // terms of service for public content hosting (public group, public channels).
    uint32 wind_down_period = 9; // hours that provider will serve client request past client termination
    uint32 wind_down_period_client_data = 10; // days until provider will not serve client related data to other providers
    uint64 max_file_size = 11; // max user file size in bytes
    uint64 valid_from = 12; // Timestamp
    uint64 valid_until = 13; // Timestamp
    Address payment_account = 14; // provider payment account (layer 2)
    Signature signature = 15; // bundles are self contained and are signed
}
```
