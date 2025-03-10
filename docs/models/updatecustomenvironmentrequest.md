# UpdateCustomEnvironmentRequest

## Example Usage

```typescript
import { UpdateCustomEnvironmentRequest } from "@vercel/sdk/models/updatecustomenvironmentop.js";

let value: UpdateCustomEnvironmentRequest = {
  idOrName: "<value>",
  environmentSlugOrId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `idOrName`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | The unique project identifier or the project name                                            |                                                                                              |
| `environmentSlugOrId`                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | The unique custom environment identifier within the project                                  |                                                                                              |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team identifier to perform the request on behalf of.                                     | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                |
| `slug`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team slug to perform the request on behalf of.                                           | my-team-url-slug                                                                             |
| `requestBody`                                                                                | [models.UpdateCustomEnvironmentRequestBody](../models/updatecustomenvironmentrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |