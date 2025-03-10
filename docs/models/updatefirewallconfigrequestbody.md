# UpdateFirewallConfigRequestBody


## Supported Types

### `models.UpdateFirewallConfigRequestBody1`

```typescript
const value: models.UpdateFirewallConfigRequestBody1 = {
  action: "firewallEnabled",
  value: false,
};
```

### `models.UpdateFirewallConfigRequestBody2`

```typescript
const value: models.UpdateFirewallConfigRequestBody2 = {
  action: "rules.insert",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "geo_country",
            op: "lte",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `models.UpdateFirewallConfigRequestBody3`

```typescript
const value: models.UpdateFirewallConfigRequestBody3 = {
  action: "rules.update",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "geo_country_region",
            op: "suf",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `models.UpdateFirewallConfigRequestBody4`

```typescript
const value: models.UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
};
```

### `models.UpdateFirewallConfigRequestBody5`

```typescript
const value: models.UpdateFirewallConfigRequestBody5 = {
  action: "rules.priority",
  id: "<id>",
  value: 780.74,
};
```

### `models.RequestBody6`

```typescript
const value: models.RequestBody6 = {
  action: "crs.update",
  id: "rfi",
  value: {
    active: false,
    action: "log",
  },
};
```

### `models.RequestBody7`

```typescript
const value: models.RequestBody7 = {
  action: "crs.disable",
};
```

### `models.RequestBody8`

```typescript
const value: models.RequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "distinct-stall.net",
    ip: "135.138.182.132",
    action: "deny",
  },
};
```

### `models.RequestBody9`

```typescript
const value: models.RequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "sore-halt.org",
    ip: "67.85.146.229",
    action: "deny",
  },
};
```

### `models.RequestBody10`

```typescript
const value: models.RequestBody10 = {
  action: "ip.remove",
  id: "<id>",
};
```

### `models.Eleven`

```typescript
const value: models.Eleven = {
  action: "managedRules.update",
  id: "<id>",
  value: {
    active: false,
  },
};
```

### `models.Twelve`

```typescript
const value: models.Twelve = {
  id: "<id>",
  value: {
    "key": {
      active: false,
    },
  },
};
```

