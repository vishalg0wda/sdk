# Anomalies

## Example Usage

```typescript
import { Anomalies } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: Anomalies = {
  ownerId: "<id>",
  projectId: "<id>",
  startTime: 7503.43,
  endTime: 2878.34,
  atMinute: 4949.72,
  affectedHostMap: {
    "key": {},
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `ownerId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `startTime`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `endTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `atMinute`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `state`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `affectedHostMap`                                                      | Record<string, [models.AffectedHostMap](../models/affectedhostmap.md)> | :heavy_check_mark:                                                     | N/A                                                                    |