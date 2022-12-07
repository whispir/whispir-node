
import { RequestFile } from './models';
import { ResponseRule, ResponseRuleWrite } from './responseRule';


export type ResponseRuleCollectionWrite = {
}

export class ResponseRuleCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no response rules available.
    */
    'status': string;
    /**
    * The list of response rules
    */
    'responseRules': Array<ResponseRule>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "responseRules",
            "baseName": "responseRules",
            "type": "Array<ResponseRule>"
        }    ];

    static getAttributeTypeMap() {
        return ResponseRuleCollection.attributeTypeMap;
    }
}

