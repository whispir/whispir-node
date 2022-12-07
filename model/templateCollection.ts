
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';
import { MessageTemplateShort, MessageTemplateShortWrite } from './messageTemplateShort';


export type TemplateCollectionWrite = {
}

/**
* Returns a list of templates
*/
export class TemplateCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no message templates available.
    */
    'status': string;
    /**
    * Specifies the name of the message template
    */
    'messagetemplates': Set<MessageTemplateShort>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "messagetemplates",
            "baseName": "messagetemplates",
            "type": "Set<MessageTemplateShort>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return TemplateCollection.attributeTypeMap;
    }
}

