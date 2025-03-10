/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/httpclienterrors.js";
import {
  PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest,
  PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$outboundSchema,
  PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody,
  PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$inboundSchema,
} from "../models/putv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigop.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import {
  VercelBadRequestError,
  VercelBadRequestError$inboundSchema,
} from "../models/vercelbadrequesterror.js";
import {
  VercelForbiddenError,
  VercelForbiddenError$inboundSchema,
} from "../models/vercelforbiddenerror.js";
import {
  VercelNotFoundError,
  VercelNotFoundError$inboundSchema,
} from "../models/vercelnotfounderror.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Push data into a user-provided Edge Config
 *
 * @remarks
 * When the user enabled Edge Config syncing, then this endpoint can be used by the partner to push their configuration data into the relevant Edge Config.
 */
export function marketplacePutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfig(
  client: VercelCore,
  request:
    PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody,
    | VercelBadRequestError
    | VercelForbiddenError
    | VercelNotFoundError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: VercelCore,
  request:
    PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody,
      | VercelBadRequestError
      | VercelForbiddenError
      | VercelNotFoundError
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    integrationConfigurationId: encodeSimple(
      "integrationConfigurationId",
      payload.integrationConfigurationId,
      { explode: false, charEncoding: "percent" },
    ),
    resourceId: encodeSimple("resourceId", payload.resourceId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/edge-config",
  )(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.bearerToken);
  const securityInput = secConfig == null ? {} : { bearerToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID:
      "put_/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/edge-config",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.bearerToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PUT",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "404", "412", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody,
    | VercelBadRequestError
    | VercelForbiddenError
    | VercelNotFoundError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(
      200,
      PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$inboundSchema,
    ),
    M.jsonErr(400, VercelBadRequestError$inboundSchema),
    M.jsonErr(401, VercelForbiddenError$inboundSchema),
    M.jsonErr(404, VercelNotFoundError$inboundSchema),
    M.fail([403, 412, "4XX"]),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
