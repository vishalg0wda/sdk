# SearchRepoResponseBody2

## Example Usage

```typescript
import { SearchRepoResponseBody2 } from "@vercel/sdk/models/operations/searchrepo.js";

let value: SearchRepoResponseBody2 = {
  gitAccount: {
    provider: "bitbucket",
    namespaceId: "<id>",
  },
  repos: [
    {
      id: 756.11,
      provider: "github-custom-host",
      url: "https://accomplished-marksman.com/",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: 6981.16,
        name: "<value>",
      },
      ownerType: "user",
      private: false,
      defaultBranch: "<value>",
      updatedAt: 9417.42,
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `gitAccount`                                                   | [operations.GitAccount](../../models/operations/gitaccount.md) | :heavy_check_mark:                                             | N/A                                                            |
| `repos`                                                        | [operations.Repos](../../models/operations/repos.md)[]         | :heavy_check_mark:                                             | N/A                                                            |