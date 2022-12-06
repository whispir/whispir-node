
import { RequestFile } from './models';
import { MessageResponseDetailedStatus, MessageResponseDetailedStatusWrite } from './messageResponseDetailedStatus';
import { MessageResponseDetailedStatusResponseMessage, MessageResponseDetailedStatusResponseMessageWrite } from './messageResponseDetailedStatusResponseMessage';


export type MessageResponseDetailedStatusFromWrite = {
    'from': MessageResponseDetailedStatusWrite;
    'responseMessage': MessageResponseDetailedStatusResponseMessageWrite;
}

export class MessageResponseDetailedStatusFrom {
    'from': MessageResponseDetailedStatus;
    /**
    * The message response category.  * `noresponse` - the message was sent but was not replied to * `notmatched` - the message was replied to and the answer didn\'t match any search criteria
    */
    'responseCategory': 'noresponse' | 'notmatched';
    'responseMessage': MessageResponseDetailedStatusResponseMessage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "MessageResponseDetailedStatus"
        },
        {
            "name": "responseCategory",
            "baseName": "responseCategory",
            "type": "string"
        },
        {
            "name": "responseMessage",
            "baseName": "responseMessage",
            "type": "MessageResponseDetailedStatusResponseMessage"
        }    ];

    static getAttributeTypeMap() {
        return MessageResponseDetailedStatusFrom.attributeTypeMap;
    }
}

