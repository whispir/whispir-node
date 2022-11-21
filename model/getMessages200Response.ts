
import { RequestFile } from './models';
import { LinkInner } from './linkInner';
import { Message } from './message';

/**
* The list messages response object.
*/
export class GetMessages200Response {
    /**
    * The list of retrieved messages.
    */
    'messages': Set<Message>;
    /**
    * The status of the list request.
    */
    'status': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Set<Message>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetMessages200Response.attributeTypeMap;
    }
}

