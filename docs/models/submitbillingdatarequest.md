# SubmitBillingDataRequest

## Example Usage

```typescript
import { SubmitBillingDataRequest } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    timestamp: new Date("2024-01-19T19:42:43.719Z"),
    eod: new Date("2023-10-21T17:10:27.496Z"),
    period: {
      start: new Date("2023-03-09T19:55:57.710Z"),
      end: new Date("2025-06-19T03:34:00.039Z"),
    },
    billing: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "571.99",
        quantity: 1454.5,
        units: "<value>",
        total: "<value>",
      },
    ],
    usage: [
      {
        name: "<value>",
        type: "rate",
        units: "<value>",
        dayValue: 8051.28,
        periodValue: 7692.47,
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `integrationConfigurationId`                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `requestBody`                                                                    | [models.SubmitBillingDataRequestBody](../models/submitbillingdatarequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |