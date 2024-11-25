# PutFirewallConfigResponseBody

## Example Usage

```typescript
import { PutFirewallConfigResponseBody } from "@vercel/sdk/models/operations/putfirewallconfig.js";

let value: PutFirewallConfigResponseBody = {
  active: {
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 4209.10,
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
        action: "deny",
      },
      gen: {
        active: false,
        action: "log",
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
        action: "deny",
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
                type: "ja3_digest",
                op: "ninc",
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
        hostname: "outlandish-event.biz",
        ip: "a256:2aee:1067:bf8f:fad1:7e4c:f8bb:fb2b",
        action: "log",
      },
    ],
    changes: [
      {},
    ],
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `active`                                               | [operations.Active](../../models/operations/active.md) | :heavy_check_mark:                                     | N/A                                                    |