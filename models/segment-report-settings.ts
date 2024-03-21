/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Report settings configurable on top-level Segments.
 * @export
 * @interface SegmentReportSettings
 */
export interface SegmentReportSettings {
    /**
     * 
     * @type {boolean}
     * @memberof SegmentReportSettings
     */
    'include_credits'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentReportSettings
     */
    'include_refunds'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentReportSettings
     */
    'include_discounts'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentReportSettings
     */
    'include_tax'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SegmentReportSettings
     */
    'amortize'?: boolean;
}

