# CreateConfigurableLogDrainRequest

## Example Usage

```typescript
import { CreateConfigurableLogDrainRequest } from "@vercel/sdk/models/createconfigurablelogdrainop.js";

let value: CreateConfigurableLogDrainRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    deliveryFormat: "json",
    url: "https://winged-premier.org/",
    sources: [
      "edge",
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The Team identifier to perform the request on behalf of.                                           | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                      |
| `slug`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The Team slug to perform the request on behalf of.                                                 | my-team-url-slug                                                                                   |
| `requestBody`                                                                                      | [models.CreateConfigurableLogDrainRequestBody](../models/createconfigurablelogdrainrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |