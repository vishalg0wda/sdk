# InviteUserToTeamResponseBody1

The member was successfully added to the team

## Example Usage

```typescript
import { InviteUserToTeamResponseBody1 } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamResponseBody1 = {
  uid: "kr1PsOIzqEL5Xg6M4VZcZosf",
  username: "john-doe",
  email: "john@user.co",
  role: "MEMBER",
  teamRoles: [
    "MEMBER",
  ],
  teamPermissions: [
    "CreateProject",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `uid`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the invited user                                                                                       | kr1PsOIzqEL5Xg6M4VZcZosf                                                                                         |
| `username`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The username of the invited user                                                                                 | john-doe                                                                                                         |
| `email`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The email of the invited user. Not included if the user was invited via their UID.                               | john@user.co                                                                                                     |
| `role`                                                                                                           | [models.ResponseBodyRole](../models/responsebodyrole.md)                                                         | :heavy_check_mark:                                                                                               | The role used for the invitation                                                                                 | MEMBER                                                                                                           |
| `teamRoles`                                                                                                      | [models.InviteUserToTeamResponseBodyTeamRoles](../models/inviteusertoteamresponsebodyteamroles.md)[]             | :heavy_minus_sign:                                                                                               | The team roles of the user                                                                                       | [<br/>"MEMBER"<br/>]                                                                                             |
| `teamPermissions`                                                                                                | [models.InviteUserToTeamResponseBodyTeamPermissions](../models/inviteusertoteamresponsebodyteampermissions.md)[] | :heavy_minus_sign:                                                                                               | The team permissions of the user                                                                                 | [<br/>"CreateProject"<br/>]                                                                                      |