# Two

The access scopes granted to the token.

## Example Usage

```typescript
import { Two } from "@vercel/sdk/models/authtoken.js";

let value: Two = {
  type: "team",
  teamId: "<id>",
  origin: "otp",
  createdAt: 7046.65,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [models.ScopesType](../models/scopestype.md)                       | :heavy_check_mark:                                                 | N/A                                                                |
| `teamId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `origin`                                                           | [models.AuthTokenScopesOrigin](../models/authtokenscopesorigin.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `expiresAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |