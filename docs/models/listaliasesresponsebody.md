# ListAliasesResponseBody

The paginated list of aliases

## Example Usage

```typescript
import { ListAliasesResponseBody } from "@vercel/sdk/models/listaliasesop.js";

let value: ListAliasesResponseBody = {
  aliases: [
    {
      alias: "my-alias.vercel.app",
      created: new Date("2017-04-26T23:00:34.232Z"),
      createdAt: 1540095775941,
      creator: {
        uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
        email: "john-doe@gmail.com",
        username: "john-doe",
      },
      deletedAt: 1540095775941,
      deployment: {
        id: "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
        url: "my-instant-deployment-3ij3cxz9qr.now.sh",
        meta: "{}",
      },
      deploymentId: "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
      projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
      uid: "<id>",
      updatedAt: 1540095775941,
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
| `aliases`                                                                                                                                                       | [models.ListAliasesAliases](../models/listaliasesaliases.md)[]                                                                                                  | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |