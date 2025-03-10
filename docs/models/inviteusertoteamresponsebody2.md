# InviteUserToTeamResponseBody2

## Example Usage

```typescript
import { InviteUserToTeamResponseBody2 } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamResponseBody2 = {
  uid: "<id>",
  username: "Gustave13",
  role: "OWNER",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uid`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `username`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `role`                                                                                   | [models.InviteUserToTeamResponseBodyRole](../models/inviteusertoteamresponsebodyrole.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamRoles`                                                                              | [models.ResponseBodyTeamRoles](../models/responsebodyteamroles.md)[]                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `teamPermissions`                                                                        | [models.ResponseBodyTeamPermissions](../models/responsebodyteampermissions.md)[]         | :heavy_minus_sign:                                                                       | N/A                                                                                      |