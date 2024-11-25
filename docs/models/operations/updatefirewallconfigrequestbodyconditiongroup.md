# UpdateFirewallConfigRequestBodyConditionGroup

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodyConditionGroup } from "@vercel/sdk/models/operations/updatefirewallconfig.js";

let value: UpdateFirewallConfigRequestBodyConditionGroup = {
  conditions: [
    {
      type: "ip_address",
      op: "lt",
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `conditions`                                                                                                                   | [operations.UpdateFirewallConfigRequestBodyConditions](../../models/operations/updatefirewallconfigrequestbodyconditions.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |