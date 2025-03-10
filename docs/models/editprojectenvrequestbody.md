# EditProjectEnvRequestBody

## Example Usage

```typescript
import { EditProjectEnvRequestBody } from "@vercel/sdk/models/editprojectenvop.js";

let value: EditProjectEnvRequestBody = {
  key: "GITHUB_APP_ID",
  target: [
    "preview",
  ],
  gitBranch: "feature-1",
  type: "plain",
  value: "bkWIjbnxcvo78",
  customEnvironmentIds: [
    "env_1234567890",
  ],
  comment: "database connection string for production",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `key`                                                                             | *string*                                                                          | :heavy_minus_sign:                                                                | The name of the environment variable                                              | GITHUB_APP_ID                                                                     |
| `target`                                                                          | [models.EditProjectEnvTarget](../models/editprojectenvtarget.md)[]                | :heavy_minus_sign:                                                                | The target environment of the environment variable                                | [<br/>"preview"<br/>]                                                             |
| `gitBranch`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | If defined, the git branch of the environment variable (must have target=preview) | feature-1                                                                         |
| `type`                                                                            | [models.EditProjectEnvType](../models/editprojectenvtype.md)                      | :heavy_minus_sign:                                                                | The type of environment variable                                                  | plain                                                                             |
| `value`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | The value of the environment variable                                             | bkWIjbnxcvo78                                                                     |
| `customEnvironmentIds`                                                            | *string*[]                                                                        | :heavy_minus_sign:                                                                | The custom environments that the environment variable should be synced to         |                                                                                   |
| `comment`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | A comment to add context on what this env var is for                              | database connection string for production                                         |