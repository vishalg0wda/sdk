# CreateProjectStages

An array of all the stages required during a deployment release. each stage requires an approval before advancing to the next stage.

## Example Usage

```typescript
import { CreateProjectStages } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectStages = {
  targetPercentage: 656.04,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `targetPercentage`                                       | *number*                                                 | :heavy_check_mark:                                       | The percentage of traffic to serve to the new deployment |