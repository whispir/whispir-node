
import { RequestFile } from './models';
import { TemplatePattern, TemplatePatternWrite } from './templatePattern';


export type ResponseRuleWrite = {
    /**
    * Specifies the name of the response rule
    */
    'name': string;
    /**
    * Specifies the description of the response rule for others to understand its purpose
    */
    'description'?: string;
    'responseTemplatePatterns': TemplatePatternWrite;
}

/**
* Response Rules are useful when your Templates require the end-users to select among known responses [for example, Yes/No, Accept/Decline or ranking something from 1 to 5]  Using Response Rules in combination with Templates allows you to automatically categorise any response to these messages into different response groups for reporting purposes
*/
export class ResponseRule {
    /**
    * Specifies the name of the response rule
    */
    'name': string;
    /**
    * Specifies the description of the response rule for others to understand its purpose
    */
    'description': string;
    'responseTemplatePatterns': TemplatePattern;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "responseTemplatePatterns",
            "baseName": "responseTemplatePatterns",
            "type": "TemplatePattern"
        }    ];

    static getAttributeTypeMap() {
        return ResponseRule.attributeTypeMap;
    }
}

