
import { RequestFile } from './models';
import { CallbackShort, CallbackShortWrite } from './callbackShort';
import { Link, LinkWrite } from './link';


export type CallbackCollectionWrite = {
}

/**
* List of callbacks
*/
export class CallbackCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * A list of callbacks
    */
    'callbacks': Set<CallbackShort>;
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
            "name": "callbacks",
            "baseName": "callbacks",
            "type": "Set<CallbackShort>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCollection.attributeTypeMap;
    }
}

