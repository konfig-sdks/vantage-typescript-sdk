/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PostCostReportsBusinessMetricTokensWithMetadataInner
 */
export interface PostCostReportsBusinessMetricTokensWithMetadataInner {
    /**
     * The token of the BusinessMetric to attach to the CostReport.
     * @type {string}
     * @memberof PostCostReportsBusinessMetricTokensWithMetadataInner
     */
    'business_metric_token': string;
    /**
     * Determines the scale of the BusinessMetric\'s values within the CostReport.
     * @type {string}
     * @memberof PostCostReportsBusinessMetricTokensWithMetadataInner
     */
    'unit_scale'?: PostCostReportsBusinessMetricTokensWithMetadataInnerUnitScaleEnum;
}

type PostCostReportsBusinessMetricTokensWithMetadataInnerUnitScaleEnum = 'per_unit' | 'per_hundred' | 'per_thousand' | 'per_million' | 'per_billion'


