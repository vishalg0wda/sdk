/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type Two5 = {};

export type Items2 = Two5 | string | number | boolean | any;

export type One5 = {};

export type Items1 = One5 | string | number | boolean | any;

export type Items =
  | One5
  | string
  | number
  | boolean
  | any
  | Array<Two5 | string | number | boolean | any>;

export type CreateEdgeConfigRequestBody = {
  slug: string;
  items?: {
    [k: string]:
      | One5
      | string
      | number
      | boolean
      | any
      | Array<Two5 | string | number | boolean | any>;
  } | undefined;
};

export type CreateEdgeConfigRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody: CreateEdgeConfigRequestBody;
};

/**
 * Keeps track of the current state of the Edge Config while it gets transferred.
 */
export type CreateEdgeConfigTransfer = {
  fromAccountId: string;
  startedAt: number;
  doneAt: number | null;
};

export type CreateEdgeConfigSchema = {};

export const CreateEdgeConfigType = {
  Flags: "flags",
} as const;
export type CreateEdgeConfigType = ClosedEnum<typeof CreateEdgeConfigType>;

export type CreateEdgeConfigPurpose = {
  type: CreateEdgeConfigType;
  projectId: string;
};

/**
 * An Edge Config
 */
export type CreateEdgeConfigResponseBody = {
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
  transfer?: CreateEdgeConfigTransfer | undefined;
  schema?: CreateEdgeConfigSchema | undefined;
  purpose?: CreateEdgeConfigPurpose | undefined;
  sizeInBytes: number;
  itemCount: number;
};

/** @internal */
export const Two5$inboundSchema: z.ZodType<Two5, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Two5$Outbound = {};

/** @internal */
export const Two5$outboundSchema: z.ZodType<Two5$Outbound, z.ZodTypeDef, Two5> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two5$ {
  /** @deprecated use `Two5$inboundSchema` instead. */
  export const inboundSchema = Two5$inboundSchema;
  /** @deprecated use `Two5$outboundSchema` instead. */
  export const outboundSchema = Two5$outboundSchema;
  /** @deprecated use `Two5$Outbound` instead. */
  export type Outbound = Two5$Outbound;
}

export function two5ToJSON(two5: Two5): string {
  return JSON.stringify(Two5$outboundSchema.parse(two5));
}

export function two5FromJSON(
  jsonString: string,
): SafeParseResult<Two5, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Two5$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Two5' from JSON`,
  );
}

/** @internal */
export const Items2$inboundSchema: z.ZodType<Items2, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => Two5$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.any(),
  ]);

/** @internal */
export type Items2$Outbound = Two5$Outbound | string | number | boolean | any;

/** @internal */
export const Items2$outboundSchema: z.ZodType<
  Items2$Outbound,
  z.ZodTypeDef,
  Items2
> = z.union([
  z.lazy(() => Two5$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.any(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Items2$ {
  /** @deprecated use `Items2$inboundSchema` instead. */
  export const inboundSchema = Items2$inboundSchema;
  /** @deprecated use `Items2$outboundSchema` instead. */
  export const outboundSchema = Items2$outboundSchema;
  /** @deprecated use `Items2$Outbound` instead. */
  export type Outbound = Items2$Outbound;
}

export function items2ToJSON(items2: Items2): string {
  return JSON.stringify(Items2$outboundSchema.parse(items2));
}

export function items2FromJSON(
  jsonString: string,
): SafeParseResult<Items2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Items2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Items2' from JSON`,
  );
}

/** @internal */
export const One5$inboundSchema: z.ZodType<One5, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type One5$Outbound = {};

/** @internal */
export const One5$outboundSchema: z.ZodType<One5$Outbound, z.ZodTypeDef, One5> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One5$ {
  /** @deprecated use `One5$inboundSchema` instead. */
  export const inboundSchema = One5$inboundSchema;
  /** @deprecated use `One5$outboundSchema` instead. */
  export const outboundSchema = One5$outboundSchema;
  /** @deprecated use `One5$Outbound` instead. */
  export type Outbound = One5$Outbound;
}

export function one5ToJSON(one5: One5): string {
  return JSON.stringify(One5$outboundSchema.parse(one5));
}

export function one5FromJSON(
  jsonString: string,
): SafeParseResult<One5, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => One5$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'One5' from JSON`,
  );
}

/** @internal */
export const Items1$inboundSchema: z.ZodType<Items1, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => One5$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.any(),
  ]);

/** @internal */
export type Items1$Outbound = One5$Outbound | string | number | boolean | any;

/** @internal */
export const Items1$outboundSchema: z.ZodType<
  Items1$Outbound,
  z.ZodTypeDef,
  Items1
> = z.union([
  z.lazy(() => One5$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.any(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Items1$ {
  /** @deprecated use `Items1$inboundSchema` instead. */
  export const inboundSchema = Items1$inboundSchema;
  /** @deprecated use `Items1$outboundSchema` instead. */
  export const outboundSchema = Items1$outboundSchema;
  /** @deprecated use `Items1$Outbound` instead. */
  export type Outbound = Items1$Outbound;
}

export function items1ToJSON(items1: Items1): string {
  return JSON.stringify(Items1$outboundSchema.parse(items1));
}

export function items1FromJSON(
  jsonString: string,
): SafeParseResult<Items1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Items1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Items1' from JSON`,
  );
}

/** @internal */
export const Items$inboundSchema: z.ZodType<Items, z.ZodTypeDef, unknown> = z
  .union([
    z.union([
      z.lazy(() => One5$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.any(),
    ]),
    z.array(
      z.union([
        z.lazy(() => Two5$inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.any(),
      ]),
    ),
  ]);

/** @internal */
export type Items$Outbound =
  | One5$Outbound
  | string
  | number
  | boolean
  | any
  | Array<Two5$Outbound | string | number | boolean | any>;

/** @internal */
export const Items$outboundSchema: z.ZodType<
  Items$Outbound,
  z.ZodTypeDef,
  Items
> = z.union([
  z.union([
    z.lazy(() => One5$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.any(),
  ]),
  z.array(
    z.union([
      z.lazy(() => Two5$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.any(),
    ]),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Items$ {
  /** @deprecated use `Items$inboundSchema` instead. */
  export const inboundSchema = Items$inboundSchema;
  /** @deprecated use `Items$outboundSchema` instead. */
  export const outboundSchema = Items$outboundSchema;
  /** @deprecated use `Items$Outbound` instead. */
  export type Outbound = Items$Outbound;
}

export function itemsToJSON(items: Items): string {
  return JSON.stringify(Items$outboundSchema.parse(items));
}

export function itemsFromJSON(
  jsonString: string,
): SafeParseResult<Items, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Items$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Items' from JSON`,
  );
}

/** @internal */
export const CreateEdgeConfigRequestBody$inboundSchema: z.ZodType<
  CreateEdgeConfigRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string(),
  items: z.record(
    z.union([
      z.union([
        z.lazy(() => One5$inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.any(),
      ]),
      z.array(
        z.union([
          z.lazy(() => Two5$inboundSchema),
          z.string(),
          z.number(),
          z.boolean(),
          z.any(),
        ]),
      ),
    ]),
  ).optional(),
});

/** @internal */
export type CreateEdgeConfigRequestBody$Outbound = {
  slug: string;
  items?: {
    [k: string]:
      | One5$Outbound
      | string
      | number
      | boolean
      | any
      | Array<Two5$Outbound | string | number | boolean | any>;
  } | undefined;
};

/** @internal */
export const CreateEdgeConfigRequestBody$outboundSchema: z.ZodType<
  CreateEdgeConfigRequestBody$Outbound,
  z.ZodTypeDef,
  CreateEdgeConfigRequestBody
> = z.object({
  slug: z.string(),
  items: z.record(
    z.union([
      z.union([
        z.lazy(() => One5$outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.any(),
      ]),
      z.array(
        z.union([
          z.lazy(() => Two5$outboundSchema),
          z.string(),
          z.number(),
          z.boolean(),
          z.any(),
        ]),
      ),
    ]),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEdgeConfigRequestBody$ {
  /** @deprecated use `CreateEdgeConfigRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateEdgeConfigRequestBody$inboundSchema;
  /** @deprecated use `CreateEdgeConfigRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateEdgeConfigRequestBody$outboundSchema;
  /** @deprecated use `CreateEdgeConfigRequestBody$Outbound` instead. */
  export type Outbound = CreateEdgeConfigRequestBody$Outbound;
}

export function createEdgeConfigRequestBodyToJSON(
  createEdgeConfigRequestBody: CreateEdgeConfigRequestBody,
): string {
  return JSON.stringify(
    CreateEdgeConfigRequestBody$outboundSchema.parse(
      createEdgeConfigRequestBody,
    ),
  );
}

export function createEdgeConfigRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateEdgeConfigRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEdgeConfigRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEdgeConfigRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateEdgeConfigRequest$inboundSchema: z.ZodType<
  CreateEdgeConfigRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => CreateEdgeConfigRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateEdgeConfigRequest$Outbound = {
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody: CreateEdgeConfigRequestBody$Outbound;
};

/** @internal */
export const CreateEdgeConfigRequest$outboundSchema: z.ZodType<
  CreateEdgeConfigRequest$Outbound,
  z.ZodTypeDef,
  CreateEdgeConfigRequest
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => CreateEdgeConfigRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEdgeConfigRequest$ {
  /** @deprecated use `CreateEdgeConfigRequest$inboundSchema` instead. */
  export const inboundSchema = CreateEdgeConfigRequest$inboundSchema;
  /** @deprecated use `CreateEdgeConfigRequest$outboundSchema` instead. */
  export const outboundSchema = CreateEdgeConfigRequest$outboundSchema;
  /** @deprecated use `CreateEdgeConfigRequest$Outbound` instead. */
  export type Outbound = CreateEdgeConfigRequest$Outbound;
}

export function createEdgeConfigRequestToJSON(
  createEdgeConfigRequest: CreateEdgeConfigRequest,
): string {
  return JSON.stringify(
    CreateEdgeConfigRequest$outboundSchema.parse(createEdgeConfigRequest),
  );
}

export function createEdgeConfigRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateEdgeConfigRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEdgeConfigRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEdgeConfigRequest' from JSON`,
  );
}

/** @internal */
export const CreateEdgeConfigTransfer$inboundSchema: z.ZodType<
  CreateEdgeConfigTransfer,
  z.ZodTypeDef,
  unknown
> = z.object({
  fromAccountId: z.string(),
  startedAt: z.number(),
  doneAt: z.nullable(z.number()),
});

/** @internal */
export type CreateEdgeConfigTransfer$Outbound = {
  fromAccountId: string;
  startedAt: number;
  doneAt: number | null;
};

/** @internal */
export const CreateEdgeConfigTransfer$outboundSchema: z.ZodType<
  CreateEdgeConfigTransfer$Outbound,
  z.ZodTypeDef,
  CreateEdgeConfigTransfer
> = z.object({
  fromAccountId: z.string(),
  startedAt: z.number(),
  doneAt: z.nullable(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEdgeConfigTransfer$ {
  /** @deprecated use `CreateEdgeConfigTransfer$inboundSchema` instead. */
  export const inboundSchema = CreateEdgeConfigTransfer$inboundSchema;
  /** @deprecated use `CreateEdgeConfigTransfer$outboundSchema` instead. */
  export const outboundSchema = CreateEdgeConfigTransfer$outboundSchema;
  /** @deprecated use `CreateEdgeConfigTransfer$Outbound` instead. */
  export type Outbound = CreateEdgeConfigTransfer$Outbound;
}

export function createEdgeConfigTransferToJSON(
  createEdgeConfigTransfer: CreateEdgeConfigTransfer,
): string {
  return JSON.stringify(
    CreateEdgeConfigTransfer$outboundSchema.parse(createEdgeConfigTransfer),
  );
}

export function createEdgeConfigTransferFromJSON(
  jsonString: string,
): SafeParseResult<CreateEdgeConfigTransfer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEdgeConfigTransfer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEdgeConfigTransfer' from JSON`,
  );
}

/** @internal */
export const CreateEdgeConfigSchema$inboundSchema: z.ZodType<
  CreateEdgeConfigSchema,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateEdgeConfigSchema$Outbound = {};

/** @internal */
export const CreateEdgeConfigSchema$outboundSchema: z.ZodType<
  CreateEdgeConfigSchema$Outbound,
  z.ZodTypeDef,
  CreateEdgeConfigSchema
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEdgeConfigSchema$ {
  /** @deprecated use `CreateEdgeConfigSchema$inboundSchema` instead. */
  export const inboundSchema = CreateEdgeConfigSchema$inboundSchema;
  /** @deprecated use `CreateEdgeConfigSchema$outboundSchema` instead. */
  export const outboundSchema = CreateEdgeConfigSchema$outboundSchema;
  /** @deprecated use `CreateEdgeConfigSchema$Outbound` instead. */
  export type Outbound = CreateEdgeConfigSchema$Outbound;
}

export function createEdgeConfigSchemaToJSON(
  createEdgeConfigSchema: CreateEdgeConfigSchema,
): string {
  return JSON.stringify(
    CreateEdgeConfigSchema$outboundSchema.parse(createEdgeConfigSchema),
  );
}

export function createEdgeConfigSchemaFromJSON(
  jsonString: string,
): SafeParseResult<CreateEdgeConfigSchema, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEdgeConfigSchema$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEdgeConfigSchema' from JSON`,
  );
}

/** @internal */
export const CreateEdgeConfigType$inboundSchema: z.ZodNativeEnum<
  typeof CreateEdgeConfigType
> = z.nativeEnum(CreateEdgeConfigType);

/** @internal */
export const CreateEdgeConfigType$outboundSchema: z.ZodNativeEnum<
  typeof CreateEdgeConfigType
> = CreateEdgeConfigType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEdgeConfigType$ {
  /** @deprecated use `CreateEdgeConfigType$inboundSchema` instead. */
  export const inboundSchema = CreateEdgeConfigType$inboundSchema;
  /** @deprecated use `CreateEdgeConfigType$outboundSchema` instead. */
  export const outboundSchema = CreateEdgeConfigType$outboundSchema;
}

/** @internal */
export const CreateEdgeConfigPurpose$inboundSchema: z.ZodType<
  CreateEdgeConfigPurpose,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: CreateEdgeConfigType$inboundSchema,
  projectId: z.string(),
});

/** @internal */
export type CreateEdgeConfigPurpose$Outbound = {
  type: string;
  projectId: string;
};

/** @internal */
export const CreateEdgeConfigPurpose$outboundSchema: z.ZodType<
  CreateEdgeConfigPurpose$Outbound,
  z.ZodTypeDef,
  CreateEdgeConfigPurpose
> = z.object({
  type: CreateEdgeConfigType$outboundSchema,
  projectId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEdgeConfigPurpose$ {
  /** @deprecated use `CreateEdgeConfigPurpose$inboundSchema` instead. */
  export const inboundSchema = CreateEdgeConfigPurpose$inboundSchema;
  /** @deprecated use `CreateEdgeConfigPurpose$outboundSchema` instead. */
  export const outboundSchema = CreateEdgeConfigPurpose$outboundSchema;
  /** @deprecated use `CreateEdgeConfigPurpose$Outbound` instead. */
  export type Outbound = CreateEdgeConfigPurpose$Outbound;
}

export function createEdgeConfigPurposeToJSON(
  createEdgeConfigPurpose: CreateEdgeConfigPurpose,
): string {
  return JSON.stringify(
    CreateEdgeConfigPurpose$outboundSchema.parse(createEdgeConfigPurpose),
  );
}

export function createEdgeConfigPurposeFromJSON(
  jsonString: string,
): SafeParseResult<CreateEdgeConfigPurpose, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEdgeConfigPurpose$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEdgeConfigPurpose' from JSON`,
  );
}

/** @internal */
export const CreateEdgeConfigResponseBody$inboundSchema: z.ZodType<
  CreateEdgeConfigResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),
  id: z.string().optional(),
  slug: z.string().optional(),
  ownerId: z.string().optional(),
  digest: z.string().optional(),
  transfer: z.lazy(() => CreateEdgeConfigTransfer$inboundSchema).optional(),
  schema: z.lazy(() => CreateEdgeConfigSchema$inboundSchema).optional(),
  purpose: z.lazy(() => CreateEdgeConfigPurpose$inboundSchema).optional(),
  sizeInBytes: z.number(),
  itemCount: z.number(),
});

