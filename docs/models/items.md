# Items

## Example Usage

```typescript
import { Items } from "@vercel/sdk/models/submitbillingdataop.js";

let value: Items = {
  billingPlanId: "<id>",
  name: "<value>",
  price: "617.09",
  quantity: 8752,
  units: "<value>",
  total: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `billingPlanId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Partner's billing plan ID.                                                                    |
| `resourceId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Partner's resource ID.                                                                        |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start and end are only needed if different from the period's start/end.                       |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start and end are only needed if different from the period's start/end.                       |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Line item name.                                                                               |
| `details`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Line item details.                                                                            |
| `price`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Price per unit.                                                                               |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Quantity of units.                                                                            |
| `units`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Units of the quantity.                                                                        |
| `total`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Total amount.                                                                                 |