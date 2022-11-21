
import { RequestFile } from './models';
import { CallbackCallCallback } from './callbackCallCallback';
import { CallbackCallFrom } from './callbackCallFrom';
import { CallbackCallResponseMessage } from './callbackCallResponseMessage';
import { LinkInner } from './linkInner';

/**
* A callback call object
*/
export class CallbackCall {
    /**
    * The unique ID of the specific call within Whispir
    */
    'id'?: string;
    /**
    * The unique ID of the message within Whispir
    */
    'messageId'?: string;
    /**
    * The status of this particular callback attempt.
    */
    'status'?: 'SUCCESS' | 'FAILED';
    /**
    * The fully qualified URL to the original message within Whispir
    */
    'messageLocation'?: string;
    'from'?: CallbackCallFrom;
    'responseMessage'?: CallbackCallResponseMessage;
    'callback'?: CallbackCallCallback;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link'?: Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "messageLocation",
            "baseName": "messageLocation",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "CallbackCallFrom"
        },
        {
            "name": "responseMessage",
            "baseName": "responseMessage",
            "type": "CallbackCallResponseMessage"
        },
        {
            "name": "callback",
            "baseName": "callback",
            "type": "CallbackCallCallback"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCall.attributeTypeMap;
    }
}

