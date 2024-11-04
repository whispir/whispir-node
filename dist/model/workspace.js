"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspace = void 0;
/**
* Workspaces allow application developers to create new work areas for the varying use cases of their application. For example they can be associated to the different business units of a company, so to silo the data of the different departments. In fact, the information, assets, contacts and actions performed in a workspace can’t be accessed from another one. This allows the applications to be independent and audited effectively with proper permissions and keys.  Each of these work areas provides different functionalities - such as creating messages, executing scenarios or viewing distribution lists - and can be governed by user permissions. Users can be assigned access to these workspaces to restrict the control of information as needed.  Every account on creation is given a default workspace called \"My Company\" but it is possible to create multiple workspaces suited for each application need. There is no limit on the number of workspaces.
*/
class Workspace {
    static getAttributeTypeMap() {
        return Workspace.attributeTypeMap;
    }
}
exports.Workspace = Workspace;
Workspace.discriminator = undefined;
Workspace.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "projectName",
        "baseName": "projectName",
        "type": "string"
    },
    {
        "name": "projectNumber",
        "baseName": "projectNumber",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "billingcostcentre",
        "baseName": "billingcostcentre",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "Array<Link>"
    }
];
