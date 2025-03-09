# UpdateFirewallConfigRequestBodySecurityValue

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityValue } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityValue = {
  hostname: "incomparable-finer.org",
  ip: "82bf:e42f:437b:b1af:bc4c:cff9:d00c:6567",
  action: "log",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `hostname`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `ip`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `notes`                                                                                                                                      | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `action`                                                                                                                                     | [models.UpdateFirewallConfigRequestBodySecurityRequest8ValueAction](../models/updatefirewallconfigrequestbodysecurityrequest8valueaction.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |