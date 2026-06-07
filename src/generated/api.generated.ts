/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Standardized error code for programmatic response handling and client-side error categorization */
export enum ErrorCode {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  NOT_FOUND = "NOT_FOUND",
  AUTH_REQUIRED = "AUTH_REQUIRED",
  VALIDATION_FAILED = "VALIDATION_FAILED",
  FORBIDDEN = "FORBIDDEN",
  CONFLICT = "CONFLICT",
  RATE_LIMITED = "RATE_LIMITED",
  UPSTREAMUNAVAILABLE = "UPSTREAM_UNAVAILABLE ",
  UNAUTHORIZED = "UNAUTHORIZED",
}

/** Standardized operation status code. Used for programmatic response handling */
export enum SuccessCode {
  SUCCESS = "SUCCESS",
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED",
}

export interface UserSafe {
  /**
   * Unique identifier generated as a UUID.
   * @type {string}
   */
  id: string;
  /**
   * Timestamp when the entity was created.
   * @type {Date}
   * @format date-time
   */
  createdAt: string;
  /**
   * Timestamp when the entity was last updated.
   * @type {Date}
   * @format date-time
   */
  updatedAt: string;
  /**
   * The user's language code.
   * @type {string}
   */
  language: string;
  /**
   * Referral code for invite.
   * @type {string}
   */
  referralCode: string;
  isSupport: boolean;
  role?: string;
  /**
   * The support role of the user.
   * @type {string}
   */
  roleSupport?: string;
}

export type UserExceptionNotFound = object;

export interface UserDtoInit {
  /**
   * A string with raw data transferred to the Mini App, convenient for validating data.
   * WARNING: Validate data from this field before using it on the bot's server.
   * @minLength 32
   * @example "query_id=AAHdF6IQAAAAAN0XohDhrOrc&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D&auth_date=1662771648&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2"
   */
  initData: string;
}

export interface AuthResponseUserInit {
  /**
   * Operation success flag. true - operation completed successfully, false - an error occurred
   * @example true
   */
  success: boolean;
  /**
   * Localized message describing the operation result. Suitable for displaying to users
   * @example "Operation completed successfully"
   */
  message: string;
  /**
   * Standardized operation status code. Used for programmatic response handling
   * @example "SUCCESS"
   */
  code: SuccessCode;
  /**
   * HTTP status code (200, 201, 400, 401, 403, 404, 500, etc.)
   * @example 200
   */
  statusCode: number;
  /**
   * ISO 8601 timestamp indicating when the response was generated
   * @format date-time
   * @example "2026-05-19T01:32:55.443Z"
   */
  timestamp: string;
  /**
   * Temporary authentication token
   * @example "3fa85f64-5717-4562-b3fc-2c963f66afa6"
   */
  sessionId: string;
}

export interface BadResponse {
  /**
   * Operation success flag. Always false for error responses
   * @example false
   */
  success: boolean;
  /**
   * Localized error message describing what went wrong. Suitable for displaying to users
   * @example "Unable to process your request. Please try again later."
   */
  message: string;
  /**
   * Standardized error code for programmatic response handling and client-side error categorization
   * @example "INTERNAL_ERROR"
   */
  code: ErrorCode;
  /**
   * HTTP status code indicating the type of error (400, 401, 403, 404, 409, 422, 500, etc.)
   * @min 400
   * @max 599
   * @example 500
   */
  statusCode: number;
  /**
   * ISO 8601 timestamp indicating when the error response was generated
   * @format date-time
   * @example "2026-05-19T01:32:55.443Z"
   */
  timestamp: string;
  /**
   * Unique trace ID for request tracking and debugging purposes. Can be used to correlate logs
   * @example "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
   */
  traceId: string;
  /**
   * API endpoint path that was called when the error occurred
   * @example "/api/v1/users/123"
   */
  path: string;
  /**
   * HTTP method of the request that caused the error
   * @example "POST"
   */
  method: BadResponseMethodEnum;
  /**
   * Additional error details. May include validation errors, field-specific messages, or debugging information
   * @example {"fields":[{"path":"initData","issue":"Must be longer than 32 or equal to  characters"}]}
   */
  details?: Record<string, any>;
}

export interface InternalResponse {
  /**
   * Operation success flag. Always false for error responses
   * @example false
   */
  success: boolean;
  /**
   * Localized error message describing what went wrong. Suitable for displaying to users
   * @example "Unable to process your request. Please try again later."
   */
  message: string;
  /**
   * Standardized error code for programmatic response handling and client-side error categorization
   * @example "INTERNAL_ERROR"
   */
  code: ErrorCode;
  /**
   * HTTP status code indicating the type of error (400, 401, 403, 404, 409, 422, 500, etc.)
   * @min 400
   * @max 599
   * @example 500
   */
  statusCode: number;
  /**
   * ISO 8601 timestamp indicating when the error response was generated
   * @format date-time
   * @example "2026-05-19T01:32:55.443Z"
   */
  timestamp: string;
  /**
   * Unique trace ID for request tracking and debugging purposes. Can be used to correlate logs
   * @example "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
   */
  traceId: string;
  /**
   * API endpoint path that was called when the error occurred
   * @example "/api/v1/users/123"
   */
  path: string;
  /**
   * HTTP method of the request that caused the error
   * @example "POST"
   */
  method: InternalResponseMethodEnum;
}

export interface SignInUserDto {
  /**
   * A string with raw data transferred to the Mini App, convenient for validating data.
   * WARNING: Validate data from this field before using it on the bot's server.
   * @minLength 32
   * @example "query_id=AAHdF6IQAAAAAN0XohDhrOrc&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D&auth_date=1662771648&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2"
   */
  initData: string;
  ip?: string;
  location?: string;
  device_name?: string;
  device_os?: string;
  device_type?: string;
  browser?: string;
  userAgent?: string;
  sessionId: string;
}

export interface AuthUserSessionRefreshTokensSafe {
  /**
   * JWT access token used for authorizing API requests. Contains user payload and expires after a short period (e.g., 15-60 minutes)
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
   */
  access_token: string;
  session_token: string;
  session_refresh_time: string;
}

export interface AuthResponseUserSignedInSafe {
  /**
   * Operation success flag. true - operation completed successfully, false - an error occurred
   * @example true
   */
  success: boolean;
  /**
   * Localized message describing the operation result. Suitable for displaying to users
   * @example "Operation completed successfully"
   */
  message: string;
  /**
   * Standardized operation status code. Used for programmatic response handling
   * @example "SUCCESS"
   */
  code: SuccessCode;
  /**
   * HTTP status code (200, 201, 400, 401, 403, 404, 500, etc.)
   * @example 200
   */
  statusCode: number;
  /**
   * ISO 8601 timestamp indicating when the response was generated
   * @format date-time
   * @example "2026-05-19T01:32:55.443Z"
   */
  timestamp: string;
  user: UserSafe;
  tokens: AuthUserSessionRefreshTokensSafe;
}

export interface SignOutUserDto {
  /** @format uuid */
  session_token: string;
}

export interface SuccessResponse {
  /**
   * Operation success flag. true - operation completed successfully, false - an error occurred
   * @example true
   */
  success: boolean;
  /**
   * Localized message describing the operation result. Suitable for displaying to users
   * @example "Operation completed successfully"
   */
  message: string;
  /**
   * Standardized operation status code. Used for programmatic response handling
   * @example "SUCCESS"
   */
  code: SuccessCode;
  /**
   * HTTP status code (200, 201, 400, 401, 403, 404, 500, etc.)
   * @example 200
   */
  statusCode: number;
  /**
   * ISO 8601 timestamp indicating when the response was generated
   * @format date-time
   * @example "2026-05-19T01:32:55.443Z"
   */
  timestamp: string;
  /**
   * Optional data payload for successful responses
   * @example null
   */
  data?: object;
}

export interface SignOutAllDeviceUserDto {
  /** @format uuid */
  userId: string;
}

export interface SessionSafe {
  /**
   * Unique identifier generated as a UUID.
   * @type {string}
   */
  id: string;
  /**
   * Timestamp when the entity was created.
   * @type {Date}
   * @format date-time
   */
  createdAt: string;
  /**
   * Timestamp when the entity was last updated.
   * @type {Date}
   * @format date-time
   */
  updatedAt: string;
  /**
   * IP address of the session.
   * @type {string}
   */
  ip?: string;
  /**
   * Geographical location of the session.
   * @type {string}
   */
  location?: string;
  /**
   * Operating system of the device.
   * @type {string}
   */
  device_os?: string;
  /**
   * Name of the device.
   * @type {string}
   */
  device_name?: string;
  /**
   * Type of the device.
   * @type {string}
   */
  device_type?: string;
  /**
   * Browser used in the session.
   * @type {string}
   */
  browser?: string;
  /**
   * User agent string of the session.
   * @type {string}
   */
  userAgent?: string;
  /**
   * ID of the user associated with the session.
   * @type {string}
   */
  user_id: string;
}

export interface AuthResponseUserSessions {
  /**
   * Operation success flag. true - operation completed successfully, false - an error occurred
   * @example true
   */
  success: boolean;
  /**
   * Localized message describing the operation result. Suitable for displaying to users
   * @example "Operation completed successfully"
   */
  message: string;
  /**
   * Standardized operation status code. Used for programmatic response handling
   * @example "SUCCESS"
   */
  code: SuccessCode;
  /**
   * HTTP status code (200, 201, 400, 401, 403, 404, 500, etc.)
   * @example 200
   */
  statusCode: number;
  /**
   * ISO 8601 timestamp indicating when the response was generated
   * @format date-time
   * @example "2026-05-19T01:32:55.443Z"
   */
  timestamp: string;
  /** User session */
  data: SessionSafe;
}

export interface AuthResponseUserSession {
  /**
   * Operation success flag. true - operation completed successfully, false - an error occurred
   * @example true
   */
  success: boolean;
  /**
   * Localized message describing the operation result. Suitable for displaying to users
   * @example "Operation completed successfully"
   */
  message: string;
  /**
   * Standardized operation status code. Used for programmatic response handling
   * @example "SUCCESS"
   */
  code: SuccessCode;
  /**
   * HTTP status code (200, 201, 400, 401, 403, 404, 500, etc.)
   * @example 200
   */
  statusCode: number;
  /**
   * ISO 8601 timestamp indicating when the response was generated
   * @format date-time
   * @example "2026-05-19T01:32:55.443Z"
   */
  timestamp: string;
  /** User session */
  data: SessionSafe;
}

export interface UserDtoDelete {
  /** @format uuid */
  user_id: string;
}

/**
 * HTTP method of the request that caused the error
 * @example "POST"
 */
export enum BadResponseMethodEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  OPTIONS = "OPTIONS",
  HEAD = "HEAD",
}

/**
 * HTTP method of the request that caused the error
 * @example "POST"
 */
export enum InternalResponseMethodEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  OPTIONS = "OPTIONS",
  HEAD = "HEAD",
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Turbo repo
 * @version 1.0.0
 * @contact
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerFindAll
     * @summary Fetches all users.
     * @request GET:/users
     */
    usersControllerFindAll: (params: RequestParams = {}) =>
      this.request<UserSafe, any>({
        path: `/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerFileTesting
     * @summary Endpoint for testing file upload.
     * @request POST:/users
     */
    usersControllerFileTesting: (
      data: {
        /**
         * File to upload (supports any file type)
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerFetchMe
     * @summary Fetches current user.
     * @request GET:/users/me
     * @secure
     */
    usersControllerFetchMe: (params: RequestParams = {}) =>
      this.request<UserSafe, UserExceptionNotFound>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerFindOne
     * @summary Fetches a single user by identifier.
     * @request GET:/users/{identifier}
     * @secure
     */
    usersControllerFindOne: (identifier: string, params: RequestParams = {}) =>
      this.request<UserSafe, UserExceptionNotFound>({
        path: `/users/${identifier}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerInitTelegramAuth
     * @summary Signs in a user.
     * @request POST:/auth/init
     */
    authControllerInitTelegramAuth: (
      data: UserDtoInit,
      params: RequestParams = {},
    ) =>
      this.request<AuthResponseUserInit, BadResponse | InternalResponse>({
        path: `/auth/init`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerSignIn
     * @summary Signs in a user.
     * @request POST:/auth/sign-in
     */
    authControllerSignIn: (data: SignInUserDto, params: RequestParams = {}) =>
      this.request<AuthResponseUserSignedInSafe, InternalResponse>({
        path: `/auth/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerSignOut
     * @summary Signs out the user from the current session.
     * @request POST:/auth/sign-out
     * @secure
     */
    authControllerSignOut: (data: SignOutUserDto, params: RequestParams = {}) =>
      this.request<SuccessResponse, BadResponse | InternalResponse>({
        path: `/auth/sign-out`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerSignOutAllDevices
     * @summary Signs out the user from all devices.
     * @request POST:/auth/sign-out-allDevices
     * @secure
     */
    authControllerSignOutAllDevices: (
      data: SignOutAllDeviceUserDto,
      params: RequestParams = {},
    ) =>
      this.request<SuccessResponse, BadResponse>({
        path: `/auth/sign-out-allDevices`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerSessions
     * @summary Retrieves all sessions for a user.
     * @request GET:/auth/sessions/{userId}
     * @secure
     */
    authControllerSessions: (userId: string, params: RequestParams = {}) =>
      this.request<AuthResponseUserSessions, BadResponse>({
        path: `/auth/sessions/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerSessionsMe
     * @summary Retrieves all sessions for current user.
     * @request GET:/auth/sessions/me
     * @secure
     */
    authControllerSessionsMe: (params: RequestParams = {}) =>
      this.request<AuthResponseUserSessions, BadResponse>({
        path: `/auth/sessions/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerSession
     * @summary Retrieves a session by ID.
     * @request GET:/auth/session/{id}
     * @secure
     */
    authControllerSession: (id: string, params: RequestParams = {}) =>
      this.request<AuthResponseUserSession, BadResponse | InternalResponse>({
        path: `/auth/session/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerDeleteUser
     * @request DELETE:/auth/delete-account
     * @secure
     */
    authControllerDeleteUser: (
      data: UserDtoDelete,
      params: RequestParams = {},
    ) =>
      this.request<SuccessResponse, BadResponse | InternalResponse>({
        path: `/auth/delete-account`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  health = {
    /**
     * No description
     *
     * @tags Health
     * @name HealthControllerCheckDatabase
     * @summary Checks the health of the database connection.
     * @request GET:/health/database
     */
    healthControllerCheckDatabase: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "ok" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"database":{"status":"up"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        },
        {
          /** @example "error" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"redis":{"status":"down","message":"Could not connect"}} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        }
      >({
        path: `/health/database`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name HealthControllerCheck
     * @summary Checks the health of an external HTTP service.
     * @request GET:/health
     */
    healthControllerCheck: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "ok" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"database":{"status":"up"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        },
        {
          /** @example "error" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"redis":{"status":"down","message":"Could not connect"}} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        }
      >({
        path: `/health`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name HealthControllerCheckDisk
     * @summary Checks the health of the disk storage.
     * @request GET:/health/disk
     */
    healthControllerCheckDisk: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "ok" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"database":{"status":"up"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        },
        {
          /** @example "error" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"redis":{"status":"down","message":"Could not connect"}} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        }
      >({
        path: `/health/disk`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health
     * @name HealthControllerCheckMemory
     * @summary Checks the heap memory usage.
     * @request GET:/health/memory
     */
    healthControllerCheckMemory: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "ok" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"database":{"status":"up"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        },
        {
          /** @example "error" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"redis":{"status":"down","message":"Could not connect"}} */
          error?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          > | null;
          /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
          details?: Record<
            string,
            {
              status: string;
              [key: string]: any;
            }
          >;
        }
      >({
        path: `/health/memory`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
