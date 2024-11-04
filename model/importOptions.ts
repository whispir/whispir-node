
import { FieldMapping, FieldMappingWrite } from './fieldMapping';


export type ImportOptionsWrite = {
     /**
    * The field mappings
    */
     'fieldMapping': FieldMappingWrite;
     /**
     * The type of contact import that is occurring.
     */
     'importMode': 'replace' | 'duplicate' | 'ignore';
}

export class ImportOptions {
    /**
    * The field mappings
    */
    'fieldMapping': FieldMapping;
    /**
    * The type of contact import that is occurring.
    */
    'importMode': 'replace' | 'duplicate' | 'ignore';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldMapping",
            "baseName": "fieldMapping",
            "type": "FieldMapping"
        },
        {
            "name": "importMode",
            "baseName": "importMode",
            "type": "string"
        }    
    ];

    static getAttributeTypeMap() {
        return ImportOptions.attributeTypeMap;
    }
}