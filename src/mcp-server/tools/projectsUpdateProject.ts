/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectsUpdateProject } from "../../funcs/projectsUpdateProject.js";
import { UpdateProjectRequest$inboundSchema } from "../../models/updateprojectop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UpdateProjectRequest$inboundSchema,
};

export const tool$projectsUpdateProject: ToolDefinition<typeof args> = {
  name: "projects_update-project",
  description: `Update an existing project

Update the fields of a project using either its \`name\` or \`id\`.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await projectsUpdateProject(
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
