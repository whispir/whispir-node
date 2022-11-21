
import { RequestFile } from './models';
import { LinkInner } from './linkInner';
import { MessageStatusMessageStatusesInnerCategoriesInner } from './messageStatusMessageStatusesInnerCategoriesInner';
import { MessageStatusMessageStatusesInnerStatusInner } from './messageStatusMessageStatusesInnerStatusInner';

export class MessageStatusMessageStatusesInner {
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;
    /**
    * Present when `view` is `summary`.
    */
    'categories'?: Set<MessageStatusMessageStatusesInnerCategoriesInner>;
    /**
    * Present when `view` is `detailed`.
    */
    'name'?: string;
    /**
    * Present when `view` is `detailed`.
    */
    'info'?: string;
    /**
    * Present when `view` is `detailed`.
    */
    'status'?: Array<MessageStatusMessageStatusesInnerStatusInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Set<MessageStatusMessageStatusesInnerCategoriesInner>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Array<MessageStatusMessageStatusesInnerStatusInner>"
        }    ];

    static getAttributeTypeMap() {
        return MessageStatusMessageStatusesInner.attributeTypeMap;
    }
}

