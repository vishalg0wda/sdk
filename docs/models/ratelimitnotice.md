# RateLimitNotice

## Example Usage

```typescript
import { RateLimitNotice } from "@vercel/sdk/models/ratelimitnotice.js";

let value: RateLimitNotice = {
  remaining: 989089,
  reset: 662857,
  resetMs: 845365,
  total: 778039,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `remaining`        | *number*           | :heavy_check_mark: | N/A                |
| `reset`            | *number*           | :heavy_check_mark: | N/A                |
| `resetMs`          | *number*           | :heavy_check_mark: | N/A                |
| `total`            | *number*           | :heavy_check_mark: | N/A                |