import { Link } from './link';
export type DistributionListContactsWrite = {};
export declare class DistributionListContacts {
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
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
