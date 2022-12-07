
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';


export type MessageTemplateShortWrite = {
}

export class MessageTemplateShort {
    /**
    * Specifies the name of the message template
    */
    'messageTemplateName': string;
    /**
    * Specifies the description of the message template, so that anyone can understand its purpose
    */
    'messageTemplateDescription': string;
    /**
    * Specifies the template id needed for all the API Operations
    */
    'id': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageTemplateName",
            "baseName": "messageTemplateName",
            "type": "string"
        },
        {
            "name": "messageTemplateDescription",
            "baseName": "messageTemplateDescription",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return MessageTemplateShort.attributeTypeMap;
    }
}

