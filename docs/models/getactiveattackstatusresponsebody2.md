# GetActiveAttackStatusResponseBody2

## Example Usage

```typescript
import { GetActiveAttackStatusResponseBody2 } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: GetActiveAttackStatusResponseBody2 = {
  anomalies: [
    {
      ownerId: "<id>",
      projectId: "<id>",
      startTime: 1862.11,
      endTime: 1883.99,
      atMinute: 4358.41,
      affectedHostMap: {
        "key": {},
      },
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `anomalies`                                  | [models.Anomalies](../models/anomalies.md)[] | :heavy_check_mark:                           | N/A                                          |