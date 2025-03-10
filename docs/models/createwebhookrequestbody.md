# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "@vercel/sdk/models/createwebhookop.js";

let value: CreateWebhookRequestBody = {
  url: "https://ill-fated-molasses.net",
  events: [
    "deployment-check-rerequested",
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `url`                                  | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `events`                               | [models.Events](../models/events.md)[] | :heavy_check_mark:                     | N/A                                    |
| `projectIds`                           | *string*[]                             | :heavy_minus_sign:                     | N/A                                    |