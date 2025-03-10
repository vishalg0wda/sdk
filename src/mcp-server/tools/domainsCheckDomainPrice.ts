/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { domainsCheckDomainPrice } from "../../funcs/domainsCheckDomainPrice.js";
import { CheckDomainPriceRequest$inboundSchema } from "../../models/checkdomainpriceop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CheckDomainPriceRequest$inboundSchema,
};

export const tool$domainsCheckDomainPrice: ToolDefinition<typeof args> = {
  name: "domains_check-domain-price",
  description: `Check the price for a domain

Check the price to purchase a domain and how long a single purchase period is.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await domainsCheckDomainPrice(
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
