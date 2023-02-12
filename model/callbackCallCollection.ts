
import { RequestFile } from './models';
import { CallbackCall, CallbackCallWrite } from './callbackCall';
import { Link, LinkWrite } from './link';


export type CallbackCallCollectionWrite = {
    /**
    * A list of callbacks
    */
    'calls'?: Array<CallbackCallWrite>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status'?: string;
}

/**
* List of callback calls
*/
export class CallbackCallCollection {
    /**
    * A list of callbacks
    */
    'calls': Array<CallbackCall>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "calls",
            "baseName": "calls",
            "type": "Array<CallbackCall>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return CallbackCallCollection.attributeTypeMap;
    }
}

