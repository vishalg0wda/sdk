# BuyDomainDomainsResponseBody

## Example Usage

```typescript
import { BuyDomainDomainsResponseBody } from "@vercel/sdk/models/buydomainop.js";

let value: BuyDomainDomainsResponseBody = {
  domain: {
    uid: "<id>",
    ns: [
      "<value>",
    ],
    verified: false,
    created: 3466.08,
    pending: false,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | [models.BuyDomainDomain](../models/buydomaindomain.md) | :heavy_check_mark:                                     | N/A                                                    |