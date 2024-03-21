/*
Vantage

Vantage API

The version of the OpenAPI document: 2.0.0
Contact: support@vantage.sh

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Product model
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'id'?: string;
    /**
     * The category of the cloud product
     * @type {string}
     * @memberof Product
     */
    'category'?: string;
    /**
     * The common name of the product.
     * @type {string}
     * @memberof Product
     */
    'name'?: string;
    /**
     * A unique slug for the service the product belongs to.
     * @type {string}
     * @memberof Product
     */
    'service_id'?: string;
    /**
     * A unique slug for the provider the product belongs to.
     * @type {string}
     * @memberof Product
     */
    'provider_id'?: string;
    /**
     * An object of metadata about the product.
     * @type {object}
     * @memberof Product
     */
    'details'?: object;
}
