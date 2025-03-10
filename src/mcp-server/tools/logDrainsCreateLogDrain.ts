/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { logDrainsCreateLogDrain } from "../../funcs/logDrainsCreateLogDrain.js";
import { CreateLogDrainRequest$inboundSchema } from "../../models/createlogdrainop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CreateLogDrainRequest$inboundSchema,
};

export const tool$logDrainsCreateLogDrain: ToolDefinition<typeof args> = {
  name: "log-drains_create-log-drain",
  description: `Creates a new Integration Log Drain

Creates an Integration log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await logDrainsCreateLogDrain(
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
