
import { RequestFile } from './models';
import { CallbackCallEvent, CallbackCallEventWrite } from './callbackCallEvent';
import { CallbackCallFrom, CallbackCallFromWrite } from './callbackCallFrom';
import { CallbackCallResponseMessage, CallbackCallResponseMessageWrite } from './callbackCallResponseMessage';
import { Link, LinkWrite } from './link';


export type CallbackCallWrite = {
    /**
    * The status of this particular callback attempt.
    */
    'status': 'SUCCESS' | 'FAILED';
    'from'?: CallbackCallFromWrite;
    'responseMessage'?: CallbackCallResponseMessageWrite;
    'callback'?: CallbackCallEventWrite;
}

/**
* A callback call object
*/
export class CallbackCall {
    /**
    * The unique ID of the specific call within Whispir
    */
    'id': string;
    /**
    * The unique ID of the message within Whispir
    */
    'messageId': string;
    /**
    * The status of this particular callback attempt.
    */
    'status': 'SUCCESS' | 'FAILED';
    /**
    * The fully qualified URL to the original message within Whispir
    */
    'messageLocation': string;
    'from': CallbackCallFrom;
    'responseMessage': CallbackCallResponseMessage;
    'callback': CallbackCallEvent;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

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
            "type": "CallbackCallEvent"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCall.attributeTypeMap;
    }
}

