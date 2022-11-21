
import { RequestFile } from './models';
import { CustomListCustomlabellistsInner } from './customListCustomlabellistsInner';
import { LinkInner } from './linkInner';

/**
* A custom list is a predefined list of options that can be inserted into a message or template. A list might be made up of capital city names, days of the week, incident types, business phone numbers and so on. Custom lists make it easy to add information quickly and consistently to your message content.
*/
export class CustomList {
    /**
    * Specifies the unique ID of the list
    */
    'id': string;
    /**
    * Specifies the name of the list
    */
    'name': string;
    /**
    * Specifies the type
    */
    'type': 'INCIDENT' | 'MESSAGE' | 'CONTACT' | 'RSS';
    /**
    * Specifies the creation date of the list
    */
    'createdDate': string;
    /**
    * Specifies the sorting order
    */
    'sortType': 'As Displayed' | 'Ascending' | 'Descending';
    /**
    * Specifies the linked status. When enabled the value selected for one channel is automatically applied on the other channels.
    */
    'linked': 'disabled' | 'enabled';
    /**
    * Contains the individual items that make up this list
    */
    'customlabellists'?: Array<CustomListCustomlabellistsInner>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "string"
        },
        {
            "name": "sortType",
            "baseName": "sortType",
            "type": "string"
        },
        {
            "name": "linked",
            "baseName": "linked",
            "type": "string"
        },
        {
            "name": "customlabellists",
            "baseName": "customlabellists",
            "type": "Array<CustomListCustomlabellistsInner>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return CustomList.attributeTypeMap;
    }
}

