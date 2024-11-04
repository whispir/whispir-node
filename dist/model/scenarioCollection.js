"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioCollection = void 0;
/**
* List of retrieved scenarios
*/
class ScenarioCollection {
    static getAttributeTypeMap() {
        return ScenarioCollection.attributeTypeMap;
    }
}
exports.ScenarioCollection = ScenarioCollection;
ScenarioCollection.discriminator = undefined;
ScenarioCollection.attributeTypeMap = [
    {
        "name": "scenarios",
        "baseName": "scenarios",
        "type": "Array<Scenario>"
    }
];
