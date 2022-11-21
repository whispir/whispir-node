
import { RequestFile } from './models';
import { CustomList } from './customList';

/**
* List of custom lists
*/
export class GetCustomLists200Response {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * A list of custom lists
    */
    'customlabels': Array<CustomList>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "customlabels",
            "baseName": "customlabels",
            "type": "Array<CustomList>"
        }    ];

    static getAttributeTypeMap() {
        return GetCustomLists200Response.attributeTypeMap;
    }
}

