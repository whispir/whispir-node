
import { RequestFile } from './models';
import { Scenario, ScenarioWrite } from './scenario';


export type ScenarioCollectionWrite = {
    /**
    * Scenario object
    */
    'scenarios'?: Array<ScenarioWrite>;
}

/**
* List of retrieved scenarios
*/
export class ScenarioCollection {
    /**
    * Scenario object
    */
    'scenarios': Array<Scenario>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "scenarios",
            "baseName": "scenarios",
            "type": "Array<Scenario>"
        }    ];

    static getAttributeTypeMap() {
        return ScenarioCollection.attributeTypeMap;
    }
}

