import { ImportOptions, ImportOptionsWrite } from './importOptions';
export type ImportWrite = {
    /**
    * The resource identifier returned from the POST to /resources. Resource referred to must be a valid CSV, XML, or JSON file.
    */
    'resourceId': string;
    /**
    * This defines the resource that will be created through this import process.   *\'contact\'* is the only supported *importType* at this stage.
    */
    'importType': string;
    'importOptions': ImportOptionsWrite;
};
/**
* Import model object
*/
export declare class Import {
    /**
    * The resource identifier returned from the POST to /resources. Resource referred to must be a valid CSV, XML, or JSON file.
    */
    'resourceId': string;
    /**
    * This defines the resource that will be created through this import process.   *\'contact\'* is the only supported *importType* at this stage.
    */
    'importType': string;
    'importOptions': ImportOptions;
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