/** @internal */
export type CreateEdgeConfigResponseBody$Outbound = {
  createdAt?: number | undefined;
  updatedAt?: number | undefined;
  id?: string | undefined;
  slug?: string | undefined;
  ownerId?: string | undefined;
  digest?: string | undefined;
  transfer?: CreateEdgeConfigTransfer$Outbound | undefined;
  schema?: CreateEdgeConfigSchema$Outbound | undefined;
  purpose?: CreateEdgeConfigPurpose$Outbound | undefined;
  sizeInBytes: number;
  itemCount: number;
};

/** @internal */
export const CreateEdgeConfigResponseBody$outboundSchema: z.ZodType<
  CreateEdgeConfigResponseBody$Outbound,
  z.ZodTypeDef,
  CreateEdgeConfigResponseBody
> = z.object({
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),
  id: z.string().optional(),
  slug: z.string().optional(),
  ownerId: z.string().optional(),
  digest: z.string().optional(),
  transfer: z.lazy(() => CreateEdgeConfigTransfer$outboundSchema).optional(),
  schema: z.lazy(() => CreateEdgeConfigSchema$outboundSchema).optional(),
  purpose: z.lazy(() => CreateEdgeConfigPurpose$outboundSchema).optional(),
  sizeInBytes: z.number(),
  itemCount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEdgeConfigResponseBody$ {
  /** @deprecated use `CreateEdgeConfigResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateEdgeConfigResponseBody$inboundSchema;
  /** @deprecated use `CreateEdgeConfigResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateEdgeConfigResponseBody$outboundSchema;
  /** @deprecated use `CreateEdgeConfigResponseBody$Outbound` instead. */
  export type Outbound = CreateEdgeConfigResponseBody$Outbound;
}

export function createEdgeConfigResponseBodyToJSON(
  createEdgeConfigResponseBody: CreateEdgeConfigResponseBody,
): string {
  return JSON.stringify(
    CreateEdgeConfigResponseBody$outboundSchema.parse(
      createEdgeConfigResponseBody,
    ),
  );
}

export function createEdgeConfigResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateEdgeConfigResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEdgeConfigResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEdgeConfigResponseBody' from JSON`,
  );
}
