import { ResponseRule } from './responseRule';
export type ResponseRuleCollectionWrite = {};
export declare class ResponseRuleCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no response rules available.
    */
    'status': string;
    /**
    * The list of response rules
    */
    'responseRules': Array<ResponseRule>;
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
