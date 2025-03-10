# GetDeploymentEventsRequest

## Example Usage

```typescript
import { GetDeploymentEventsRequest } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsRequest = {
  idOrUrl: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
  follow: 1,
  limit: 100,
  name: "bld_cotnkcr76",
  since: 1540095775941,
  until: 1540106318643,
  statusCode: "5xx",
  delimiter: 1,
  builds: 1,
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `idOrUrl`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The unique identifier or hostname of the deployment.                           | dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd                                |
| `direction`                                                                    | [models.Direction](../models/direction.md)                                     | :heavy_minus_sign:                                                             | Order of the returned events based on the timestamp.                           | backward                                                                       |
| `follow`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | When enabled, this endpoint will return live events as they happen.            | 1                                                                              |
| `limit`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Maximum number of events to return. Provide `-1` to return all available logs. | 100                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Deployment build ID.                                                           | bld_cotnkcr76                                                                  |
| `since`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Timestamp for when build logs should be pulled from.                           | 1540095775941                                                                  |
| `until`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Timestamp for when the build logs should be pulled up until.                   | 1540106318643                                                                  |
| `statusCode`                                                                   | *models.StatusCode*                                                            | :heavy_minus_sign:                                                             | HTTP status code range to filter events by.                                    | 5xx                                                                            |
| `delimiter`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `builds`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The Team identifier to perform the request on behalf of.                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                  |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The Team slug to perform the request on behalf of.                             | my-team-url-slug                                                               |