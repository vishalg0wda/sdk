# CreateAccessGroupResponseBody

## Example Usage

```typescript
import { CreateAccessGroupResponseBody } from "@vercel/sdk/models/createaccessgroupop.js";

let value: CreateAccessGroupResponseBody = {
  membersCount: 187.89,
  projectsCount: 6176.36,
  name: "my-access-group",
  createdAt: "1588720733602",
  teamId: "team_123a6c5209bc3778245d011443644c8d27dc2c50",
  updatedAt: "1588720733602",
  accessGroupId: "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
  teamRoles: [
    "DEVELOPER",
    "BILLING",
  ],
  teamPermissions: [
    "CreateProject",
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `membersCount`                                                    | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `projectsCount`                                                   | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The name of this access group.                                    | my-access-group                                                   |
| `createdAt`                                                       | *string*                                                          | :heavy_check_mark:                                                | Timestamp in milliseconds when the access group was created.      | 1588720733602                                                     |
| `teamId`                                                          | *string*                                                          | :heavy_check_mark:                                                | ID of the team that this access group belongs to.                 | team_123a6c5209bc3778245d011443644c8d27dc2c50                     |
| `updatedAt`                                                       | *string*                                                          | :heavy_check_mark:                                                | Timestamp in milliseconds when the access group was last updated. | 1588720733602                                                     |
| `accessGroupId`                                                   | *string*                                                          | :heavy_check_mark:                                                | ID of the access group.                                           | ag_123a6c5209bc3778245d011443644c8d27dc2c50                       |
| `teamRoles`                                                       | *string*[]                                                        | :heavy_minus_sign:                                                | Roles that the team has in the access group.                      | [<br/>"DEVELOPER",<br/>"BILLING"<br/>]                            |
| `teamPermissions`                                                 | *string*[]                                                        | :heavy_minus_sign:                                                | Permissions that the team has in the access group.                | [<br/>"CreateProject"<br/>]                                       |