# Repos

## Example Usage

```typescript
import { Repos } from "@vercel/sdk/models/operations/searchrepo.js";

let value: Repos = {
  id: "<id>",
  provider: "github",
  url: "https://whopping-scaffold.com/",
  name: "<value>",
  slug: "<value>",
  namespace: "<value>",
  owner: {
    id: 4137.68,
    name: "<value>",
  },
  ownerType: "user",
  private: false,
  defaultBranch: "<value>",
  updatedAt: 1620.73,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *operations.ResponseBodyId*                                                                            | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `provider`                                                                                             | [operations.SearchRepoResponseBodyProvider](../../models/operations/searchreporesponsebodyprovider.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `url`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `slug`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `namespace`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `owner`                                                                                                | [operations.Owner](../../models/operations/owner.md)                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `ownerType`                                                                                            | [operations.ResponseBodyOwnerType](../../models/operations/responsebodyownertype.md)                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `private`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `defaultBranch`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |