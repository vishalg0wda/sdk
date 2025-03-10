# UpdateProjectDataCacheResourceConfig

## Example Usage

```typescript
import { UpdateProjectDataCacheResourceConfig } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheResourceConfig = {
  functionDefaultRegions: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `fluid`                                                                    | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `functionDefaultRegions`                                                   | *string*[]                                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `functionDefaultTimeout`                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `functionDefaultMemoryType`                                                | [models.FunctionDefaultMemoryType](../models/functiondefaultmemorytype.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `functionZeroConfigFailover`                                               | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `elasticConcurrencyEnabled`                                                | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |