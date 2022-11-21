
import { RequestFile } from './models';
import { Activity } from './activity';
import { LinkInner } from './linkInner';

/**
* Example
*/
export class GetActivities200Response {
    /**
    * List of activities
    */
    'activities'?: Array<Activity>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link'?: Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activities",
            "baseName": "activities",
            "type": "Array<Activity>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetActivities200Response.attributeTypeMap;
    }
}

