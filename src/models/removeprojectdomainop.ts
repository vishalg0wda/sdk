/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type RemoveProjectDomainRequest = {
  /**
   * The unique project identifier or the project name
   */
  idOrName: string;
  /**
   * The project domain name
   */
  domain: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/**
 * The domain was succesfully removed from the project
 */
export type RemoveProjectDomainResponseBody = {};

/** @internal */
export const RemoveProjectDomainRequest$inboundSchema: z.ZodType<
  RemoveProjectDomainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrName: z.string(),
  domain: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type RemoveProjectDomainRequest$Outbound = {
  idOrName: string;
  domain: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const RemoveProjectDomainRequest$outboundSchema: z.ZodType<
  RemoveProjectDomainRequest$Outbound,
  z.ZodTypeDef,
  RemoveProjectDomainRequest
> = z.object({
  idOrName: z.string(),
  domain: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveProjectDomainRequest$ {
  /** @deprecated use `RemoveProjectDomainRequest$inboundSchema` instead. */
  export const inboundSchema = RemoveProjectDomainRequest$inboundSchema;
  /** @deprecated use `RemoveProjectDomainRequest$outboundSchema` instead. */
  export const outboundSchema = RemoveProjectDomainRequest$outboundSchema;
  /** @deprecated use `RemoveProjectDomainRequest$Outbound` instead. */
  export type Outbound = RemoveProjectDomainRequest$Outbound;
}

export function removeProjectDomainRequestToJSON(
  removeProjectDomainRequest: RemoveProjectDomainRequest,
): string {
  return JSON.stringify(
    RemoveProjectDomainRequest$outboundSchema.parse(removeProjectDomainRequest),
  );
}

export function removeProjectDomainRequestFromJSON(
  jsonString: string,
): SafeParseResult<RemoveProjectDomainRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveProjectDomainRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveProjectDomainRequest' from JSON`,
  );
}

/** @internal */
export const RemoveProjectDomainResponseBody$inboundSchema: z.ZodType<
  RemoveProjectDomainResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type RemoveProjectDomainResponseBody$Outbound = {};

/** @internal */
export const RemoveProjectDomainResponseBody$outboundSchema: z.ZodType<
  RemoveProjectDomainResponseBody$Outbound,
  z.ZodTypeDef,
  RemoveProjectDomainResponseBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveProjectDomainResponseBody$ {
  /** @deprecated use `RemoveProjectDomainResponseBody$inboundSchema` instead. */
  export const inboundSchema = RemoveProjectDomainResponseBody$inboundSchema;
  /** @deprecated use `RemoveProjectDomainResponseBody$outboundSchema` instead. */
  export const outboundSchema = RemoveProjectDomainResponseBody$outboundSchema;
  /** @deprecated use `RemoveProjectDomainResponseBody$Outbound` instead. */
  export type Outbound = RemoveProjectDomainResponseBody$Outbound;
}

export function removeProjectDomainResponseBodyToJSON(
  removeProjectDomainResponseBody: RemoveProjectDomainResponseBody,
): string {
  return JSON.stringify(
    RemoveProjectDomainResponseBody$outboundSchema.parse(
      removeProjectDomainResponseBody,
    ),
  );
}

export function removeProjectDomainResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<RemoveProjectDomainResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RemoveProjectDomainResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RemoveProjectDomainResponseBody' from JSON`,
  );
}
