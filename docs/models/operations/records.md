# Records

## Example Usage

```typescript
import { Records } from "@vercel/sdk/models/operations/getrecords.js";

let value: Records = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
  type: "SRV",
  value: "<value>",
  creator: "<value>",
  created: 3172.60,
  updated: 9792.70,
  createdAt: 6496.56,
  updatedAt: 8809.98,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `slug`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [operations.GetRecordsResponseBodyType](../../models/operations/getrecordsresponsebodytype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `value`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `mxPriority`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `priority`                                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `creator`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updated`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |