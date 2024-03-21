/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportNotification } from './report-notification';

/**
 * ReportNotifications model
 * @export
 * @interface ReportNotifications
 */
export interface ReportNotifications {
    /**
     * 
     * @type {object}
     * @memberof ReportNotifications
     */
    'links'?: object;
    /**
     * 
     * @type {Array<ReportNotification>}
     * @memberof ReportNotifications
     */
    'report_notifications'?: Array<ReportNotification>;
}
