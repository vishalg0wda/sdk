# GetCheckLCP

## Example Usage

```typescript
import { GetCheckLCP } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckLCP = {
  value: 6778.17,
  source: "web-vitals",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `value`                                                          | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previousValue`                                                  | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `source`                                                         | [models.GetCheckChecksSource](../models/getcheckcheckssource.md) | :heavy_check_mark:                                               | N/A                                                              |