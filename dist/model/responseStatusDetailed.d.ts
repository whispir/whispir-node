import { Responder, ResponderWrite } from './responder';
import { Response, ResponseWrite } from './response';
export type ResponseStatusDetailedWrite = {
    'from': ResponderWrite;
    'responseMessage': ResponseWrite;
};
export declare class ResponseStatusDetailed {
    'from': Responder;
    /**
    * The message response category.  * `noresponse` - the message was sent but was not replied to * `notmatched` - the message was replied to and the answer didn\'t match any search criteria
    */
    'responseCategory': 'noresponse' | 'notmatched';
    'responseMessage': Response;
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
