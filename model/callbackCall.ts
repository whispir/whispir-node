
import { RequestFile } from './models';
import { CallbackInvocation, CallbackInvocationWrite } from './callbackInvocation';
import { Link, LinkWrite } from './link';
import { Responder, ResponderWrite } from './responder';
import { Response, ResponseWrite } from './response';


export type CallbackCallWrite = {
    /**
    * The status of this particular callback attempt.
    */
    'status': 'SUCCESS' | 'FAILED';
    'from'?: ResponderWrite;
    'responseMessage'?: ResponseWrite;
    'callback'?: CallbackInvocationWrite;
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
    'from': Responder;
    'responseMessage': Response;
    'callback': CallbackInvocation;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
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
            "type": "Responder"
        },
        {
            "name": "responseMessage",
            "baseName": "responseMessage",
            "type": "Response"
        },
        {
            "name": "callback",
            "baseName": "callback",
            "type": "CallbackInvocation"
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

