# GetRecordsResponseBody

Successful response retrieving a list of paginated DNS records.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `models.GetRecordsResponseBody2`

```typescript
const value: models.GetRecordsResponseBody2 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "HTTPS",
      value: "<value>",
      creator: "<value>",
      created: 4169.34,
      updated: 4004.7,
      createdAt: 6953.47,
      updatedAt: 928.51,
    },
  ],
};
```

### `models.ResponseBody3`

```typescript
const value: models.ResponseBody3 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "AAAA",
      value: "<value>",
      creator: "<value>",
      created: 8511.99,
      updated: 7710.78,
      createdAt: 2814.54,
      updatedAt: 3772.69,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

