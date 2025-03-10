/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectsCreateProjectEnv } from "../../funcs/projectsCreateProjectEnv.js";
import { CreateProjectEnvRequest$inboundSchema } from "../../models/createprojectenvop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CreateProjectEnvRequest$inboundSchema,
};

export const tool$projectsCreateProjectEnv: ToolDefinition<typeof args> = {
  name: "projects_create-project-env",
  description: `Create one or more environment variables

Create one or more environment variables for a project by passing its \`key\`, \`value\`, \`type\` and \`target\` and by specifying the project by either passing the project \`id\` or \`name\` in the URL. If you include \`upsert=true\` as a query parameter, a new environment variable will not be created if it already exists but, the existing variable's value will be updated.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await projectsCreateProjectEnv(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
