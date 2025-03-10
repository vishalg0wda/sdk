# SubmitPrepaymentBalancesRequestBody

## Example Usage

```typescript
import { SubmitPrepaymentBalancesRequestBody } from "@vercel/sdk/models/submitprepaymentbalancesop.js";

let value: SubmitPrepaymentBalancesRequestBody = {
  timestamp: new Date("2024-07-22T04:50:36.531Z"),
  balances: [
    {
      currencyValueInCents: 6651.83,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                    | :heavy_check_mark:                                                                                                                                                               | Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept. |
| `balances`                                                                                                                                                                       | [models.Balances](../models/balances.md)[]                                                                                                                                       | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |