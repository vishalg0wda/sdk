# GetRecordsResponseBody

Successful response retrieving a list of paginated DNS records.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.GetRecordsResponseBody2`

```typescript
const value: operations.GetRecordsResponseBody2 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "HTTPS",
      value: "<value>",
      creator: "<value>",
      created: 4283.79,
      updated: 9231.59,
      createdAt: 1050.95,
      updatedAt: 9825.74,
    },
  ],
};
```

### `operations.ResponseBody3`

```typescript
const value: operations.ResponseBody3 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "TXT",
      value: "<value>",
      creator: "<value>",
      created: 738.26,
      updated: 4909.66,
      createdAt: 7175.60,
      updatedAt: 7381.52,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

