
import { RequestFile } from './models';
import { FieldMapping } from './fieldMapping';

/**
* Import model object
*/
export class Import {
    /**
    * The resource identifier returned from the POST to /resources. Resource referred to must be a valid CSV, XML, or JSON file.
    */
    'resourceId': string;
    /**
    * This defines the resource that will be created through this import process.   *\'contact\'* is the only supported *importType* at this stage.
    */
    'importType': string;
    'importOptions': FieldMapping;
    /**
    * The type of contact import that is occurring.
    */
    'importMode': 'replace' | 'duplicate' | 'ignore';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string"
        },
        {
            "name": "importType",
            "baseName": "importType",
            "type": "string"
        },
        {
            "name": "importOptions",
            "baseName": "importOptions",
            "type": "FieldMapping"
        },
        {
            "name": "importMode",
            "baseName": "importMode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Import.attributeTypeMap;
    }
}

