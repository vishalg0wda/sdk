# SubmitBillingDataBilling

Billing data (interim invoicing data).


## Supported Types

### `models.Billing1[]`

```typescript
const value: models.Billing1[] = [
  {
    billingPlanId: "<id>",
    name: "<value>",
    price: "476.69",
    quantity: 6050.43,
    units: "<value>",
    total: "<value>",
  },
];
```

### `models.Billing2`

```typescript
const value: models.Billing2 = {
  items: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "303.69",
      quantity: 1594.69,
      units: "<value>",
      total: "<value>",
    },
  ],
};
```

