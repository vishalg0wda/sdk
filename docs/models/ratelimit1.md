# RateLimit1

## Example Usage

```typescript
import { RateLimit1 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RateLimit1 = {
  algo: "fixed_window",
  window: 4630.44,
  limit: 9160.51,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `algo`                                             | [models.RateLimitAlgo](../models/ratelimitalgo.md) | :heavy_check_mark:                                 | N/A                                                |
| `window`                                           | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `limit`                                            | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `keys`                                             | *string*[]                                         | :heavy_check_mark:                                 | N/A                                                |
| `action`                                           | *models.RateLimitAction*                           | :heavy_minus_sign:                                 | N/A                                                |