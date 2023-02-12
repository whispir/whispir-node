
import { RequestFile } from './models';
import { Activity, ActivityWrite } from './activity';
import { Link, LinkWrite } from './link';


export type ActivityCollectionWrite = {
}

/**
* List activities response object
*/
export class ActivityCollection {
    /**
    * List of activities
    */
    'activities': Array<Activity>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

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
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return ActivityCollection.attributeTypeMap;
    }
}

