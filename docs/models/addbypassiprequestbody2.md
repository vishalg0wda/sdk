# AddBypassIpRequestBody2

## Example Usage

```typescript
import { AddBypassIpRequestBody2 } from "@vercel/sdk/models/addbypassipop.js";

let value: AddBypassIpRequestBody2 = {
  projectScope: false,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `domain`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `projectScope`                                                   | *boolean*                                                        | :heavy_check_mark:                                               | If the specified bypass will apply to all domains for a project. |
| `sourceIp`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `allSources`                                                     | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `ttl`                                                            | *number*                                                         | :heavy_minus_sign:                                               | Time to live in milliseconds                                     |
| `note`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |