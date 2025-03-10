# ListAccessGroupsResponseBody


## Supported Types

### `models.ListAccessGroupsResponseBody1`

```typescript
const value: models.ListAccessGroupsResponseBody1 = {};
```

### `models.ListAccessGroupsResponseBody2`

```typescript
const value: models.ListAccessGroupsResponseBody2 = {
  accessGroups: [
    {
      isDsyncManaged: false,
      name: "my-access-group",
      createdAt: "1588720733602",
      teamId: "team_123a6c5209bc3778245d011443644c8d27dc2c50",
      updatedAt: "1588720733602",
      accessGroupId: "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
      membersCount: 5,
      projectsCount: 2,
      teamRoles: [
        "DEVELOPER",
        "BILLING",
      ],
      teamPermissions: [
        "CreateProject",
      ],
    },
  ],
  pagination: {
    count: 5684.34,
    next: "<value>",
  },
};
```

