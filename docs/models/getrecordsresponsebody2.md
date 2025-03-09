# GetRecordsResponseBody2

## Example Usage

```typescript
import { GetRecordsResponseBody2 } from "@vercel/sdk/models/getrecordsop.js";

let value: GetRecordsResponseBody2 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "TXT",
      value: "<value>",
      creator: "<value>",
      created: 5620.66,
      updated: 4562.22,
      createdAt: 5961.85,
      updatedAt: 4288.1,
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `records`                                | [models.Records](../models/records.md)[] | :heavy_check_mark:                       | N/A                                      |