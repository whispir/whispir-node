
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';


export type DistributionListDetailsWrite = {
}

export class DistributionListDetails {
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
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return DistributionListDetails.attributeTypeMap;
    }
}

