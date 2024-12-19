/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type UpdateEdgeConfigRequestBody = {
  slug: string;
};

export type UpdateEdgeConfigRequest = {
  edgeConfigId: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody: UpdateEdgeConfigRequestBody;
};

/**
 * Keeps track of the current state of the Edge Config while it gets transferred.
 */
export type UpdateEdgeConfigTransfer = {
  fromAccountId: string;
  startedAt: number;
  doneAt: number | null;
};

export type UpdateEdgeConfigSchema = {};

export const UpdateEdgeConfigType = {
  Flags: "flags",
} as const;
export type UpdateEdgeConfigType = ClosedEnum<typeof UpdateEdgeConfigType>;

export type UpdateEdgeConfigPurpose = {
  type: UpdateEdgeConfigType;
  projectId: string;
};

/**
 * An Edge Config
 */
export type UpdateEdgeConfigResponseBody = {
  createdAt?: number | undefined;
  updatedAt?: number | undefined;
  id?: string | undefined;
  /**
   * Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
   */
  slug?: string | undefined;
  ownerId?: string | undefined;
  digest?: string | undefined;
  /**
   * Keeps track of the current state of the Edge Config while it gets transferred.
   */
  transfer?: UpdateEdgeConfigTransfer | undefined;
  schema?: UpdateEdgeConfigSchema | undefined;
  purpose?: UpdateEdgeConfigPurpose | undefined;
  sizeInBytes: number;
  itemCount: number;
};

/** @internal */
export const UpdateEdgeConfigRequestBody$inboundSchema: z.ZodType<
  UpdateEdgeConfigRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string(),
});

/** @internal */
export type UpdateEdgeConfigRequestBody$Outbound = {
  slug: string;
};

/** @internal */
export const UpdateEdgeConfigRequestBody$outboundSchema: z.ZodType<
  UpdateEdgeConfigRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateEdgeConfigRequestBody
> = z.object({
  slug: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEdgeConfigRequestBody$ {
  /** @deprecated use `UpdateEdgeConfigRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateEdgeConfigRequestBody$inboundSchema;
  /** @deprecated use `UpdateEdgeConfigRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateEdgeConfigRequestBody$outboundSchema;
  /** @deprecated use `UpdateEdgeConfigRequestBody$Outbound` instead. */
  export type Outbound = UpdateEdgeConfigRequestBody$Outbound;
}

export function updateEdgeConfigRequestBodyToJSON(
  updateEdgeConfigRequestBody: UpdateEdgeConfigRequestBody,
): string {
  return JSON.stringify(
    UpdateEdgeConfigRequestBody$outboundSchema.parse(
      updateEdgeConfigRequestBody,
    ),
  );
}

export function updateEdgeConfigRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEdgeConfigRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEdgeConfigRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEdgeConfigRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateEdgeConfigRequest$inboundSchema: z.ZodType<
  UpdateEdgeConfigRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  edgeConfigId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => UpdateEdgeConfigRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateEdgeConfigRequest$Outbound = {
  edgeConfigId: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody: UpdateEdgeConfigRequestBody$Outbound;
};

/** @internal */
export const UpdateEdgeConfigRequest$outboundSchema: z.ZodType<
  UpdateEdgeConfigRequest$Outbound,
  z.ZodTypeDef,
  UpdateEdgeConfigRequest
> = z.object({
  edgeConfigId: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => UpdateEdgeConfigRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEdgeConfigRequest$ {
  /** @deprecated use `UpdateEdgeConfigRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateEdgeConfigRequest$inboundSchema;
  /** @deprecated use `UpdateEdgeConfigRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateEdgeConfigRequest$outboundSchema;
  /** @deprecated use `UpdateEdgeConfigRequest$Outbound` instead. */
  export type Outbound = UpdateEdgeConfigRequest$Outbound;
}

export function updateEdgeConfigRequestToJSON(
  updateEdgeConfigRequest: UpdateEdgeConfigRequest,
): string {
  return JSON.stringify(
    UpdateEdgeConfigRequest$outboundSchema.parse(updateEdgeConfigRequest),
  );
}

export function updateEdgeConfigRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEdgeConfigRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEdgeConfigRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEdgeConfigRequest' from JSON`,
  );
}

/** @internal */
export const UpdateEdgeConfigTransfer$inboundSchema: z.ZodType<
  UpdateEdgeConfigTransfer,
  z.ZodTypeDef,
  unknown
> = z.object({
  fromAccountId: z.string(),
  startedAt: z.number(),
  doneAt: z.nullable(z.number()),
});

/** @internal */
export type UpdateEdgeConfigTransfer$Outbound = {
  fromAccountId: string;
  startedAt: number;
  doneAt: number | null;
};

/** @internal */
export const UpdateEdgeConfigTransfer$outboundSchema: z.ZodType<
  UpdateEdgeConfigTransfer$Outbound,
  z.ZodTypeDef,
  UpdateEdgeConfigTransfer
> = z.object({
  fromAccountId: z.string(),
  startedAt: z.number(),
  doneAt: z.nullable(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEdgeConfigTransfer$ {
  /** @deprecated use `UpdateEdgeConfigTransfer$inboundSchema` instead. */
  export const inboundSchema = UpdateEdgeConfigTransfer$inboundSchema;
  /** @deprecated use `UpdateEdgeConfigTransfer$outboundSchema` instead. */
  export const outboundSchema = UpdateEdgeConfigTransfer$outboundSchema;
  /** @deprecated use `UpdateEdgeConfigTransfer$Outbound` instead. */
  export type Outbound = UpdateEdgeConfigTransfer$Outbound;
}

export function updateEdgeConfigTransferToJSON(
  updateEdgeConfigTransfer: UpdateEdgeConfigTransfer,
): string {
  return JSON.stringify(
    UpdateEdgeConfigTransfer$outboundSchema.parse(updateEdgeConfigTransfer),
  );
}

export function updateEdgeConfigTransferFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEdgeConfigTransfer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEdgeConfigTransfer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEdgeConfigTransfer' from JSON`,
  );
}

/** @internal */
export const UpdateEdgeConfigSchema$inboundSchema: z.ZodType<
  UpdateEdgeConfigSchema,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UpdateEdgeConfigSchema$Outbound = {};

/** @internal */
export const UpdateEdgeConfigSchema$outboundSchema: z.ZodType<
  UpdateEdgeConfigSchema$Outbound,
  z.ZodTypeDef,
  UpdateEdgeConfigSchema
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEdgeConfigSchema$ {
  /** @deprecated use `UpdateEdgeConfigSchema$inboundSchema` instead. */
  export const inboundSchema = UpdateEdgeConfigSchema$inboundSchema;
  /** @deprecated use `UpdateEdgeConfigSchema$outboundSchema` instead. */
  export const outboundSchema = UpdateEdgeConfigSchema$outboundSchema;
  /** @deprecated use `UpdateEdgeConfigSchema$Outbound` instead. */
  export type Outbound = UpdateEdgeConfigSchema$Outbound;
}

export function updateEdgeConfigSchemaToJSON(
  updateEdgeConfigSchema: UpdateEdgeConfigSchema,
): string {
  return JSON.stringify(
    UpdateEdgeConfigSchema$outboundSchema.parse(updateEdgeConfigSchema),
  );
}

export function updateEdgeConfigSchemaFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEdgeConfigSchema, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEdgeConfigSchema$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEdgeConfigSchema' from JSON`,
  );
}

/** @internal */
export const UpdateEdgeConfigType$inboundSchema: z.ZodNativeEnum<
  typeof UpdateEdgeConfigType
> = z.nativeEnum(UpdateEdgeConfigType);

/** @internal */
export const UpdateEdgeConfigType$outboundSchema: z.ZodNativeEnum<
  typeof UpdateEdgeConfigType
> = UpdateEdgeConfigType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEdgeConfigType$ {
  /** @deprecated use `UpdateEdgeConfigType$inboundSchema` instead. */
  export const inboundSchema = UpdateEdgeConfigType$inboundSchema;
  /** @deprecated use `UpdateEdgeConfigType$outboundSchema` instead. */
  export const outboundSchema = UpdateEdgeConfigType$outboundSchema;
}

/** @internal */
export const UpdateEdgeConfigPurpose$inboundSchema: z.ZodType<
  UpdateEdgeConfigPurpose,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: UpdateEdgeConfigType$inboundSchema,
  projectId: z.string(),
});

