# AnomalyAlerts

## Example Usage

```typescript
import { AnomalyAlerts } from "@vercel/sdk/models/getactiveattackstatusop.js";

let value: AnomalyAlerts = {
  atMinute: "<value>",
  zscore: 9473.09,
  totalRequestsMinute: 2641.25,
  avgRequests: 4724.29,
  stddevRequests: 8113.8,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `atMinute`            | *string*              | :heavy_check_mark:    | N/A                   |
| `zscore`              | *number*              | :heavy_check_mark:    | N/A                   |
| `totalRequestsMinute` | *number*              | :heavy_check_mark:    | N/A                   |
| `avgRequests`         | *number*              | :heavy_check_mark:    | N/A                   |
| `stddevRequests`      | *number*              | :heavy_check_mark:    | N/A                   |