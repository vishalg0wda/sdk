/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  GetProjectsRequest,
  GetProjectsRequest$outboundSchema,
  GetProjectsResponseBody,
  GetProjectsResponseBody$inboundSchema,
} from "../models/getprojectsop.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/httpclienterrors.js";
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
import { Result } from "../types/fp.js";

/**
 * Retrieve a list of projects
 *
 * @remarks
 * Allows to retrieve the list of projects of the authenticated user or team. The list will be paginated and the provided query parameters allow filtering the returned projects.
 */
export async function projectsGetProjects(
  client: VercelCore,
  request: GetProjectsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    GetProjectsResponseBody,
    | VercelBadRequestError
    | VercelForbiddenError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => GetProjectsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/v9/projects")();

  const query = encodeFormQuery({
    "deprecated": payload.deprecated,
    "edgeConfigId": payload.edgeConfigId,
    "edgeConfigTokenId": payload.edgeConfigTokenId,
    "excludeRepos": payload.excludeRepos,
    "from": payload.from,
    "gitForkProtection": payload.gitForkProtection,
    "limit": payload.limit,
    "repo": payload.repo,
    "repoId": payload.repoId,
    "repoUrl": payload.repoUrl,
    "search": payload.search,
    "slug": payload.slug,
    "teamId": payload.teamId,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearerToken);
  const securityInput = secConfig == null ? {} : { bearerToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "getProjects",
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
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    GetProjectsResponseBody,
    | VercelBadRequestError
    | VercelForbiddenError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, GetProjectsResponseBody$inboundSchema),
    M.jsonErr(400, VercelBadRequestError$inboundSchema),
    M.jsonErr(401, VercelForbiddenError$inboundSchema),
    M.fail([403, "4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
