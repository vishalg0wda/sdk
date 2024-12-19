/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type ListPromoteAliasesRequest = {
  projectId: string;
  /**
   * Maximum number of aliases to list from a request (max 100).
   */
  limit?: number | undefined;
  /**
   * Get aliases created after this epoch timestamp.
   */
  since?: number | undefined;
  /**
   * Get aliases created before this epoch timestamp.
   */
  until?: number | undefined;
  /**
   * Filter results down to aliases that failed to map to the requested deployment
   */
  failedOnly?: boolean | undefined;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

export type ResponseBodyAliases = {
  status: string;
  alias: string;
  id: string;
};

export type ListPromoteAliasesResponseBody2 = {
  aliases: Array<ResponseBodyAliases>;
  /**
   * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
   */
  pagination: Pagination;
};

export type ListPromoteAliasesResponseBody1 = {};

export type ListPromoteAliasesResponseBody =
  | ListPromoteAliasesResponseBody1
  | ListPromoteAliasesResponseBody2;

/** @internal */
export const ListPromoteAliasesRequest$inboundSchema: z.ZodType<
  ListPromoteAliasesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectId: z.string(),
  limit: z.number().optional(),
  since: z.number().optional(),
  until: z.number().optional(),
  failedOnly: z.boolean().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type ListPromoteAliasesRequest$Outbound = {
  projectId: string;
  limit?: number | undefined;
  since?: number | undefined;
  until?: number | undefined;
  failedOnly?: boolean | undefined;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const ListPromoteAliasesRequest$outboundSchema: z.ZodType<
  ListPromoteAliasesRequest$Outbound,
  z.ZodTypeDef,
  ListPromoteAliasesRequest
> = z.object({
  projectId: z.string(),
  limit: z.number().optional(),
  since: z.number().optional(),
  until: z.number().optional(),
  failedOnly: z.boolean().optional(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPromoteAliasesRequest$ {
  /** @deprecated use `ListPromoteAliasesRequest$inboundSchema` instead. */
  export const inboundSchema = ListPromoteAliasesRequest$inboundSchema;
  /** @deprecated use `ListPromoteAliasesRequest$outboundSchema` instead. */
  export const outboundSchema = ListPromoteAliasesRequest$outboundSchema;
  /** @deprecated use `ListPromoteAliasesRequest$Outbound` instead. */
  export type Outbound = ListPromoteAliasesRequest$Outbound;
}

export function listPromoteAliasesRequestToJSON(
  listPromoteAliasesRequest: ListPromoteAliasesRequest,
): string {
  return JSON.stringify(
    ListPromoteAliasesRequest$outboundSchema.parse(listPromoteAliasesRequest),
  );
}

export function listPromoteAliasesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPromoteAliasesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPromoteAliasesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPromoteAliasesRequest' from JSON`,
  );
}

/** @internal */
export const ResponseBodyAliases$inboundSchema: z.ZodType<
  ResponseBodyAliases,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.string(),
  alias: z.string(),
  id: z.string(),
});

/** @internal */
export type ResponseBodyAliases$Outbound = {
  status: string;
  alias: string;
  id: string;
};

/** @internal */
export const ResponseBodyAliases$outboundSchema: z.ZodType<
  ResponseBodyAliases$Outbound,
  z.ZodTypeDef,
  ResponseBodyAliases
> = z.object({
  status: z.string(),
  alias: z.string(),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyAliases$ {
  /** @deprecated use `ResponseBodyAliases$inboundSchema` instead. */
  export const inboundSchema = ResponseBodyAliases$inboundSchema;
  /** @deprecated use `ResponseBodyAliases$outboundSchema` instead. */
  export const outboundSchema = ResponseBodyAliases$outboundSchema;
  /** @deprecated use `ResponseBodyAliases$Outbound` instead. */
  export type Outbound = ResponseBodyAliases$Outbound;
}

export function responseBodyAliasesToJSON(
  responseBodyAliases: ResponseBodyAliases,
): string {
  return JSON.stringify(
    ResponseBodyAliases$outboundSchema.parse(responseBodyAliases),
  );
}

export function responseBodyAliasesFromJSON(
  jsonString: string,
): SafeParseResult<ResponseBodyAliases, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ResponseBodyAliases$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ResponseBodyAliases' from JSON`,
  );
}

/** @internal */
export const ListPromoteAliasesResponseBody2$inboundSchema: z.ZodType<
  ListPromoteAliasesResponseBody2,
  z.ZodTypeDef,
  unknown
> = z.object({
  aliases: z.array(z.lazy(() => ResponseBodyAliases$inboundSchema)),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListPromoteAliasesResponseBody2$Outbound = {
  aliases: Array<ResponseBodyAliases$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListPromoteAliasesResponseBody2$outboundSchema: z.ZodType<
  ListPromoteAliasesResponseBody2$Outbound,
  z.ZodTypeDef,
  ListPromoteAliasesResponseBody2
> = z.object({
  aliases: z.array(z.lazy(() => ResponseBodyAliases$outboundSchema)),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPromoteAliasesResponseBody2$ {
  /** @deprecated use `ListPromoteAliasesResponseBody2$inboundSchema` instead. */
  export const inboundSchema = ListPromoteAliasesResponseBody2$inboundSchema;
  /** @deprecated use `ListPromoteAliasesResponseBody2$outboundSchema` instead. */
  export const outboundSchema = ListPromoteAliasesResponseBody2$outboundSchema;
  /** @deprecated use `ListPromoteAliasesResponseBody2$Outbound` instead. */
  export type Outbound = ListPromoteAliasesResponseBody2$Outbound;
}

export function listPromoteAliasesResponseBody2ToJSON(
  listPromoteAliasesResponseBody2: ListPromoteAliasesResponseBody2,
): string {
  return JSON.stringify(
    ListPromoteAliasesResponseBody2$outboundSchema.parse(
      listPromoteAliasesResponseBody2,
    ),
  );
}

export function listPromoteAliasesResponseBody2FromJSON(
  jsonString: string,
): SafeParseResult<ListPromoteAliasesResponseBody2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPromoteAliasesResponseBody2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPromoteAliasesResponseBody2' from JSON`,
  );
}

/** @internal */
export const ListPromoteAliasesResponseBody1$inboundSchema: z.ZodType<
  ListPromoteAliasesResponseBody1,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ListPromoteAliasesResponseBody1$Outbound = {};

/** @internal */
export const ListPromoteAliasesResponseBody1$outboundSchema: z.ZodType<
  ListPromoteAliasesResponseBody1$Outbound,
  z.ZodTypeDef,
  ListPromoteAliasesResponseBody1
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPromoteAliasesResponseBody1$ {
  /** @deprecated use `ListPromoteAliasesResponseBody1$inboundSchema` instead. */
  export const inboundSchema = ListPromoteAliasesResponseBody1$inboundSchema;
  /** @deprecated use `ListPromoteAliasesResponseBody1$outboundSchema` instead. */
  export const outboundSchema = ListPromoteAliasesResponseBody1$outboundSchema;
  /** @deprecated use `ListPromoteAliasesResponseBody1$Outbound` instead. */
  export type Outbound = ListPromoteAliasesResponseBody1$Outbound;
}

export function listPromoteAliasesResponseBody1ToJSON(
  listPromoteAliasesResponseBody1: ListPromoteAliasesResponseBody1,
): string {
  return JSON.stringify(
    ListPromoteAliasesResponseBody1$outboundSchema.parse(
      listPromoteAliasesResponseBody1,
    ),
  );
}

export function listPromoteAliasesResponseBody1FromJSON(
  jsonString: string,
): SafeParseResult<ListPromoteAliasesResponseBody1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPromoteAliasesResponseBody1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPromoteAliasesResponseBody1' from JSON`,
  );
}

/** @internal */
export const ListPromoteAliasesResponseBody$inboundSchema: z.ZodType<
  ListPromoteAliasesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ListPromoteAliasesResponseBody1$inboundSchema),
  z.lazy(() => ListPromoteAliasesResponseBody2$inboundSchema),
]);

/** @internal */
export type ListPromoteAliasesResponseBody$Outbound =
  | ListPromoteAliasesResponseBody1$Outbound
  | ListPromoteAliasesResponseBody2$Outbound;

/** @internal */
export const ListPromoteAliasesResponseBody$outboundSchema: z.ZodType<
  ListPromoteAliasesResponseBody$Outbound,
  z.ZodTypeDef,
  ListPromoteAliasesResponseBody
> = z.union([
  z.lazy(() => ListPromoteAliasesResponseBody1$outboundSchema),
  z.lazy(() => ListPromoteAliasesResponseBody2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPromoteAliasesResponseBody$ {
  /** @deprecated use `ListPromoteAliasesResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListPromoteAliasesResponseBody$inboundSchema;
  /** @deprecated use `ListPromoteAliasesResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListPromoteAliasesResponseBody$outboundSchema;
  /** @deprecated use `ListPromoteAliasesResponseBody$Outbound` instead. */
  export type Outbound = ListPromoteAliasesResponseBody$Outbound;
}

export function listPromoteAliasesResponseBodyToJSON(
  listPromoteAliasesResponseBody: ListPromoteAliasesResponseBody,
): string {
  return JSON.stringify(
    ListPromoteAliasesResponseBody$outboundSchema.parse(
      listPromoteAliasesResponseBody,
    ),
  );
}

export function listPromoteAliasesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListPromoteAliasesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPromoteAliasesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPromoteAliasesResponseBody' from JSON`,
  );
}
