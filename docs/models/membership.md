# Membership

The membership of the authenticated User in relation to the Team.

## Example Usage

```typescript
import { Membership } from "@vercel/sdk/models/teamlimited.js";

let value: Membership = {
  confirmed: false,
  confirmedAt: 7733.32,
  role: "OWNER",
  createdAt: 6855.13,
  created: 7160.24,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `uid`                                                    | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `entitlements`                                           | [models.Entitlements](../models/entitlements.md)[]       | :heavy_minus_sign:                                       | N/A                                                      |
| `confirmed`                                              | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `confirmedAt`                                            | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `accessRequestedAt`                                      | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `role`                                                   | [models.Role](../models/role.md)                         | :heavy_check_mark:                                       | N/A                                                      |
| `teamRoles`                                              | [models.TeamRoles](../models/teamroles.md)[]             | :heavy_minus_sign:                                       | N/A                                                      |
| `teamPermissions`                                        | [models.TeamPermissions](../models/teampermissions.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `created`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `joinedFrom`                                             | [models.JoinedFrom](../models/joinedfrom.md)             | :heavy_minus_sign:                                       | N/A                                                      |