
import { RequestFile } from './models';
import { GetTemplates200ResponseMessagetemplatesInner } from './getTemplates200ResponseMessagetemplatesInner';

/**
* Returns a list of templates
*/
export class GetTemplates200Response {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no message templates available.
    */
    'status': string;
    /**
    * Specifies the name of the message template
    */
    'messagetemplates': Set<GetTemplates200ResponseMessagetemplatesInner>;
    /**
    * Provides a list of URLs that can be used to manipulate or access the message template. This following attribute may return an empty array.
    */
    'link': Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "messagetemplates",
            "baseName": "messagetemplates",
            "type": "Set<GetTemplates200ResponseMessagetemplatesInner>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return GetTemplates200Response.attributeTypeMap;
    }
}

