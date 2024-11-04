export type LinkWrite = {};
/**
* The HATEOAS link object.
*/
export declare class Link {
    /**
    * The Universal Resource Identifier for the related resource.
    */
    'uri': string;
    /**
    * The description of the related resource.
    */
    'rel': string;
    /**
    * The [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) method required to request the related resource.
    */
    'method': string;
    /**
    * The host of the related resource.
    */
    'host': string;
    /**
    * The port of the related resource.
    */
    'port': '-1';
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
