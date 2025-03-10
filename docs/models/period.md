# Period

Period for the billing cycle. The period end date cannot be older than 24 hours earlier than our current server's time.

## Example Usage

```typescript
import { Period } from "@vercel/sdk/models/submitbillingdataop.js";

let value: Period = {
  start: new Date("2024-02-16T15:28:53.569Z"),
  end: new Date("2024-01-29T13:56:15.278Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |