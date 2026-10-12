
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';


export type DistributionListCollectionDistributionListsInnerWrite = {
    /**
    * Allows you to specify the access type for this DL  Open: anyone can subscribe to this distribution list via the Whispir Contact Portal ByApproval: anyone can subscribe using the Whispir Contact Portal. However, they are not officially on the list until their access is approved Restricted: the distribution list is not visible in the Whispir Contact Portal
    */
    'access'?: string;
    /**
    * Allows you to specify the visibility for this DL  Public: Any user or active contact in any workspace can map themselves to this DL in the Whispir Contact Portal Private: Only users or active contacts in the current workspace can map themselves to this DL
    */
    'visibility'?: string;
}

export class DistributionListCollectionDistributionListsInner {
    /**
    * ID of the distribution list
    */
    'id': string;
    /**
    * Specifies the name of the distribution list. This has to be unique, and should not contain any special characters (except spaces) in it
    */
    'name': string;
    /**
    * Specifies the Message Resource Identifier of the Distribution List in Whispir 
    */
    'mri': string;
    /**
    * Specifies a description for other users to see what this distribution list should be used for. 
    */
    'description': string;
    /**
    * Total number of contacts in a Distribution List 
    */
    'memberCount': string;
    /**
    * Allows you to specify the access type for this DL  Open: anyone can subscribe to this distribution list via the Whispir Contact Portal ByApproval: anyone can subscribe using the Whispir Contact Portal. However, they are not officially on the list until their access is approved Restricted: the distribution list is not visible in the Whispir Contact Portal
    */
    'access': string;
    /**
    * Allows you to specify the visibility for this DL  Public: Any user or active contact in any workspace can map themselves to this DL in the Whispir Contact Portal Private: Only users or active contacts in the current workspace can map themselves to this DL
    */
    'visibility': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
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
            "name": "mri",
            "baseName": "mri",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "memberCount",
            "baseName": "memberCount",
            "type": "string"
        },
        {
            "name": "access",
            "baseName": "access",
            "type": "string"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return DistributionListCollectionDistributionListsInner.attributeTypeMap;
    }
}

