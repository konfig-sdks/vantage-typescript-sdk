/* tslint:disable */
/* eslint-disable */
/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BusinessMetric } from '../models';
// @ts-ignore
import { BusinessMetrics } from '../models';
// @ts-ignore
import { BusinessMetricsUpdateValuesCsvRequest } from '../models';
// @ts-ignore
import { Errors } from '../models';
// @ts-ignore
import { PostBusinessMetrics } from '../models';
// @ts-ignore
import { PostBusinessMetricsCostReportTokensWithMetadataInner } from '../models';
// @ts-ignore
import { PostBusinessMetricsValuesInner } from '../models';
// @ts-ignore
import { PutBusinessMetrics } from '../models';
// @ts-ignore
import { PutBusinessMetricsCostReportTokensWithMetadataInner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BusinessMetricsApi - axios parameter creator
 * @export
 */
export const BusinessMetricsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Business Metric.
         * @param {PostBusinessMetrics} postBusinessMetrics 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewMetric: async (postBusinessMetrics: PostBusinessMetrics, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'postBusinessMetrics' is not null or undefined
            assertParamExists('createNewMetric', 'postBusinessMetrics', postBusinessMetrics)
            const localVarPath = `/business_metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["write"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: postBusinessMetrics,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/business_metrics',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(postBusinessMetrics, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing BusinessMetric.
         * @param {string} businessMetricToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExistingMetric: async (businessMetricToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'businessMetricToken' is not null or undefined
            assertParamExists('deleteExistingMetric', 'businessMetricToken', businessMetricToken)
            const localVarPath = `/business_metrics/{business_metric_token}`
                .replace(`{${"business_metric_token"}}`, encodeURIComponent(String(businessMetricToken !== undefined ? businessMetricToken : `-business_metric_token-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["write"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/business_metrics/{business_metric_token}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return all Business Metrics that the current API token has access to.
         * @param {number} [page] The page of results to return.
         * @param {number} [limit] The amount of results to return. The maximum is 1000.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllMetrics: async (page?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/business_metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["read"], configuration)
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/business_metrics',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a specific Business Metric.
         * @param {string} businessMetricToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetricById: async (businessMetricToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'businessMetricToken' is not null or undefined
            assertParamExists('getMetricById', 'businessMetricToken', businessMetricToken)
            const localVarPath = `/business_metrics/{business_metric_token}`
                .replace(`{${"business_metric_token"}}`, encodeURIComponent(String(businessMetricToken !== undefined ? businessMetricToken : `-business_metric_token-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["read"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/business_metrics/{business_metric_token}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an existing BusinessMetric.
         * @param {string} businessMetricToken 
         * @param {PutBusinessMetrics} putBusinessMetrics 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExistingMetric: async (businessMetricToken: string, putBusinessMetrics: PutBusinessMetrics, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'businessMetricToken' is not null or undefined
            assertParamExists('updateExistingMetric', 'businessMetricToken', businessMetricToken)
            // verify required parameter 'putBusinessMetrics' is not null or undefined
            assertParamExists('updateExistingMetric', 'putBusinessMetrics', putBusinessMetrics)
            const localVarPath = `/business_metrics/{business_metric_token}`
                .replace(`{${"business_metric_token"}}`, encodeURIComponent(String(businessMetricToken !== undefined ? businessMetricToken : `-business_metric_token-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["write"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: putBusinessMetrics,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/business_metrics/{business_metric_token}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(putBusinessMetrics, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the values for an existing BusinessMetric from a CSV file.
         * @param {string} businessMetricToken 
         * @param {Uint8Array | File | buffer.File} csv CSV file containing BusinessMetric dates and amounts
         * @param {BusinessMetricsUpdateValuesCsvRequest} businessMetricsUpdateValuesCsvRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateValuesCsv: async (businessMetricToken: string, csv: Uint8Array | File | buffer.File, businessMetricsUpdateValuesCsvRequest: BusinessMetricsUpdateValuesCsvRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'businessMetricToken' is not null or undefined
            assertParamExists('updateValuesCsv', 'businessMetricToken', businessMetricToken)
            // verify required parameter 'csv' is not null or undefined
            assertParamExists('updateValuesCsv', 'csv', csv)
            // verify required parameter 'businessMetricsUpdateValuesCsvRequest' is not null or undefined
            assertParamExists('updateValuesCsv', 'businessMetricsUpdateValuesCsvRequest', businessMetricsUpdateValuesCsvRequest)
            const localVarPath = `/business_metrics/{business_metric_token}/values.csv`
                .replace(`{${"business_metric_token"}}`, encodeURIComponent(String(businessMetricToken !== undefined ? businessMetricToken : `-business_metric_token-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            const addFormParam = async (name: string, data: any, isBinary: boolean, isPrimitiveType: boolean) => {
                if (isBinary) {
                    if (data instanceof Uint8Array) {
                        // Handle Buffer data
                        const filetype = await fromBuffer(data)
                        const filename = filetype === undefined ? name : `${name}.${filetype.ext}`
                        localVarFormParams.append(name, data as any, filename);
                    } else if ("name" in data) {
                        // File instances in browsers and Node.js have the
                        // "name" property "Duck typing" files to handle browser
                        // File class or Node.js File class
                        // Web: https://developer.mozilla.org/en-US/docs/Web/API/File
                        // Node.js: https://nodejs.org/api/buffer.html#new-bufferfilesources-filename-options
                        if (isBrowser()) {
                            // FormData in browser can accept File/Blob directly
                            localVarFormParams.append(name, data, data.name);
                        } else {
                            // FormData in Node.js can only accept raw Buffer so convert before passing
                            const bytes = await data.arrayBuffer()
                            const buffer = Buffer.from(bytes)
                            localVarFormParams.append(name, buffer, data.name);
                        }
                    }
                } else {
                    if (isPrimitiveType) {
                        /**
                         * FormData can only accept string or Blob so we need to convert
                         * non-string primitives to string. We also need to convert
                         */
                        if (typeof data === "object") {
                          localVarFormParams.append(name, JSON.stringify(data));
                        } else {
                          localVarFormParams.append(name, data);
                        }
                    } else {
                        if (isBrowser()) {
                            localVarFormParams.append(name, new Blob([JSON.stringify(data)], { type: "application/json" }))
                        } else {
                            localVarFormParams.append(name, JSON.stringify(data), { type: "application/json", filename: "data.json" });
                        }
                    }
                }
            }
            if (!isBrowser()) Object.assign(localVarHeaderParameter, localVarFormParams.getHeaders());

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["write"], configuration)

            if (csv !== undefined) {
                await addFormParam('csv', csv, true, true)
            }
    
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;
            requestBeforeHook({
                requestBody: businessMetricsUpdateValuesCsvRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/business_metrics/{business_metric_token}/values.csv',
                httpMethod: 'PUT'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BusinessMetricsApi - functional programming interface
 * @export
 */
export const BusinessMetricsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BusinessMetricsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new Business Metric.
         * @param {BusinessMetricsApiCreateNewMetricRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewMetric(requestParameters: BusinessMetricsApiCreateNewMetricRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessMetric>> {
            const postBusinessMetrics: PostBusinessMetrics = {
                title: requestParameters.title,
                cost_report_tokens_with_metadata: requestParameters.cost_report_tokens_with_metadata,
                values: requestParameters.values
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewMetric(postBusinessMetrics, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing BusinessMetric.
         * @param {BusinessMetricsApiDeleteExistingMetricRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteExistingMetric(requestParameters: BusinessMetricsApiDeleteExistingMetricRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessMetric>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteExistingMetric(requestParameters.businessMetricToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return all Business Metrics that the current API token has access to.
         * @param {BusinessMetricsApiGetAllMetricsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllMetrics(requestParameters: BusinessMetricsApiGetAllMetricsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessMetrics>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllMetrics(requestParameters.page, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a specific Business Metric.
         * @param {BusinessMetricsApiGetMetricByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetricById(requestParameters: BusinessMetricsApiGetMetricByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessMetric>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMetricById(requestParameters.businessMetricToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates an existing BusinessMetric.
         * @param {BusinessMetricsApiUpdateExistingMetricRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateExistingMetric(requestParameters: BusinessMetricsApiUpdateExistingMetricRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessMetric>> {
            const putBusinessMetrics: PutBusinessMetrics = {
                title: requestParameters.title,
                cost_report_tokens_with_metadata: requestParameters.cost_report_tokens_with_metadata,
                values: requestParameters.values
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateExistingMetric(requestParameters.businessMetricToken, putBusinessMetrics, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates the values for an existing BusinessMetric from a CSV file.
         * @param {BusinessMetricsApiUpdateValuesCsvRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateValuesCsv(requestParameters: BusinessMetricsApiUpdateValuesCsvRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BusinessMetric>> {
            const businessMetricsUpdateValuesCsvRequest: BusinessMetricsUpdateValuesCsvRequest = {
                csv: requestParameters.csv
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateValuesCsv(requestParameters.businessMetricToken, requestParameters.csv, businessMetricsUpdateValuesCsvRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BusinessMetricsApi - factory interface
 * @export
 */
export const BusinessMetricsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BusinessMetricsApiFp(configuration)
    return {
        /**
         * Create a new Business Metric.
         * @param {BusinessMetricsApiCreateNewMetricRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewMetric(requestParameters: BusinessMetricsApiCreateNewMetricRequest, options?: AxiosRequestConfig): AxiosPromise<BusinessMetric> {
            return localVarFp.createNewMetric(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing BusinessMetric.
         * @param {BusinessMetricsApiDeleteExistingMetricRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExistingMetric(requestParameters: BusinessMetricsApiDeleteExistingMetricRequest, options?: AxiosRequestConfig): AxiosPromise<BusinessMetric> {
            return localVarFp.deleteExistingMetric(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Return all Business Metrics that the current API token has access to.
         * @param {BusinessMetricsApiGetAllMetricsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllMetrics(requestParameters: BusinessMetricsApiGetAllMetricsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<BusinessMetrics> {
            return localVarFp.getAllMetrics(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a specific Business Metric.
         * @param {BusinessMetricsApiGetMetricByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetricById(requestParameters: BusinessMetricsApiGetMetricByIdRequest, options?: AxiosRequestConfig): AxiosPromise<BusinessMetric> {
            return localVarFp.getMetricById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing BusinessMetric.
         * @param {BusinessMetricsApiUpdateExistingMetricRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExistingMetric(requestParameters: BusinessMetricsApiUpdateExistingMetricRequest, options?: AxiosRequestConfig): AxiosPromise<BusinessMetric> {
            return localVarFp.updateExistingMetric(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the values for an existing BusinessMetric from a CSV file.
         * @param {BusinessMetricsApiUpdateValuesCsvRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateValuesCsv(requestParameters: BusinessMetricsApiUpdateValuesCsvRequest, options?: AxiosRequestConfig): AxiosPromise<BusinessMetric> {
            return localVarFp.updateValuesCsv(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewMetric operation in BusinessMetricsApi.
 * @export
 * @interface BusinessMetricsApiCreateNewMetricRequest
 */
export type BusinessMetricsApiCreateNewMetricRequest = {
    
} & PostBusinessMetrics

/**
 * Request parameters for deleteExistingMetric operation in BusinessMetricsApi.
 * @export
 * @interface BusinessMetricsApiDeleteExistingMetricRequest
 */
export type BusinessMetricsApiDeleteExistingMetricRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BusinessMetricsApiDeleteExistingMetric
    */
    readonly businessMetricToken: string
    
}

/**
 * Request parameters for getAllMetrics operation in BusinessMetricsApi.
 * @export
 * @interface BusinessMetricsApiGetAllMetricsRequest
 */
export type BusinessMetricsApiGetAllMetricsRequest = {
    
    /**
    * The page of results to return.
    * @type {number}
    * @memberof BusinessMetricsApiGetAllMetrics
    */
    readonly page?: number
    
    /**
    * The amount of results to return. The maximum is 1000.
    * @type {number}
    * @memberof BusinessMetricsApiGetAllMetrics
    */
    readonly limit?: number
    
}

/**
 * Request parameters for getMetricById operation in BusinessMetricsApi.
 * @export
 * @interface BusinessMetricsApiGetMetricByIdRequest
 */
export type BusinessMetricsApiGetMetricByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BusinessMetricsApiGetMetricById
    */
    readonly businessMetricToken: string
    
}

/**
 * Request parameters for updateExistingMetric operation in BusinessMetricsApi.
 * @export
 * @interface BusinessMetricsApiUpdateExistingMetricRequest
 */
export type BusinessMetricsApiUpdateExistingMetricRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BusinessMetricsApiUpdateExistingMetric
    */
    readonly businessMetricToken: string
    
} & PutBusinessMetrics

/**
 * Request parameters for updateValuesCsv operation in BusinessMetricsApi.
 * @export
 * @interface BusinessMetricsApiUpdateValuesCsvRequest
 */
export type BusinessMetricsApiUpdateValuesCsvRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BusinessMetricsApiUpdateValuesCsv
    */
    readonly businessMetricToken: string
    
    /**
    * CSV file containing BusinessMetric dates and amounts
    * @type {Uint8Array | File | buffer.File}
    * @memberof BusinessMetricsApiUpdateValuesCsv
    */
    readonly csv: Uint8Array | File | buffer.File
    
} & BusinessMetricsUpdateValuesCsvRequest

/**
 * BusinessMetricsApiGenerated - object-oriented interface
 * @export
 * @class BusinessMetricsApiGenerated
 * @extends {BaseAPI}
 */
export class BusinessMetricsApiGenerated extends BaseAPI {
    /**
     * Create a new Business Metric.
     * @param {BusinessMetricsApiCreateNewMetricRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessMetricsApiGenerated
     */
    public createNewMetric(requestParameters: BusinessMetricsApiCreateNewMetricRequest, options?: AxiosRequestConfig) {
        return BusinessMetricsApiFp(this.configuration).createNewMetric(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing BusinessMetric.
     * @param {BusinessMetricsApiDeleteExistingMetricRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessMetricsApiGenerated
     */
    public deleteExistingMetric(requestParameters: BusinessMetricsApiDeleteExistingMetricRequest, options?: AxiosRequestConfig) {
        return BusinessMetricsApiFp(this.configuration).deleteExistingMetric(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return all Business Metrics that the current API token has access to.
     * @param {BusinessMetricsApiGetAllMetricsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessMetricsApiGenerated
     */
    public getAllMetrics(requestParameters: BusinessMetricsApiGetAllMetricsRequest = {}, options?: AxiosRequestConfig) {
        return BusinessMetricsApiFp(this.configuration).getAllMetrics(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a specific Business Metric.
     * @param {BusinessMetricsApiGetMetricByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessMetricsApiGenerated
     */
    public getMetricById(requestParameters: BusinessMetricsApiGetMetricByIdRequest, options?: AxiosRequestConfig) {
        return BusinessMetricsApiFp(this.configuration).getMetricById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an existing BusinessMetric.
     * @param {BusinessMetricsApiUpdateExistingMetricRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessMetricsApiGenerated
     */
    public updateExistingMetric(requestParameters: BusinessMetricsApiUpdateExistingMetricRequest, options?: AxiosRequestConfig) {
        return BusinessMetricsApiFp(this.configuration).updateExistingMetric(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the values for an existing BusinessMetric from a CSV file.
     * @param {BusinessMetricsApiUpdateValuesCsvRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BusinessMetricsApiGenerated
     */
    public updateValuesCsv(requestParameters: BusinessMetricsApiUpdateValuesCsvRequest, options?: AxiosRequestConfig) {
        return BusinessMetricsApiFp(this.configuration).updateValuesCsv(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
