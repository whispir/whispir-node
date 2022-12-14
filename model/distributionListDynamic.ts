
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';


export type DistributionListDynamicWrite = {
    /**
    * Specifies the name of the distribution list. This has to be unique, and should not contain any special characters (except spaces) in it
    */
    'name': string;
    /**
    * Specifies a description for other users to see what this distribution list should be used for.
    */
    'description'?: string;
    /**
    * Allows you to specify the access type for this DL  - Open: anyone can subscribe to this distribution list via the Whispir Contact Portal - ByApproval: anyone can subscribe using the Whispir Contact Portal. However, they are not officially on the list until their access is approved - Restricted: the distribution list is not visible in the Whispir Contact Portal
    */
    'access': string;
    /**
    * Allows you to specify the type for this DL  - Static: The contacts on the list don’t change unless you manually add or remove them (unlike a dynamic DL)  NOTE: \"static\" is also the default value for this parameter when this field is omitted
    */
    'type': string;
    /**
    * The value is currently strictly limited to \"contact\"
    */
    'entityType': string;
    /**
    * Allows you to specify the visibility for this DL  - Public: Any user or active contact in any workspace can map themselves to this DL in the Whispir Contact Portal - Private: Only users or active contacts in the current workspace can map themselves to this DL
    */
    'visibility': string;
    /**
    * The array that specify the rules that should be applied on the entityType values to pick the appropriate contacts at the moment of usage [not creation]  Each rule is an object with 3 keys in it. At least one rule must be specified when creating a Dynamic Distribution List  - ruleFilter: contains any of the contact profile elements that are available for searching. For example, division, department, role. More details on the values for this field can be found below [required] - ruleFilterActualName: Contains the matching string to be compared for the DL. More details on the the values for this field can be found below [required] - ruleContent: Contains the matching string to be compared with the contact element for being a part of the DL [required]
    */
    'rules': string;
}

/**
* Dynamic Distribution Lists are lists that are updated based on rules to automatically determine and update the members. For this reason - unlike the Static Distribution Lists - we don\'t need to specify any members because only the rule[s] will determine the members of a Dynamic Distribution List
*/
export class DistributionListDynamic {
    /**
    * Specifies the name of the distribution list. This has to be unique, and should not contain any special characters (except spaces) in it
    */
    'name': string;
    /**
    * Specifies a description for other users to see what this distribution list should be used for.
    */
    'description': string;
    /**
    * Allows you to specify the access type for this DL  - Open: anyone can subscribe to this distribution list via the Whispir Contact Portal - ByApproval: anyone can subscribe using the Whispir Contact Portal. However, they are not officially on the list until their access is approved - Restricted: the distribution list is not visible in the Whispir Contact Portal
    */
    'access': string;
    /**
    * The value is currently strictly limited to \"contact\"
    */
    'entityType': string;
    /**
    * Allows you to specify the visibility for this DL  - Public: Any user or active contact in any workspace can map themselves to this DL in the Whispir Contact Portal - Private: Only users or active contacts in the current workspace can map themselves to this DL
    */
    'visibility': string;
    /**
    * The array that specify the rules that should be applied on the entityType values to pick the appropriate contacts at the moment of usage [not creation]  Each rule is an object with 3 keys in it. At least one rule must be specified when creating a Dynamic Distribution List  - ruleFilter: contains any of the contact profile elements that are available for searching. For example, division, department, role. More details on the values for this field can be found below [required] - ruleFilterActualName: Contains the matching string to be compared for the DL. More details on the the values for this field can be found below [required] - ruleContent: Contains the matching string to be compared with the contact element for being a part of the DL [required]
    */
    'rules': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "access",
            "baseName": "access",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "string"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "string"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return DistributionListDynamic.attributeTypeMap;
    }
}

