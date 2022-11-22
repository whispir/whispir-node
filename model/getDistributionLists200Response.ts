
import { RequestFile } from './models';
import { GetDistributionLists200ResponseDistributionListsInner, GetDistributionLists200ResponseDistributionListsInnerWrite } from './getDistributionLists200ResponseDistributionListsInner';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type GetDistributionLists200ResponseWrite = {
    /**
    * Either a static or dynamic distribution list
    */
    'distributionLists'?: Array<GetDistributionLists200ResponseDistributionListsInnerWrite>;
}

/**
* list of distribution lists
*/
export class GetDistributionLists200Response {
    /**
    * Either a static or dynamic distribution list
    */
    'distributionLists': Array<GetDistributionLists200ResponseDistributionListsInner>;
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
            "type": "Array<GetDistributionLists200ResponseDistributionListsInner>"
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

