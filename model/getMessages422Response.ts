
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type GetMessages422ResponseWrite = {
    /**
    * The summary of the error encountered.
    */
    'errorSummary'?: string;
    /**
    * The detailed description of the error encountered.
    */
    'errorText'?: string;
    /**
    * The additional details describing the error.
    */
    'errorDetail'?: string;
}

/**
* The unprocessable entity response object.
*/
export class GetMessages422Response {
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
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetMessages422Response.attributeTypeMap;
    }
}

