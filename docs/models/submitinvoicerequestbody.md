# SubmitInvoiceRequestBody

## Example Usage

```typescript
import { SubmitInvoiceRequestBody } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceRequestBody = {
  invoiceDate: new Date("2025-10-31T10:26:27.251Z"),
  period: {
    start: new Date("2025-01-22T17:08:58.929Z"),
    end: new Date("2023-11-12T04:22:58.334Z"),
  },
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "769.20",
      quantity: 492.85,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `invoiceDate`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Invoice date. Must be within the period's start and end.                                      |
| `memo`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Additional memo for the invoice.                                                              |
| `period`                                                                                      | [models.SubmitInvoicePeriod](../models/submitinvoiceperiod.md)                                | :heavy_check_mark:                                                                            | Subscription period for this billing cycle.                                                   |
| `items`                                                                                       | [models.SubmitInvoiceItems](../models/submitinvoiceitems.md)[]                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discounts`                                                                                   | [models.SubmitInvoiceDiscounts](../models/submitinvoicediscounts.md)[]                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `test`                                                                                        | [models.Test](../models/test.md)                                                              | :heavy_minus_sign:                                                                            | Test mode                                                                                     |