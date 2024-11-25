# CreateAccessGroupProjectRequestBody

## Example Usage

```typescript
import { CreateAccessGroupProjectRequestBody } from "@vercel/sdk/models/operations/createaccessgroupproject.js";

let value: CreateAccessGroupProjectRequestBody = {
  projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
  role: "ADMIN",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the project.                                                                             | prj_ndlgr43fadlPyCtREAqxxdyFK                                                                      |
| `role`                                                                                             | [operations.CreateAccessGroupProjectRole](../../models/operations/createaccessgroupprojectrole.md) | :heavy_check_mark:                                                                                 | The project role that will be added to this Access Group.                                          | ADMIN                                                                                              |