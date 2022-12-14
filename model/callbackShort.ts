
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';


export type CallbackShortWrite = {
}

export class CallbackShort {
    /**
    * The id of the callback.   This is the value that should be passed when referring to the callback using the API endpoints
    */
    'id': string;
    /**
    * The name of the callback.   This is the value that should be passed in the message payload for triggering the callbacks
    */
    'name': string;
    /**
    * The destination url on your servers that Whispir should reach out to.
    */
    'url': string;
    /**
    * If retriesEnabled is false, then Whispir will only try once and when a failure (non 200 OK response code) happens, it will not retry again  When true, it will try every 5 mins for a maximum of 10 times.  Refer to callback calls for more details on retrieving the SUCCESS and FAIL logs
    */
    'retriesEnabled': boolean;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

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
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "retriesEnabled",
            "baseName": "retriesEnabled",
            "type": "boolean"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return CallbackShort.attributeTypeMap;
    }
}

