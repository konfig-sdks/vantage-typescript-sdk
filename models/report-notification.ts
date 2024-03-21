/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * ReportNotification model
 * @export
 * @interface ReportNotification
 */
export interface ReportNotification {
    /**
     * The title of the ReportNotification.
     * @type {string}
     * @memberof ReportNotification
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportNotification
     */
    'token'?: string;
    /**
     * The token for a CostReport the ReportNotification is applied to.
     * @type {string}
     * @memberof ReportNotification
     */
    'cost_report_token'?: string;
    /**
     * The Users that receive the notification.
     * @type {Array<string>}
     * @memberof ReportNotification
     */
    'user_tokens'?: Array<string>;
    /**
     * The Slack or Microsoft Teams channels that receive the notification.
     * @type {Array<string>}
     * @memberof ReportNotification
     */
    'recipient_channels'?: Array<string>;
    /**
     * The frequency the ReportNotification is sent.
     * @type {string}
     * @memberof ReportNotification
     */
    'frequency'?: ReportNotificationFrequencyEnum;
    /**
     * The type of change the ReportNotification is tracking.
     * @type {string}
     * @memberof ReportNotification
     */
    'change'?: ReportNotificationChangeEnum;
}

type ReportNotificationFrequencyEnum = 'daily' | 'weekly' | 'monthly'
type ReportNotificationChangeEnum = 'percentage' | 'dollars'

