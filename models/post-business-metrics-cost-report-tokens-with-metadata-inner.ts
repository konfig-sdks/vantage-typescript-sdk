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
 * @interface PostBusinessMetricsCostReportTokensWithMetadataInner
 */
export interface PostBusinessMetricsCostReportTokensWithMetadataInner {
    /**
     * The token of the CostReport the BusinessMetric is attached to.
     * @type {string}
     * @memberof PostBusinessMetricsCostReportTokensWithMetadataInner
     */
    'cost_report_token': string;
    /**
     * Determines the scale of the BusinessMetric\'s values within the CostReport.
     * @type {string}
     * @memberof PostBusinessMetricsCostReportTokensWithMetadataInner
     */
    'unit_scale'?: PostBusinessMetricsCostReportTokensWithMetadataInnerUnitScaleEnum;
}

type PostBusinessMetricsCostReportTokensWithMetadataInnerUnitScaleEnum = 'per_unit' | 'per_hundred' | 'per_thousand' | 'per_million' | 'per_billion'


