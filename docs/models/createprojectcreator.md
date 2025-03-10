# CreateProjectCreator

## Example Usage

```typescript
import { CreateProjectCreator } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectCreator = {
  email: "Dean_Lebsack95@gmail.com",
  uid: "<id>",
  username: "Benny93",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `githubLogin`      | *string*           | :heavy_minus_sign: | N/A                |
| `gitlabLogin`      | *string*           | :heavy_minus_sign: | N/A                |
| `uid`              | *string*           | :heavy_check_mark: | N/A                |
| `username`         | *string*           | :heavy_check_mark: | N/A                |