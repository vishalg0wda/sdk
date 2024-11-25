# GetCertByIdResponseBody

## Example Usage

```typescript
import { GetCertByIdResponseBody } from "@vercel/sdk/models/operations/getcertbyid.js";

let value: GetCertByIdResponseBody = {
  id: "<id>",
  createdAt: 4343.82,
  expiresAt: 5753.97,
  autoRenew: false,
  cns: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_check_mark: | N/A                |
| `autoRenew`        | *boolean*          | :heavy_check_mark: | N/A                |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |