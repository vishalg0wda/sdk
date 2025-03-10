# GetRecordsRequest

## Example Usage

```typescript
import { GetRecordsRequest } from "@vercel/sdk/models/getrecordsop.js";

let value: GetRecordsRequest = {
  domain: "example.com",
  limit: "20",
  since: "1609499532000",
  until: "1612264332000",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | example.com                                              |
| `limit`                                                  | *string*                                                 | :heavy_minus_sign:                                       | Maximum number of records to list from a request.        | 20                                                       |
| `since`                                                  | *string*                                                 | :heavy_minus_sign:                                       | Get records created after this JavaScript timestamp.     | 1609499532000                                            |
| `until`                                                  | *string*                                                 | :heavy_minus_sign:                                       | Get records created before this JavaScript timestamp.    | 1612264332000                                            |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |