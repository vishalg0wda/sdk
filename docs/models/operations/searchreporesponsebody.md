# SearchRepoResponseBody


## Supported Types

### `operations.SearchRepoResponseBody1`

```typescript
const value: operations.SearchRepoResponseBody1 = {};
```

### `operations.SearchRepoResponseBody2`

```typescript
const value: operations.SearchRepoResponseBody2 = {
  gitAccount: {
    provider: "gitlab",
    namespaceId: "<id>",
  },
  repos: [
    {
      id: 7319.30,
      provider: "github-custom-host",
      url: "https://hateful-obligation.org/",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: "<id>",
        name: "<value>",
      },
      ownerType: "team",
      private: false,
      defaultBranch: "<value>",
      updatedAt: 276.53,
    },
  ],
};
```

