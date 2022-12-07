
import { RequestFile } from './models';
import { DistributionListDetails, DistributionListDetailsWrite } from './distributionListDetails';
import { DistributionListDynamic, DistributionListDynamicWrite } from './distributionListDynamic';
import { DistributionListStatic, DistributionListStaticWrite } from './distributionListStatic';
import { Link, LinkWrite } from './link';


export type DistributionListWrite = {
    /**
    * Specifies the name of the distribution list. This has to be unique, and should not contain any special characters (except spaces) in it
    */
    'name': string;
    /**
    * Specifies a description for other users to see what this distribution list should be used for.
    */
    'description'?: string;
    /**
    * Total number of contacts in a Distribution List
    */
    'memberCount'?: string;
    /**
    * Allows you to specify the access type for this DL  - Open: anyone can subscribe to this distribution list via the Whispir Contact Portal - ByApproval: anyone can subscribe using the Whispir Contact Portal. However, they are not officially on the list until their access is approved - Restricted: the distribution list is not visible in the Whispir Contact Portal
    */
    'access': string;
    /**
    * Allows you to specify the visibility for this DL  - Public: Any user or active contact in any workspace can map themselves to this DL in the Whispir Contact Portal - Private: Only users or active contacts in the current workspace can map themselves to this DL
    */
    'visibility': string;
    /**
    * Comma separated list of Contacts to be associated to this DL. This information can be provided at the time of the DL creation or updated later via a PUT request
    */
    'contactIds'?: string;
    /**
    * Comma separated list of userIds who can manage this DL. This information can be provided at the time of the DL creation or also later updated via a PUT request
    */
    'userIds'?: string;
    /**
    * Comma separated list of Distribution List IDs that can be nested under this DL. This information can be provided at the time of the DL creation or later updated via a PUT request
    */
    'distListIds'?: string;
    /**
    * Allows you to specify the type for this DL  - Static: The contacts on the list don’t change unless you manually add or remove them (unlike a dynamic DL)  NOTE: \"static\" is also the default value for this parameter when this field is omitted
    */
    'type': string;
    /**
    * The value is currently strictly limited to \"contact\"
    */
    'entityType': string;
    /**
    * The array that specify the rules that should be applied on the entityType values to pick the appropriate contacts at the moment of usage [not creation]  Each rule is an object with 3 keys in it. At least one rule must be specified when creating a Dynamic Distribution List  - ruleFilter: contains any of the contact profile elements that are available for searching. For example, division, department, role. More details on the values for this field can be found below [required] - ruleFilterActualName: Contains the matching string to be compared for the DL. More details on the the values for this field can be found below [required] - ruleContent: Contains the matching string to be compared with the contact element for being a part of the DL [required]
    */
    'rules': string;
}

/**
* Either a static or dynamic distribution list
*/
export class DistributionList {
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
    * Allows you to specify the access type for this DL  - Open: anyone can subscribe to this distribution list via the Whispir Contact Portal - ByApproval: anyone can subscribe using the Whispir Contact Portal. However, they are not officially on the list until their access is approved - Restricted: the distribution list is not visible in the Whispir Contact Portal
    */
    'access': string;
    /**
    * Allows you to specify the visibility for this DL  - Public: Any user or active contact in any workspace can map themselves to this DL in the Whispir Contact Portal - Private: Only users or active contacts in the current workspace can map themselves to this DL
    */
    'visibility': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    /**
    * Comma separated list of Distribution List IDs that can be nested under this DL. This information can be provided at the time of the DL creation or later updated via a PUT request
    */
    'distListIds': string;
    /**
    * Details of Contacts included in the Distribution List
    */
    'distlistdetails': Array<DistributionListDetails>;
    /**
    * The value is currently strictly limited to \"contact\"
    */
    'entityType': string;
    /**
    * The array that specify the rules that should be applied on the entityType values to pick the appropriate contacts at the moment of usage [not creation]  Each rule is an object with 3 keys in it. At least one rule must be specified when creating a Dynamic Distribution List  - ruleFilter: contains any of the contact profile elements that are available for searching. For example, division, department, role. More details on the values for this field can be found below [required] - ruleFilterActualName: Contains the matching string to be compared for the DL. More details on the the values for this field can be found below [required] - ruleContent: Contains the matching string to be compared with the contact element for being a part of the DL [required]
    */
    'rules': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
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
        },
        {
            "name": "contactIds",
            "baseName": "contactIds",
            "type": "string"
        },
        {
            "name": "userIds",
            "baseName": "userIds",
            "type": "string"
        },
        {
            "name": "distListIds",
            "baseName": "distListIds",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "distlistdetails",
            "baseName": "distlistdetails",
            "type": "Array<DistributionListDetails>"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "string"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "string"
        }];

    static getAttributeTypeMap() {
        return DistributionList.attributeTypeMap;
    }
}

