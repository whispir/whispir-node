import { Link } from './link';
import { Template } from './template';
export type TemplateCollectionWrite = {};
/**
* Returns a list of templates
*/
export declare class TemplateCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no message templates available.
    */
    'status': string;
    /**
    * Specifies the name of the message template
    */
    'messagetemplates': Set<Template>;
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
