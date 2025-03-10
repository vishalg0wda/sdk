# UpdateFirewallConfigRateLimit1

## Example Usage

```typescript
import { UpdateFirewallConfigRateLimit1 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRateLimit1 = {
  algo: "fixed_window",
  window: 2569.75,
  limit: 2669.76,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `algo`                                                                                     | [models.UpdateFirewallConfigRateLimitAlgo](../models/updatefirewallconfigratelimitalgo.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `window`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `keys`                                                                                     | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `action`                                                                                   | *models.UpdateFirewallConfigRateLimitAction*                                               | :heavy_minus_sign:                                                                         | N/A                                                                                        |