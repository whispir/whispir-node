
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type DistributionlistDistlistdetailsInnerWrite = {
}

export class DistributionlistDistlistdetailsInner {
    /**
    * Id of contact
    */
    'id': string;
    /**
    * Name of Contact
    */
    'name': string;
    /**
    * Type of Contact
    */
    'type': string;
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
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return DistributionlistDistlistdetailsInner.attributeTypeMap;
    }
}

