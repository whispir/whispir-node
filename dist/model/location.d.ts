export type LocationWrite = {
    /**
    * The measurement of distance north or south of the Equator, for the contact.
    */
    'latitude'?: number;
    /**
    * The measurement of distance east or west of the prime meridian, for the contact.
    */
    'longitude'?: number;
    /**
    * A description for the location. At least one element of the `locations` array must have a `type` equal to `CurrentLocation`.
    */
    'type'?: string;
};
/**
* The location object.
*/
export declare class Location {
    /**
    * The measurement of distance north or south of the Equator, for the contact.
    */
    'latitude': number;
    /**
    * The measurement of distance east or west of the prime meridian, for the contact.
    */
    'longitude': number;
    /**
    * A description for the location. At least one element of the `locations` array must have a `type` equal to `CurrentLocation`.
    */
    'type': string;
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
