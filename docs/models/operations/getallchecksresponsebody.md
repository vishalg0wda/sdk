# GetAllChecksResponseBody

## Example Usage

```typescript
import { GetAllChecksResponseBody } from "@vercel/sdk/models/operations/getallchecks.js";

let value: GetAllChecksResponseBody = {
  checks: [
    {
      createdAt: 939.41,
      id: "<id>",
      integrationId: "<id>",
      name: "<value>",
      rerequestable: false,
      status: "running",
      updatedAt: 9292.96,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `checks`                                                 | [operations.Checks](../../models/operations/checks.md)[] | :heavy_check_mark:                                       | N/A                                                      |