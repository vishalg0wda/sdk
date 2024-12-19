/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type VercelForbiddenErrorError = {
  code?: "forbidden" | undefined;
  message: string;
};

export type VercelForbiddenErrorData = {
  error: VercelForbiddenErrorError;
};

export class VercelForbiddenError extends Error {
  error: VercelForbiddenErrorError;

  /** The original data that was passed to this error instance. */
  data$: VercelForbiddenErrorData;

  constructor(err: VercelForbiddenErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "VercelForbiddenError";
  }
}

/** @internal */
export const VercelForbiddenErrorError$inboundSchema: z.ZodType<
  VercelForbiddenErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.literal("forbidden").optional(),
  message: z.string(),
});

/** @internal */
export type VercelForbiddenErrorError$Outbound = {
  code: "forbidden";
  message: string;
};

/** @internal */
export const VercelForbiddenErrorError$outboundSchema: z.ZodType<
  VercelForbiddenErrorError$Outbound,
  z.ZodTypeDef,
  VercelForbiddenErrorError
> = z.object({
  code: z.literal("forbidden").default("forbidden" as const),
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VercelForbiddenErrorError$ {
  /** @deprecated use `VercelForbiddenErrorError$inboundSchema` instead. */
  export const inboundSchema = VercelForbiddenErrorError$inboundSchema;
  /** @deprecated use `VercelForbiddenErrorError$outboundSchema` instead. */
  export const outboundSchema = VercelForbiddenErrorError$outboundSchema;
  /** @deprecated use `VercelForbiddenErrorError$Outbound` instead. */
  export type Outbound = VercelForbiddenErrorError$Outbound;
}

export function vercelForbiddenErrorErrorToJSON(
  vercelForbiddenErrorError: VercelForbiddenErrorError,
): string {
  return JSON.stringify(
    VercelForbiddenErrorError$outboundSchema.parse(vercelForbiddenErrorError),
  );
}

export function vercelForbiddenErrorErrorFromJSON(
  jsonString: string,
): SafeParseResult<VercelForbiddenErrorError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VercelForbiddenErrorError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VercelForbiddenErrorError' from JSON`,
  );
}

/** @internal */
export const VercelForbiddenError$inboundSchema: z.ZodType<
  VercelForbiddenError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => VercelForbiddenErrorError$inboundSchema),
})
  .transform((v) => {
    return new VercelForbiddenError(v);
  });

/** @internal */
export type VercelForbiddenError$Outbound = {
  error: VercelForbiddenErrorError$Outbound;
};

/** @internal */
export const VercelForbiddenError$outboundSchema: z.ZodType<
  VercelForbiddenError$Outbound,
  z.ZodTypeDef,
  VercelForbiddenError
> = z.instanceof(VercelForbiddenError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.lazy(() => VercelForbiddenErrorError$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VercelForbiddenError$ {
  /** @deprecated use `VercelForbiddenError$inboundSchema` instead. */
  export const inboundSchema = VercelForbiddenError$inboundSchema;
  /** @deprecated use `VercelForbiddenError$outboundSchema` instead. */
  export const outboundSchema = VercelForbiddenError$outboundSchema;
  /** @deprecated use `VercelForbiddenError$Outbound` instead. */
  export type Outbound = VercelForbiddenError$Outbound;
}
