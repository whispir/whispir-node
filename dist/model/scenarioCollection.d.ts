import { Scenario, ScenarioWrite } from './scenario';
export type ScenarioCollectionWrite = {
    /**
    * Scenario object
    */
    'scenarios'?: Array<ScenarioWrite>;
};
/**
* List of retrieved scenarios
*/
export declare class ScenarioCollection {
    /**
    * Scenario object
    */
    'scenarios': Array<Scenario>;
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
