# Lfi

Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.

## Example Usage

```typescript
import { Lfi } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: Lfi = {
  active: false,
  action: "deny",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `action`                                                                                                                                                                       | [models.GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsLfiAction](../models/getfirewallconfigsecurityresponse200applicationjsonresponsebodycrslfiaction.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |