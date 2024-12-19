/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DeleteAccessGroupProjectRequest = {
  accessGroupIdOrName: string;
  projectId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/** @internal */
export const DeleteAccessGroupProjectRequest$inboundSchema: z.ZodType<
  DeleteAccessGroupProjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessGroupIdOrName: z.string(),
  projectId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type DeleteAccessGroupProjectRequest$Outbound = {
  accessGroupIdOrName: string;
  projectId: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const DeleteAccessGroupProjectRequest$outboundSchema: z.ZodType<
  DeleteAccessGroupProjectRequest$Outbound,
  z.ZodTypeDef,
  DeleteAccessGroupProjectRequest
> = z.object({
  accessGroupIdOrName: z.string(),
  projectId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAccessGroupProjectRequest$ {
  /** @deprecated use `DeleteAccessGroupProjectRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteAccessGroupProjectRequest$inboundSchema;
  /** @deprecated use `DeleteAccessGroupProjectRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteAccessGroupProjectRequest$outboundSchema;
  /** @deprecated use `DeleteAccessGroupProjectRequest$Outbound` instead. */
  export type Outbound = DeleteAccessGroupProjectRequest$Outbound;
}

export function deleteAccessGroupProjectRequestToJSON(
  deleteAccessGroupProjectRequest: DeleteAccessGroupProjectRequest,
): string {
  return JSON.stringify(
    DeleteAccessGroupProjectRequest$outboundSchema.parse(
      deleteAccessGroupProjectRequest,
    ),
  );
}

export function deleteAccessGroupProjectRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteAccessGroupProjectRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteAccessGroupProjectRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteAccessGroupProjectRequest' from JSON`,
  );
}
