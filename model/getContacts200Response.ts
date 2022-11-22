
import { RequestFile } from './models';
import { Contact, ContactWrite } from './contact';


export type GetContacts200ResponseWrite = {
    /**
    * list of contacts
    */
    'contacts'?: Array<Contact>Write;
}

/**
* List contacts object
*/
export class GetContacts200Response {
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
        return GetContacts200Response.attributeTypeMap;
    }
}