/** @internal */
export type UpdateEdgeConfigPurpose$Outbound = {
  type: string;
  projectId: string;
};

/** @internal */
export const UpdateEdgeConfigPurpose$outboundSchema: z.ZodType<
  UpdateEdgeConfigPurpose$Outbound,
  z.ZodTypeDef,
  UpdateEdgeConfigPurpose
> = z.object({
  type: UpdateEdgeConfigType$outboundSchema,
  projectId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEdgeConfigPurpose$ {
  /** @deprecated use `UpdateEdgeConfigPurpose$inboundSchema` instead. */
  export const inboundSchema = UpdateEdgeConfigPurpose$inboundSchema;
  /** @deprecated use `UpdateEdgeConfigPurpose$outboundSchema` instead. */
  export const outboundSchema = UpdateEdgeConfigPurpose$outboundSchema;
  /** @deprecated use `UpdateEdgeConfigPurpose$Outbound` instead. */
  export type Outbound = UpdateEdgeConfigPurpose$Outbound;
}

export function updateEdgeConfigPurposeToJSON(
  updateEdgeConfigPurpose: UpdateEdgeConfigPurpose,
): string {
  return JSON.stringify(
    UpdateEdgeConfigPurpose$outboundSchema.parse(updateEdgeConfigPurpose),
  );
}

export function updateEdgeConfigPurposeFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEdgeConfigPurpose, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEdgeConfigPurpose$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEdgeConfigPurpose' from JSON`,
  );
}

/** @internal */
export const UpdateEdgeConfigResponseBody$inboundSchema: z.ZodType<
  UpdateEdgeConfigResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),
  id: z.string().optional(),
  slug: z.string().optional(),
  ownerId: z.string().optional(),
  digest: z.string().optional(),
  transfer: z.lazy(() => UpdateEdgeConfigTransfer$inboundSchema).optional(),
  schema: z.lazy(() => UpdateEdgeConfigSchema$inboundSchema).optional(),
  purpose: z.lazy(() => UpdateEdgeConfigPurpose$inboundSchema).optional(),
  sizeInBytes: z.number(),
  itemCount: z.number(),
});

/** @internal */
export type UpdateEdgeConfigResponseBody$Outbound = {
  createdAt?: number | undefined;
  updatedAt?: number | undefined;
  id?: string | undefined;
  slug?: string | undefined;
  ownerId?: string | undefined;
  digest?: string | undefined;
  transfer?: UpdateEdgeConfigTransfer$Outbound | undefined;
  schema?: UpdateEdgeConfigSchema$Outbound | undefined;
  purpose?: UpdateEdgeConfigPurpose$Outbound | undefined;
  sizeInBytes: number;
  itemCount: number;
};

/** @internal */
export const UpdateEdgeConfigResponseBody$outboundSchema: z.ZodType<
  UpdateEdgeConfigResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateEdgeConfigResponseBody
> = z.object({
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),
  id: z.string().optional(),
  slug: z.string().optional(),
  ownerId: z.string().optional(),
  digest: z.string().optional(),
  transfer: z.lazy(() => UpdateEdgeConfigTransfer$outboundSchema).optional(),
  schema: z.lazy(() => UpdateEdgeConfigSchema$outboundSchema).optional(),
  purpose: z.lazy(() => UpdateEdgeConfigPurpose$outboundSchema).optional(),
  sizeInBytes: z.number(),
  itemCount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEdgeConfigResponseBody$ {
  /** @deprecated use `UpdateEdgeConfigResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateEdgeConfigResponseBody$inboundSchema;
  /** @deprecated use `UpdateEdgeConfigResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateEdgeConfigResponseBody$outboundSchema;
  /** @deprecated use `UpdateEdgeConfigResponseBody$Outbound` instead. */
  export type Outbound = UpdateEdgeConfigResponseBody$Outbound;
}

export function updateEdgeConfigResponseBodyToJSON(
  updateEdgeConfigResponseBody: UpdateEdgeConfigResponseBody,
): string {
  return JSON.stringify(
    UpdateEdgeConfigResponseBody$outboundSchema.parse(
      updateEdgeConfigResponseBody,
    ),
  );
}

export function updateEdgeConfigResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEdgeConfigResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEdgeConfigResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEdgeConfigResponseBody' from JSON`,
  );
}
