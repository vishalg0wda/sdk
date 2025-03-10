# ListAccessGroupProjectsResponseBody

## Example Usage

```typescript
import { ListAccessGroupProjectsResponseBody } from "@vercel/sdk/models/listaccessgroupprojectsop.js";

let value: ListAccessGroupProjectsResponseBody = {
  projects: [
    {
      projectId: "<id>",
      role: "PROJECT_DEVELOPER",
      createdAt: "1732032065037",
      updatedAt: "1741486371760",
      project: {},
    },
  ],
  pagination: {
    count: 6667.67,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projects`                                                                                 | [models.ListAccessGroupProjectsProjects](../models/listaccessgroupprojectsprojects.md)[]   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [models.ListAccessGroupProjectsPagination](../models/listaccessgroupprojectspagination.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |