
import { RequestFile } from './models';


export type Object3Write = {
    /**
    * Longitude value of the location
    */
    'longitude'?: number;
    /**
    * Latitude value of the location
    */
    'latitude'?: number;
    /**
    * Name of the location
    */
    'name'?: string;
    /**
    * Address of the location
    */
    'address'?: string;
}

/**
* “Longitude”, \"latitude\", \"name\", and \"address\"
*/
export class Object3 {
    /**
    * Longitude value of the location
    */
    'longitude': number;
    /**
    * Latitude value of the location
    */
    'latitude': number;
    /**
    * Name of the location
    */
    'name': string;
    /**
    * Address of the location
    */
    'address': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Object3.attributeTypeMap;
    }
}

