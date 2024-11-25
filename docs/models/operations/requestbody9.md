# RequestBody9

Update an IP Blocking rule

## Example Usage

```typescript
import { RequestBody9 } from "@vercel/sdk/models/operations/updatefirewallconfig.js";

let value: RequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "ornery-technologist.info",
    ip: "bdcc:2f5f:ba5f:2fcb:96bd:6b57:4fca:28d1",
    action: "deny",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                             | [operations.UpdateFirewallConfigRequestBodySecurityRequest9Action](../../models/operations/updatefirewallconfigrequestbodysecurityrequest9action.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `value`                                                                                                                                              | [operations.UpdateFirewallConfigRequestBodySecurityRequest9Value](../../models/operations/updatefirewallconfigrequestbodysecurityrequest9value.md)   | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |