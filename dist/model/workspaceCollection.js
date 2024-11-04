"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCollection = void 0;
/**
* List of workspaces
*/
class WorkspaceCollection {
    static getAttributeTypeMap() {
        return WorkspaceCollection.attributeTypeMap;
    }
}
exports.WorkspaceCollection = WorkspaceCollection;
WorkspaceCollection.discriminator = undefined;
WorkspaceCollection.attributeTypeMap = [
    {
        "name": "workspaces",
        "baseName": "workspaces",
        "type": "Array<Workspace>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
