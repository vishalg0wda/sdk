# GetAllChecksLCP

## Example Usage

```typescript
import { GetAllChecksLCP } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksLCP = {
  value: 641.47,
  source: "web-vitals",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `value`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previousValue`                                                          | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `source`                                                                 | [models.GetAllChecksChecksSource](../models/getallcheckscheckssource.md) | :heavy_check_mark:                                                       | N/A                                                                      |