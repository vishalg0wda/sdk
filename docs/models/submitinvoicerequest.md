# SubmitInvoiceRequest

## Example Usage

```typescript
import { SubmitInvoiceRequest } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    invoiceDate: new Date("2025-10-20T01:37:25.539Z"),
    period: {
      start: new Date("2023-10-05T03:04:06.241Z"),
      end: new Date("2025-04-10T13:48:19.184Z"),
    },
    items: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "1.05",
        quantity: 5323.36,
        units: "<value>",
        total: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `integrationConfigurationId`                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestBody`                                                            | [models.SubmitInvoiceRequestBody](../models/submitinvoicerequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |