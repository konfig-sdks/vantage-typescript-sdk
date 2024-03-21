/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * SavedFilter model
 * @export
 * @interface SavedFilter
 */
export interface SavedFilter {
    /**
     * The title of the SavedFilter.
     * @type {string}
     * @memberof SavedFilter
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof SavedFilter
     */
    'token'?: string;
    /**
     * The tokens for any CostReports the SavedFilter is applied to.
     * @type {Array<string>}
     * @memberof SavedFilter
     */
    'cost_report_tokens'?: Array<string>;
    /**
     * The SavedFilter\'s filter, applied to any relevant CostReports. Additional documentation available at https://docs.vantage.sh/vql.
     * @type {string}
     * @memberof SavedFilter
     */
    'filter'?: string;
    /**
     * The date and time, in UTC, the report was created. ISO 8601 Formatted.
     * @type {string}
     * @memberof SavedFilter
     */
    'created_at'?: string;
    /**
     * The User who created the SavedFilter.
     * @type {string}
     * @memberof SavedFilter
     */
    'created_by'?: string;
    /**
     * The token for the Workspace the SavedFilter is a part of.
     * @type {string}
     * @memberof SavedFilter
     */
    'workspace_token'?: string;
}
