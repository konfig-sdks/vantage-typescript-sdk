/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PostSegmentsReportSettings } from './post-segments-report-settings';

/**
 * Create a Segment.
 * @export
 * @interface PostSegments
 */
export interface PostSegments {
    /**
     * The title of the Segment.
     * @type {string}
     * @memberof PostSegments
     */
    'title': string;
    /**
     * The description of the Segment.
     * @type {string}
     * @memberof PostSegments
     */
    'description'?: string;
    /**
     * The priority of the Segment.
     * @type {number}
     * @memberof PostSegments
     */
    'priority'?: number;
    /**
     * Track Unallocated Costs which are not assigned to any of the created Segments.
     * @type {boolean}
     * @memberof PostSegments
     */
    'track_unallocated'?: boolean;
    /**
     * 
     * @type {PostSegmentsReportSettings}
     * @memberof PostSegments
     */
    'report_settings'?: PostSegmentsReportSettings;
    /**
     * The token of the Workspace to add the Segment to. Ignored if \'segment_token\' is set. Required if the API token is associated with multiple Workspaces.
     * @type {string}
     * @memberof PostSegments
     */
    'workspace_token'?: string;
    /**
     * The filter query language to apply to the Segment. Additional documentation available at https://docs.vantage.sh/vql.
     * @type {string}
     * @memberof PostSegments
     */
    'filter'?: string;
    /**
     * The token of the parent Segment this new Segment belongs to. Determines the Workspace the segment is assigned to.
     * @type {string}
     * @memberof PostSegments
     */
    'parent_segment_token'?: string;
}
