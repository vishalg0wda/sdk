# GetFirewallConfigIps

## Example Usage

```typescript
import { GetFirewallConfigIps } from "@vercel/sdk/models/operations/getfirewallconfig.js";

let value: GetFirewallConfigIps = {
  id: "<id>",
  hostname: "well-to-do-longboat.name",
  ip: "6664:dca8:e4c1:4dec:dfaa:c2fb:3f7d:db2c",
  action: "log",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `hostname`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `ip`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `notes`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `action`                                                                                                 | [operations.GetFirewallConfigSecurityAction](../../models/operations/getfirewallconfigsecurityaction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |