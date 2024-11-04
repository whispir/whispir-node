import { Link } from './link';
export type ActivityWrite = {
    /**
    *  The username of the person who performed this activity. This will usually be the API user invoking the creation.
    */
    'user'?: string;
    /**
    * The date and time of the activity in the format:dd/mm/yy hh:mm. This will be defaulted to the time at which this activity is created.
    */
    'time'?: string;
    /**
    * Specifies the action performed during this activity.
    */
    'action'?: 'Create' | 'Update' | 'Move' | 'Copy' | 'Draft' | 'Send' | 'Modified' | 'Delete' | 'Contact Import File' | 'Login' | 'Approve' | 'Reject' | 'Dispatch' | 'Register' | 'Accept' | 'Closed' | 'Map' | 'Un-map' | 'Logout';
    /**
    * The description of the activity. This is a free text that details about the activity.
    */
    'description'?: string;
    /**
    * Specifies the status of the activity.
    */
    'status'?: string;
    /**
    * Specifies the module to which this activity belongs to.
    */
    'module'?: 'System' | 'Message' | 'Scheduled Message' | 'User' | 'Contact' | 'Distribution List' | 'Template' | 'Workspace' | 'Event' | 'WebService' | 'Settings' | 'Conversation' | 'Gateway' | 'Workspace Mapping' | 'Folders' | 'Team' | 'RSS' | 'API Mapping' | 'Asset' | 'Instruction';
    /**
    * The workspace in which this activity is performed. This will usually be the API user’s default workspace
    */
    'workspaceName'?: string;
    /**
    * Fullname of the user
    */
    'fullname'?: string;
};
/**
* Activities are all the individual changes, tasks, calls, messages and so on performed in a given company workspace.
*/
export declare class Activity {
    /**
    *  The username of the person who performed this activity. This will usually be the API user invoking the creation.
    */
    'user': string;
    /**
    * The date and time of the activity in the format:dd/mm/yy hh:mm. This will be defaulted to the time at which this activity is created.
    */
    'time': string;
    /**
    * Specifies the action performed during this activity.
    */
    'action': 'Create' | 'Update' | 'Move' | 'Copy' | 'Draft' | 'Send' | 'Modified' | 'Delete' | 'Contact Import File' | 'Login' | 'Approve' | 'Reject' | 'Dispatch' | 'Register' | 'Accept' | 'Closed' | 'Map' | 'Un-map' | 'Logout';
    /**
    * The description of the activity. This is a free text that details about the activity.
    */
    'description': string;
    /**
    * Specifies the status of the activity.
    */
    'status': string;
    /**
    * Specifies the module to which this activity belongs to.
    */
    'module': 'System' | 'Message' | 'Scheduled Message' | 'User' | 'Contact' | 'Distribution List' | 'Template' | 'Workspace' | 'Event' | 'WebService' | 'Settings' | 'Conversation' | 'Gateway' | 'Workspace Mapping' | 'Folders' | 'Team' | 'RSS' | 'API Mapping' | 'Asset' | 'Instruction';
    /**
    * The workspace in which this activity is performed. This will usually be the API user’s default workspace
    */
    'workspaceName': string;
    /**
    * Fullname of the user
    */
    'fullname': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
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
