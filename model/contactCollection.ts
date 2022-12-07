
import { RequestFile } from './models';
import { Contact, ContactWrite } from './contact';


export type ContactCollectionWrite = {
    /**
    * list of contacts
    */
    'contacts'?: Array<ContactWrite>;
}

/**
* List contacts object
*/
export class ContactCollection {
    /**
    * Provides the total number of records fetched. This attribute may return \"No records found\" when there are no callbacks available.
    */
    'status': string;
    /**
    * list of contacts
    */
    'contacts': Array<Contact>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<Contact>"
        }    ];

    static getAttributeTypeMap() {
        return ContactCollection.attributeTypeMap;
    }
}

