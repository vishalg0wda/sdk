# GetFirewallConfigResponseBody

## Example Usage

```typescript
import { GetFirewallConfigResponseBody } from "@vercel/sdk/models/operations/getfirewallconfig.js";

let value: GetFirewallConfigResponseBody = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 9830.67,
  updatedAt: "<value>",
  firewallEnabled: false,
  crs: {
    sd: {
      active: false,
      action: "log",
    },
    ma: {
      active: false,
      action: "log",
    },
    lfi: {
      active: false,
      action: "deny",
    },
    rfi: {
      active: false,
      action: "log",
    },
    rce: {
      active: false,
      action: "log",
    },
    php: {
      active: false,
      action: "log",
    },
    gen: {
      active: false,
      action: "deny",
    },
    xss: {
      active: false,
      action: "deny",
    },
    sqli: {
      active: false,
      action: "log",
    },
    sf: {
      active: false,
      action: "log",
    },
    java: {
      active: false,
      action: "deny",
    },
  },
  rules: [
    {
      id: "<id>",
      name: "<value>",
      active: false,
      conditionGroup: [
        {
          conditions: [
            {
              type: "target_path",
              op: "gt",
            },
          ],
        },
      ],
      action: {},
    },
  ],
  ips: [
    {
      id: "<id>",
      hostname: "bleak-bonnet.info",
      ip: "103.116.249.241",
      action: "deny",
    },
  ],
  changes: [
    {},
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `ownerId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `projectKey`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `version`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `firewallEnabled`                                                                                    | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `crs`                                                                                                | [operations.GetFirewallConfigCrs](../../models/operations/getfirewallconfigcrs.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `rules`                                                                                              | [operations.GetFirewallConfigRules](../../models/operations/getfirewallconfigrules.md)[]             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ips`                                                                                                | [operations.GetFirewallConfigIps](../../models/operations/getfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `changes`                                                                                            | [operations.Changes](../../models/operations/changes.md)[]                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `managedRules`                                                                                       | [operations.GetFirewallConfigManagedRules](../../models/operations/getfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |