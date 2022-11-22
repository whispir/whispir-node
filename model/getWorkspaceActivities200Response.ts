
import { RequestFile } from './models';
import { Activity, ActivityWrite } from './activity';


export type GetWorkspaceActivities200ResponseWrite = {
}

export class GetWorkspaceActivities200Response {
    /**
    * List of activities
    */
    'activities': Array<Activity>;
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no activities available.
    */
    'status': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activities",
            "baseName": "activities",
            "type": "Array<Activity>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetWorkspaceActivities200Response.attributeTypeMap;
    }
}

