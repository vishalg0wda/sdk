/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { userGetAuthUser } from "../funcs/userGetAuthUser.js";
import { userListUserEvents } from "../funcs/userListUserEvents.js";
import { userRequestDelete } from "../funcs/userRequestDelete.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetAuthUserResponseBody } from "../models/getauthuserop.js";
import {
  ListUserEventsRequest,
  ListUserEventsResponseBody,
} from "../models/listusereventsop.js";
import {
  RequestDeleteRequestBody,
  RequestDeleteResponseBody,
} from "../models/requestdeleteop.js";
import { unwrapAsync } from "../types/fp.js";

export class User extends ClientSDK {
  /**
   * List User Events
   *
   * @remarks
   * Retrieves a list of "events" generated by the User on Vercel. Events are generated when the User performs a particular action, such as logging in, creating a deployment, and joining a Team (just to name a few). When the `teamId` parameter is supplied, then the events that are returned will be in relation to the Team that was specified.
   */
  async listUserEvents(
    request: ListUserEventsRequest,
    options?: RequestOptions,
  ): Promise<ListUserEventsResponseBody> {
    return unwrapAsync(userListUserEvents(
      this,
      request,
      options,
    ));
  }

  /**
   * Get the User
   *
   * @remarks
   * Retrieves information related to the currently authenticated User.
   */
  async getAuthUser(
    options?: RequestOptions,
  ): Promise<GetAuthUserResponseBody | undefined> {
    return unwrapAsync(userGetAuthUser(
      this,
      options,
    ));
  }

  /**
   * Delete User Account
   *
   * @remarks
   * Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.
   */
  async requestDelete(
    request: RequestDeleteRequestBody,
    options?: RequestOptions,
  ): Promise<RequestDeleteResponseBody> {
    return unwrapAsync(userRequestDelete(
      this,
      request,
      options,
    ));
  }
}
