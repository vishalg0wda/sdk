# ListDeploymentAliasesResponseBody

The list of aliases assigned to the deployment

## Example Usage

```typescript
import { ListDeploymentAliasesResponseBody } from "@vercel/sdk/models/listdeploymentaliasesop.js";

let value: ListDeploymentAliasesResponseBody = {
  aliases: [
    {
      uid: "2WjyKQmM8ZnGcJsPWMrHRHrE",
      alias: "my-alias.vercel.app",
      created: new Date("2017-04-26T23:00:34.232Z"),
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `aliases`                                        | [models.Aliases](../models/aliases.md)[]         | :heavy_check_mark:                               | A list of the aliases assigned to the deployment |