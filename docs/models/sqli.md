# Sqli

SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.

## Example Usage

```typescript
import { Sqli } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Sqli = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                         | *boolean*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `action`                                                                                                                                                                         | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrssqliaction.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |