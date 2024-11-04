import { Form, FormWrite } from './form';
import { Link } from './link';
export type EventWrite = {
    /**
    * Specifies the name of the label used for the messages sent under this event. This needs to match with the name of the event templates available
    */
    'eventLabel': string;
    /**
    * Specifies the status of the event. The status can be one of <ul><li>Active</li><li>Resolved<l></ul>Note:The default status is Open.
    */
    'status': 'Open' | 'Active' | 'Resolved';
    /**
    * Event form list
    */
    'eventFormList'?: Array<FormWrite>;
};
/**
* The event object.
*/
export declare class Event {
    /**
    * Id of the event
    */
    'id': string;
    /**
    * Specifies the name of the label used for the messages sent under this event. This needs to match with the name of the event templates available
    */
    'eventLabel': string;
    /**
    * Specifies the status of the event. The status can be one of <ul><li>Active</li><li>Resolved<l></ul>Note:The default status is Open.
    */
    'status': 'Open' | 'Active' | 'Resolved';
    /**
    * Event form list
    */
    'eventFormList': Array<Form>;
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
