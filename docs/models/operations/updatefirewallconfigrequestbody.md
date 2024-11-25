# UpdateFirewallConfigRequestBody


## Supported Types

### `operations.UpdateFirewallConfigRequestBody1`

```typescript
const value: operations.UpdateFirewallConfigRequestBody1 = {
  action: "firewallEnabled",
  value: false,
};
```

### `operations.UpdateFirewallConfigRequestBody2`

```typescript
const value: operations.UpdateFirewallConfigRequestBody2 = {
  action: "rules.insert",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "geo_city",
            op: "gt",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `operations.UpdateFirewallConfigRequestBody3`

```typescript
const value: operations.UpdateFirewallConfigRequestBody3 = {
  action: "rules.update",
  id: "<id>",
  value: {
    name: "<value>",
    active: false,
    conditionGroup: [
      {
        conditions: [
          {
            type: "host",
            op: "inc",
          },
        ],
      },
    ],
    action: {},
  },
};
```

### `operations.UpdateFirewallConfigRequestBody4`

```typescript
const value: operations.UpdateFirewallConfigRequestBody4 = {
  action: "rules.remove",
  id: "<id>",
};
```

### `operations.UpdateFirewallConfigRequestBody5`

```typescript
const value: operations.UpdateFirewallConfigRequestBody5 = {
  action: "rules.priority",
  id: "<id>",
  value: 445.10,
};
```

### `operations.RequestBody6`

```typescript
const value: operations.RequestBody6 = {
  action: "crs.update",
  id: "lfi",
  value: {
    active: false,
    action: "deny",
  },
};
```

### `operations.RequestBody7`

```typescript
const value: operations.RequestBody7 = {
  action: "crs.disable",
};
```

### `operations.RequestBody8`

```typescript
const value: operations.RequestBody8 = {
  action: "ip.insert",
  value: {
    hostname: "ecstatic-flat.biz",
    ip: "7d3a:1a0b:e0eb:7d69:2e0a:fc3a:fcc2:d8d6",
    action: "log",
  },
};
```

### `operations.RequestBody9`

```typescript
const value: operations.RequestBody9 = {
  action: "ip.update",
  id: "<id>",
  value: {
    hostname: "intelligent-sustenance.biz",
    ip: "191.105.150.6",
    action: "bypass",
  },
};
```

### `operations.RequestBody10`

```typescript
const value: operations.RequestBody10 = {
  action: "ip.remove",
  id: "<id>",
};
```

### `operations.Eleven`

```typescript
const value: operations.Eleven = {
  action: "managedRules.update",
  id: "owasp",
  value: {
    active: false,
  },
};
```

