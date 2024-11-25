# Active

## Example Usage

```typescript
import { Active } from "@vercel/sdk/models/operations/putfirewallconfig.js";

let value: Active = {
  ownerId: "<id>",
  projectKey: "<value>",
  id: "<id>",
  version: 8429.35,
  updatedAt: "<value>",
  firewallEnabled: false,
  crs: {
    sd: {
      active: false,
      action: "deny",
    },
    ma: {
      active: false,
      action: "deny",
    },
    lfi: {
      active: false,
      action: "log",
    },
    rfi: {
      active: false,
      action: "log",
    },
    rce: {
      active: false,
      action: "deny",
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
      action: "log",
    },
    sqli: {
      active: false,
      action: "deny",
    },
    sf: {
      active: false,
      action: "log",
    },
    java: {
      active: false,
      action: "log",
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
              op: "neq",
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
      hostname: "tired-tomatillo.com",
      ip: "6cdb:2bdf:cffe:bad0:22a7:ed8b:eecd:1ebb",
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
| `crs`                                                                                                | [operations.PutFirewallConfigCrs](../../models/operations/putfirewallconfigcrs.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `rules`                                                                                              | [operations.PutFirewallConfigRules](../../models/operations/putfirewallconfigrules.md)[]             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ips`                                                                                                | [operations.PutFirewallConfigIps](../../models/operations/putfirewallconfigips.md)[]                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `changes`                                                                                            | [operations.PutFirewallConfigChanges](../../models/operations/putfirewallconfigchanges.md)[]         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `managedRules`                                                                                       | [operations.PutFirewallConfigManagedRules](../../models/operations/putfirewallconfigmanagedrules.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |