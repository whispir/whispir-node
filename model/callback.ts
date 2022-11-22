
import { RequestFile } from './models';
import { CallbackAuth, CallbackAuthWrite } from './callbackAuth';
import { CallbackCallbacks, CallbackCallbacksWrite } from './callbackCallbacks';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type CallbackWrite = {
    /**
    * The name of the callback.   This is the value that should be passed in the message payload for triggering the callbacks
    */
    'name': string;
    /**
    * Specifies the service URL that API Callbacks should be forwarded to.
    */
    'url': string;
    'auth': CallbackAuthWrite;
    /**
    * Specifies the content type that should be sent to this endpoint.
    */
    'contentType': 'json' | 'xml';
    /**
    * Specifies whether HTML should be stripped from responses.
    */
    'removeHTML': 'enabled' | 'disabled';
    /**
    * Specifies whether Whispir should perform retries in the event there is a failure accessing the callback service.
    */
    'retriesEnabled': boolean;
    /**
    * Whispir notify this email address that a callback has failed (only when retries are disabled).   The email will contain the details of the callback content.
    */
    'email': string;
    'callbacks': CallbackCallbacksWrite;
}

/**
* The callback object, used to configure the callback (also known as webhook).
*/
export class Callback {
    /**
    * The id of the callback.   This is the value that should be passed when referring to the callback using the API endpoints
    */
    'id': string;
    /**
    * The name of the callback.   This is the value that should be passed in the message payload for triggering the callbacks
    */
    'name': string;
    /**
    * Specifies the service URL that API Callbacks should be forwarded to.
    */
    'url': string;
    'auth': CallbackAuth;
    /**
    * Specifies the content type that should be sent to this endpoint.
    */
    'contentType': 'json' | 'xml';
    /**
    * Specifies whether HTML should be stripped from responses.
    */
    'removeHTML': 'enabled' | 'disabled';
    /**
    * Specifies whether Whispir should perform retries in the event there is a failure accessing the callback service.
    */
    'retriesEnabled': boolean;
    /**
    * Whispir notify this email address that a callback has failed (only when retries are disabled).   The email will contain the details of the callback content.
    */
    'email': string;
    'callbacks': CallbackCallbacks;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "CallbackAuth"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "removeHTML",
            "baseName": "removeHTML",
            "type": "string"
        },
        {
            "name": "retriesEnabled",
            "baseName": "retriesEnabled",
            "type": "boolean"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "callbacks",
            "baseName": "callbacks",
            "type": "CallbackCallbacks"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return Callback.attributeTypeMap;
    }
}

