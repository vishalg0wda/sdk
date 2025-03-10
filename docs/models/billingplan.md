# BillingPlan

## Example Usage

```typescript
import { BillingPlan } from "@vercel/sdk/models/importresourceop.js";

let value: BillingPlan = {
  id: "<id>",
  type: "prepayment",
  name: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `type`                                                       | [models.ImportResourceType](../models/importresourcetype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `paymentMethodRequired`                                      | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `additionalProperties`                                       | Record<string, *any*>                                        | :heavy_minus_sign:                                           | N/A                                                          |