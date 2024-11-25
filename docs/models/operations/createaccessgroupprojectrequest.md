# CreateAccessGroupProjectRequest

## Example Usage

```typescript
import { CreateAccessGroupProjectRequest } from "@vercel/sdk/models/operations/createaccessgroupproject.js";

let value: CreateAccessGroupProjectRequest = {
  accessGroupIdOrName: "<value>",
  requestBody: {
    projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
    role: "ADMIN",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accessGroupIdOrName`                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `teamId`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The Team identifier to perform the request on behalf of.                                                         |
| `slug`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The Team slug to perform the request on behalf of.                                                               |
| `requestBody`                                                                                                    | [operations.CreateAccessGroupProjectRequestBody](../../models/operations/createaccessgroupprojectrequestbody.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |