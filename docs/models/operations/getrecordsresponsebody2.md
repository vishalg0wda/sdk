# GetRecordsResponseBody2

## Example Usage

```typescript
import { GetRecordsResponseBody2 } from "@vercel/sdk/models/operations/getrecords.js";

let value: GetRecordsResponseBody2 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "HTTPS",
      value: "<value>",
      creator: "<value>",
      created: 7416.03,
      updated: 7705.44,
      createdAt: 9082.48,
      updatedAt: 1503.50,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `records`                                                  | [operations.Records](../../models/operations/records.md)[] | :heavy_check_mark:                                         | N/A                                                        |