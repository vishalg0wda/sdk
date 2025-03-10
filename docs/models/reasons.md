# Reasons

An object describing the reason why the team is being deleted.

## Example Usage

```typescript
import { Reasons } from "@vercel/sdk/models/deleteteamop.js";

let value: Reasons = {
  slug: "<value>",
  description:
    "stint unto sternly briefly provided accredit psst instead staid",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `slug`                                                        | *string*                                                      | :heavy_check_mark:                                            | Idenitifier slug of the reason why the team is being deleted. |
| `description`                                                 | *string*                                                      | :heavy_check_mark:                                            | Description of the reason why the team is being deleted.      |