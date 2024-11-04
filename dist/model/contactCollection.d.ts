import { Contact, ContactWrite } from './contact';
export type ContactCollectionWrite = {
    /**
    * list of contacts
    */
    'contacts'?: Array<ContactWrite>;
};
/**
* List contacts object
*/
export declare class ContactCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * list of contacts
    */
    'contacts': Array<Contact>;
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
