
import { RequestFile } from './models';
import { Scenario } from './scenario';

/**
* List of retrieved scenarios
*/
export class GetScenarios200Response {
    /**
    * Scenario object
    */
    'scenarios'?: Array<Scenario>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "scenarios",
            "baseName": "scenarios",
            "type": "Array<Scenario>"
        }    ];

    static getAttributeTypeMap() {
        return GetScenarios200Response.attributeTypeMap;
    }
}

