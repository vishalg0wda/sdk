# GetProjectsResponseBody

The paginated list of projects

## Example Usage

```typescript
import { GetProjectsResponseBody } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBody = {
  projects: [
    {
      accountId: "<id>",
      crons: {
        enabledAt: 6232.95,
        disabledAt: 8869.61,
        updatedAt: 6188.26,
        deploymentId: "<id>",
        definitions: [
          {
            host: "vercel.com",
            path: "/api/crons/sync-something?hello=world",
            schedule: "0 0 * * *",
          },
        ],
      },
      directoryListing: false,
      id: "<id>",
      latestDeployments: [
        {
          id: "<id>",
          createdAt: 1334.61,
          createdIn: "<value>",
          creator: {
            email: "Savanah92@hotmail.com",
            uid: "<id>",
            username: "Vivianne38",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "pro",
          previewCommentsEnabled: false,
          private: false,
          readyState: "BUILDING",
          type: "LAMBDAS",
          url: "https://juvenile-thigh.com",
          userId: "<id>",
        },
      ],
      name: "<value>",
      nodeVersion: "12.x",
      resourceConfig: {
        functionDefaultRegions: [
          "<value>",
        ],
      },
      defaultResourceConfig: {
        functionDefaultRegions: [
          "<value>",
        ],
      },
      targets: {
        "key": {
          id: "<id>",
          createdAt: 4402.64,
          createdIn: "<value>",
          creator: {
            email: "Maurine6@gmail.com",
            uid: "<id>",
            username: "Nadia30",
          },
          deploymentHostname: "<value>",
          name: "<value>",
          plan: "enterprise",
          previewCommentsEnabled: false,
          private: false,
          readyState: "INITIALIZING",
          type: "LAMBDAS",
          url: "https://wordy-completion.biz/",
          userId: "<id>",
        },
      },
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projects`                                                                                                                                                      | [models.GetProjectsProjects](../models/getprojectsprojects.md)[]                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |