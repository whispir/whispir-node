
import { RequestFile } from './models';
import { DistributionListCollectionDistributionListsInner, DistributionListCollectionDistributionListsInnerWrite } from './distributionListCollectionDistributionListsInner';
import { Link, LinkWrite } from './link';


export type DistributionListCollectionWrite = {
    /**
    * List of distribution lists
    */
    'distributionLists'?: Array<DistributionListCollectionDistributionListsInnerWrite>;
}

/**
* list of distribution lists
*/
export class DistributionListCollection {
    /**
    * List of distribution lists
    */
    'distributionLists': Array<DistributionListCollectionDistributionListsInner>;
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
            "name": "distributionLists",
            "baseName": "distributionLists",
            "type": "Array<DistributionListCollectionDistributionListsInner>"
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
        return DistributionListCollection.attributeTypeMap;
    }
}

