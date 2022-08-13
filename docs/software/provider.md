---
id: provider
title: Subnetter Provider Node Design
sidebar_label: Subnetter Design
---

### Subnetter Software Design

![](/provider_impl.png)

---

## Pricing Data
Capabilities
- All previous terms of service new users.
- Current terms of service for new users.
- Functionality to create a new terms of service for new users.

## Serviced users data
- User start service request (with id to service terms).
- User payments authorizations ledger. All user payments authorizations.
- All user payment transactions list.
- Service status:
    1. Active
    2. Suspended_pay_tx_pending (until tx to min free balance or for monthly fee or didn't agree for terms for new period)
    3. Ended (user didn't renew by paying).

Queryable data:
- Effective service terms.
- Effective service terms end date.
- Plan type: fixed monthly or pay-per-feature.
- User current free balance (for pay-per-usage plan)
- User minimum free balance (for pay-per-usage plan)
- Until what month user paid for fixed-monty fee.
- Offered terms of service when current terms expire (defaults to terms for new users, can be custom).
