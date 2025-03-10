/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { edgeConfigDeleteEdgeConfig } from "../../funcs/edgeConfigDeleteEdgeConfig.js";
import { DeleteEdgeConfigRequest$inboundSchema } from "../../models/deleteedgeconfigop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: DeleteEdgeConfigRequest$inboundSchema,
};

export const tool$edgeConfigDeleteEdgeConfig: ToolDefinition<typeof args> = {
  name: "edge-config_delete-edge-config",
  description: `Delete an Edge Config

Delete an Edge Config by id.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await edgeConfigDeleteEdgeConfig(
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

    return formatResult(void 0, apiCall);
  },
};
