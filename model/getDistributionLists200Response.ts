
import { RequestFile } from './models';
import { GetDistributionLists200ResponseDistributionLists } from './getDistributionLists200ResponseDistributionLists';
import { LinkInner } from './linkInner';

/**
* list of distribution lists
*/
export class GetDistributionLists200Response {
    'distributionLists': GetDistributionLists200ResponseDistributionLists;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "distributionLists",
            "baseName": "distributionLists",
            "type": "GetDistributionLists200ResponseDistributionLists"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetDistributionLists200Response.attributeTypeMap;
    }
}

