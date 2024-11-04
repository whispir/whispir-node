export type FieldMappingWrite = {
    /**
    * First Name of the Contact. Value of this field is used to map the field within the resource.
    */
    'firstName': string;
    /**
    * Last Name of the Contact. Value of this field is used to map the field within the resource.
    */
    'lastName': string;
    /**
    * The mobile phone number of the Contact. Value of this field is used to map the field within the newly created resource.
    */
    'workMobilePhone1': string;
    'personalMobilePhone1': string;
    'jobTitle': string;
    'companyName': string;

    /**
    * The email address of the Contact. Value of this field is used to map the field within the newly created resource.
    */
    'workEmailAddress1': string;
    /**
    * The country field of the contact. The value of this field is used to map to the field within the newly created contact.
    */
    'workCountry': string;
    /**
    * The timezone field of the contact. The value of this field is used to map to the timezone field within the newly created contact.
    */
    'timezone': string;
};
/**
* Mapping the data column in your resource file to the contact field value
*/
export declare class FieldMapping {
    /**
    * First Name of the Contact. Value of this field is used to map the field within the resource.
    */
    'firstName': string;
    /**
    * Last Name of the Contact. Value of this field is used to map the field within the resource.
    */
    'lastName': string;
    /**
    * The mobile phone number of the Contact. Value of this field is used to map the field within the newly created resource.
    */
    'workMobilePhone1': string;
    'personalMobilePhone1': string;
    'jobTitle': string;
    'companyName': string;
    /**
    * The email address of the Contact. Value of this field is used to map the field within the newly created resource.
    */
    'workEmailAddress1': string;
    /**
    * The country field of the contact. The value of this field is used to map to the field within the newly created contact.
    */
    'workCountry': string;
    /**
    * The timezone field of the contact. The value of this field is used to map to the timezone field within the newly created contact.
    */
    'timezone': string;
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
