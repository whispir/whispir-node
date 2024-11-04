import { DistributionList, DistributionListWrite } from './distributionList';
import { Link } from './link';
export type DistributionListCollectionWrite = {
    /**
    * List of distribution lists
    */
    'distributionLists'?: Array<DistributionListWrite>;
};
/**
* list of distribution lists
*/
export declare class DistributionListCollection {
    /**
    * List of distribution lists
    */
    'distributionLists': Array<DistributionList>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
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
