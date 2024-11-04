import { CallbackInvocation, CallbackInvocationWrite } from './callbackInvocation';
import { Link } from './link';
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
};
/**
* A callback call object
*/
export declare class CallbackCall {
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
