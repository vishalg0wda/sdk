# GetInvoiceItems

## Example Usage

```typescript
import { GetInvoiceItems } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoiceItems = {
  billingPlanId: "<id>",
  name: "<value>",
  price: "115.89",
  quantity: 5681.62,
  units: "<value>",
  total: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `billingPlanId`    | *string*           | :heavy_check_mark: | N/A                |
| `resourceId`       | *string*           | :heavy_minus_sign: | N/A                |
| `start`            | *string*           | :heavy_minus_sign: | N/A                |
| `end`              | *string*           | :heavy_minus_sign: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `details`          | *string*           | :heavy_minus_sign: | N/A                |
| `price`            | *string*           | :heavy_check_mark: | N/A                |
| `quantity`         | *number*           | :heavy_check_mark: | N/A                |
| `units`            | *string*           | :heavy_check_mark: | N/A                |
| `total`            | *string*           | :heavy_check_mark: | N/A                |