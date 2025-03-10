# Erl

## Example Usage

```typescript
import { Erl } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: Erl = {
  algo: "fixed_window",
  window: 8221.18,
  limit: 1898.48,
  keys: [
    "<value>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `algo`                           | [models.Algo](../models/algo.md) | :heavy_check_mark:               | N/A                              |
| `window`                         | *number*                         | :heavy_check_mark:               | N/A                              |
| `limit`                          | *number*                         | :heavy_check_mark:               | N/A                              |
| `keys`                           | *string*[]                       | :heavy_check_mark:               | N/A                              |