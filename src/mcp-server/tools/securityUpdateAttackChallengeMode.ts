/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { securityUpdateAttackChallengeMode } from "../../funcs/securityUpdateAttackChallengeMode.js";
import { UpdateAttackChallengeModeRequest$inboundSchema } from "../../models/updateattackchallengemodeop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UpdateAttackChallengeModeRequest$inboundSchema,
};

export const tool$securityUpdateAttackChallengeMode: ToolDefinition<
  typeof args
> = {
  name: "security_update-attack-challenge-mode",
  description: `Update Attack Challenge mode

Update the setting for determining if the project has Attack Challenge mode enabled.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await securityUpdateAttackChallengeMode(
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
