/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { edgeConfigGetEdgeConfigBackup } from "../../funcs/edgeConfigGetEdgeConfigBackup.js";
import { GetEdgeConfigBackupRequest$inboundSchema } from "../../models/getedgeconfigbackupop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: GetEdgeConfigBackupRequest$inboundSchema,
};

export const tool$edgeConfigGetEdgeConfigBackup: ToolDefinition<typeof args> = {
  name: "edge-config_get-edge-config-backup",
  description: `Get Edge Config backup

Retrieves a specific version of an Edge Config from backup storage.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await edgeConfigGetEdgeConfigBackup(
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
