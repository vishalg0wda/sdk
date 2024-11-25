# ReadAccessGroupProjectResponseBody

## Example Usage

```typescript
import { ReadAccessGroupProjectResponseBody } from "@vercel/sdk/models/operations/readaccessgroupproject.js";

let value: ReadAccessGroupProjectResponseBody = {
  teamId: "<id>",
  accessGroupId: "<id>",
  projectId: "<id>",
  role: "PROJECT_VIEWER",
  createdAt: "<value>",
  updatedAt: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `accessGroupId`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `projectId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `role`                                                                                         | [operations.ReadAccessGroupProjectRole](../../models/operations/readaccessgroupprojectrole.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |