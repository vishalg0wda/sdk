/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetTeamRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId: string;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/** @internal */
export const GetTeamRequest$inboundSchema: z.ZodType<
  GetTeamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string(),
  slug: z.string().optional(),
});

/** @internal */
export type GetTeamRequest$Outbound = {
  teamId: string;
  slug?: string | undefined;
};

/** @internal */
export const GetTeamRequest$outboundSchema: z.ZodType<
  GetTeamRequest$Outbound,
  z.ZodTypeDef,
  GetTeamRequest
> = z.object({
  teamId: z.string(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamRequest$ {
  /** @deprecated use `GetTeamRequest$inboundSchema` instead. */
  export const inboundSchema = GetTeamRequest$inboundSchema;
  /** @deprecated use `GetTeamRequest$outboundSchema` instead. */
  export const outboundSchema = GetTeamRequest$outboundSchema;
  /** @deprecated use `GetTeamRequest$Outbound` instead. */
  export type Outbound = GetTeamRequest$Outbound;
}

export function getTeamRequestToJSON(getTeamRequest: GetTeamRequest): string {
  return JSON.stringify(GetTeamRequest$outboundSchema.parse(getTeamRequest));
}

export function getTeamRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTeamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTeamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTeamRequest' from JSON`,
  );
}
