
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type GetMessages401ResponseWrite = {
    /**
    * The summary of the error encountered.
    */
    'errorSummary': string;
    /**
    * The detailed description of the error encountered.
    */
    'errorText': string;
    /**
    * The additional details describing the error.
    */
    'errorDetail': string;
}

/**
* The unauthorised response object.
*/
export class GetMessages401Response {
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'links': Array<LinkInner>;
    /**
    * The summary of the error encountered.
    */
    'errorSummary': string;
    /**
    * The detailed description of the error encountered.
    */
    'errorText': string;
    /**
    * The additional details describing the error.
    */
    'errorDetail': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<LinkInner>"
        },
        {
            "name": "errorSummary",
            "baseName": "errorSummary",
            "type": "string"
        },
        {
            "name": "errorText",
            "baseName": "errorText",
            "type": "string"
        },
        {
            "name": "errorDetail",
            "baseName": "errorDetail",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetMessages401Response.attributeTypeMap;
    }
}

