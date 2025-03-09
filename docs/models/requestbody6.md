# RequestBody6

Enable a managed rule

## Example Usage

```typescript
import { RequestBody6 } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: RequestBody6 = {
  action: "crs.update",
  id: "rfi",
  value: {
    active: false,
    action: "log",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                           | [models.UpdateFirewallConfigRequestBodySecurityRequest6Action](../models/updatefirewallconfigrequestbodysecurityrequest6action.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | [models.Id](../models/id.md)                                                                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.UpdateFirewallConfigRequestBodyValue](../models/updatefirewallconfigrequestbodyvalue.md)                                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |