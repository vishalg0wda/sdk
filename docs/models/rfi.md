# Rfi

Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.

## Example Usage

```typescript
import { Rfi } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Rfi = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                     | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `action`                                                                                                     | [models.GetFirewallConfigSecurityResponse200Action](../models/getfirewallconfigsecurityresponse200action.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |