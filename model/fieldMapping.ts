
import { RequestFile } from './models';
import { FieldMappingFieldMapping, FieldMappingFieldMappingWrite } from './fieldMappingFieldMapping';


export type FieldMappingWrite = {
    'fieldMapping': FieldMappingFieldMappingWrite;
}

/**
* Mapping the data column in your resource file to the contact field value
*/
export class FieldMapping {
    'fieldMapping': FieldMappingFieldMapping;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldMapping",
            "baseName": "fieldMapping",
            "type": "FieldMappingFieldMapping"
        }    ];

    static getAttributeTypeMap() {
        return FieldMapping.attributeTypeMap;
    }
}

