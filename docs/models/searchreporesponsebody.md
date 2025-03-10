# SearchRepoResponseBody


## Supported Types

### `models.SearchRepoResponseBody1`

```typescript
const value: models.SearchRepoResponseBody1 = {};
```

### `models.SearchRepoResponseBody2`

```typescript
const value: models.SearchRepoResponseBody2 = {
  gitAccount: {
    provider: "gitlab",
    namespaceId: 6844.99,
  },
  repos: [
    {
      id: "<id>",
      provider: "github-custom-host",
      url: "https://overcooked-swine.org/",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: "<id>",
        name: "<value>",
      },
      ownerType: "user",
      private: false,
      defaultBranch: "<value>",
      updatedAt: 1122.24,
    },
  ],
};
```

