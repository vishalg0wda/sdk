# NodeVersion

Override the Node.js version that should be used for this deployment

## Example Usage

```typescript
import { NodeVersion } from "@vercel/sdk/models/createdeploymentop.js";

let value: NodeVersion = "8.10.x";
```

## Values

```typescript
"22.x" | "20.x" | "18.x" | "16.x" | "14.x" | "12.x" | "10.x" | "8.10.x"
```