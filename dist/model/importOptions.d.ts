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
};
export declare class ImportOptions {
    /**
    * The field mappings
    */
    'fieldMapping': FieldMapping;
    /**
    * The type of contact import that is occurring.
    */
    'importMode': 'replace' | 'duplicate' | 'ignore';
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
