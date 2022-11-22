
import { RequestFile } from './models';
import { MessageResponseDetailedMessageresponsesInnerFrom, MessageResponseDetailedMessageresponsesInnerFromWrite } from './messageResponseDetailedMessageresponsesInnerFrom';
import { MessageResponseDetailedMessageresponsesInnerResponseMessage, MessageResponseDetailedMessageresponsesInnerResponseMessageWrite } from './messageResponseDetailedMessageresponsesInnerResponseMessage';


export type MessageResponseDetailedMessageresponsesInnerWrite = {
    'from': MessageResponseDetailedMessageresponsesInnerFromWrite;
    'responseMessage': MessageResponseDetailedMessageresponsesInnerResponseMessageWrite;
}

export class MessageResponseDetailedMessageresponsesInner {
    'from': MessageResponseDetailedMessageresponsesInnerFrom;
    /**
    * The message response category.  * `noresponse` - the message was sent but was not replied to * `notmatched` - the message was replied to and the answer didn\'t match any search criteria
    */
    'responseCategory': 'noresponse' | 'notmatched';
    'responseMessage': MessageResponseDetailedMessageresponsesInnerResponseMessage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "MessageResponseDetailedMessageresponsesInnerFrom"
        },
        {
            "name": "responseCategory",
            "baseName": "responseCategory",
            "type": "string"
        },
        {
            "name": "responseMessage",
            "baseName": "responseMessage",
            "type": "MessageResponseDetailedMessageresponsesInnerResponseMessage"
        }    ];

    static getAttributeTypeMap() {
        return MessageResponseDetailedMessageresponsesInner.attributeTypeMap;
    }
}

