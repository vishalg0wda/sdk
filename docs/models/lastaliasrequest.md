# LastAliasRequest

## Example Usage

```typescript
import { LastAliasRequest } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: LastAliasRequest = {
  fromDeploymentId: "<id>",
  toDeploymentId: "<id>",
  jobStatus: "skipped",
  requestedAt: 9774.96,
  type: "rollback",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `fromDeploymentId`                                                                                           | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `toDeploymentId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `jobStatus`                                                                                                  | [models.JobStatus](../models/jobstatus.md)                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestedAt`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [models.UpdateProjectDataCacheProjectsResponseType](../models/updateprojectdatacacheprojectsresponsetype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |