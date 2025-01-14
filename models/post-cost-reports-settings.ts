/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Report settings.
 * @export
 * @interface PostCostReportsSettings
 */
export interface PostCostReportsSettings {
    /**
     * Report will include credits.
     * @type {boolean}
     * @memberof PostCostReportsSettings
     */
    'include_credits'?: boolean;
    /**
     * Report will include refunds.
     * @type {boolean}
     * @memberof PostCostReportsSettings
     */
    'include_refunds'?: boolean;
    /**
     * Report will include discounts.
     * @type {boolean}
     * @memberof PostCostReportsSettings
     */
    'include_discounts'?: boolean;
    /**
     * Report will include tax.
     * @type {boolean}
     * @memberof PostCostReportsSettings
     */
    'include_tax'?: boolean;
    /**
     * Report will amortize.
     * @type {boolean}
     * @memberof PostCostReportsSettings
     */
    'amortize'?: boolean;
    /**
     * Report will show unallocated costs.
     * @type {boolean}
     * @memberof PostCostReportsSettings
     */
    'unallocated'?: boolean;
}

