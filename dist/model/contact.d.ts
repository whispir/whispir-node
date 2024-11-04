import { Link } from './link';
import { Location, LocationWrite } from './location';
import { MessagingOption, MessagingOptionWrite } from './messagingOption';
export type ContactWrite = {
    /**
    * The first name of the contact.
    */
    'firstName': string;
    /**
    * The last name of the contact.
    */
    'lastName': string;
    /**
    * The primary work mobile number of the contact.
    */
    'workMobilePhone1': string;
    /**
    * The primary work mobile number of the contact.
    */
    'personalMobilePhone1': string;
    /**
    * The primary work email address of the contact.
    */
    'workEmailAddress1': string;
    /**
    * The work country of the contact.
    */
    'workCountry': string;
    /**
    * The time zone in which the contact lives in. Values are relative to GMT.  Supported values are:  * Offset from GMT in the format `+/-NN`. For example, `+10`. * Worldwide time zone in the format `Country/City`. For example, `Australia/Melbourne`  See the list of [worldwide time zones](https://en.wikipedia.org/wiki/List_of_time_zones_by_country).
    */
    'timezone': string;
    /**
    * The title to address the contact with.
    */
    'title'?: string;
    /**
    * The secondary work mobile number of the contact.
    */
    'workMobilePhone2'?: string;
    /**
    * The secondary work email address of the contact.
    */
    'workEmailAddress2'?: string;
    /**
    * The primary work phone number area code of the contact.
    */
    'workPhoneAreaCode1'?: string;
    /**
    * The primary work phone number of the contact.
    */
    'workPhone1'?: string;
    /**
    * The secondary work phone number area code of the contact.
    */
    'workPhoneAreaCode2'?: string;
    /**
    * The secondary work phone number of the contact.
    */
    'workPhone2'?: string;
    /**
    * The work fax number area code of the contact.
    */
    'workFaxAreaCode1'?: string;
    /**
    * The work fax number of the contact.
    */
    'workFax1'?: string;
    /**
    * The work satellite phone number of the contact.
    */
    'workSatellitePhone'?: string;
    /**
    * The work other phone number of the contact.
    */
    'workOtherPhone'?: string;
    /**
    * The first work address line of the contact.
    */
    'workAddress1'?: string;
    /**
    * The second work address line of the contact.
    */
    'workAddress2'?: string;
    /**
    * The work address suburb of the contact.
    */
    'workSuburb'?: string;
    /**
    * The work address state of the contact.
    */
    'workState'?: string;
    /**
    * The work address post code of the contact.
    */
    'workPostCode'?: string;
    /**
    * The first work postal address line of the contact.
    */
    'workPostalAddress1'?: string;
    /**
    * The second work postal address line of the contact.
    */
    'workPostalAddress2'?: string;
    /**
    * The work postal address suburb of the contact.
    */
    'workPostalSuburb'?: string;
    /**
    * The work postal address state of the contact.
    */
    'workPostalState'?: string;
    /**
    * The work postal address post code of the contact.
    */
    'workPostalPostCode'?: string;
    /**
    * The primary personal email address of the contact.
    */
    'personalEmailAddress1'?: string;
    /**
    * The secondary personal email address of the contact.
    */
    'personalEmailAddress2'?: string;
    /**
    * The first personal address line of the contact.
    */
    'personalAddress1'?: string;
    /**
    * The second personal address line of the contact.
    */
    'personalAddress2'?: string;
    /**
    * The personal address suburb of the contact.
    */
    'personalSuburb'?: string;
    /**
    * The personal address state of the contact.
    */
    'personalState'?: string;
    /**
    * The personal address post code of the contact.
    */
    'personalPostCode'?: string;
    /**
    * The personal address country of the contact.
    */
    'personalCountry'?: string;
    /**
    * The primary personal phone number area code of the contact.
    */
    'personalPhoneAreaCode1'?: string;
    /**
    * The primary personal phone number of the contact.
    */
    'personalPhone1'?: string;
    /**
    * The secondary personal phone number area code of the contact.
    */
    'personalPhoneAreaCode2'?: string;
    /**
    * The secondary personal phone number of the contact.
    */
    'personalPhone2'?: string;
    /**
    * The personal fax number area code of the contact.
    */
    'personalFaxAreaCode1'?: string;
    /**
    * The personal fax number of the contact.
    */
    'personalFax1'?: string;
    /**
    * The other phone number area code of the contact.
    */
    'otherPhoneAreaCode1'?: string;
    /**
    * The other phone number of the contact.
    */
    'otherPhone1'?: string;
    /**
    * The other mobile number of the contact.
    */
    'otherMobile'?: string;
    /**
    * The other first name of the contact.
    */
    'otherFirstName'?: string;
    /**
    * The other last name of the contact.
    */
    'otherLastName'?: string;
    /**
    * The other title to address the contact with.
    */
    'otherTitle'?: string;
    /**
    * The validity status of the contact, either `A`ctive or `D`isabled.
    */
    'status'?: 'A' | 'D';
    /**
    * The company name of the contact.
    */
    'companyName'?: string;
    /**
    * The job title of the contact.
    */
    'jobTitle'?: string;
    /**
    * The division in the company to which the contact is associated.
    */
    'division'?: string;
    /**
    * The business unit in the company to which the contact is associated.
    */
    'businessUnit'?: string;
    /**
    * The department in the company to which the contact is associated.
    */
    'department'?: string;
    /**
    * The primary team name of the contact.
    */
    'teamName1'?: string;
    /**
    * The secondary team name of the contact.
    */
    'teamName2'?: string;
    /**
    * The primary role of the contact.
    */
    'role1'?: string;
    /**
    * The secondary role of the contact.
    */
    'role2'?: string;
    /**
    * The locations for the contact.
    */
    'locations'?: Array<LocationWrite>;
    /**
    * The message channel options for the contact.
    */
    'messagingoptions'?: Array<MessagingOptionWrite>;
};
/**
* The contact object.
*/
export declare class Contact {
    /**
    * The first name of the contact.
    */
    'firstName': string;
    /**
    * The last name of the contact.
    */
    'lastName': string;
    /**
    * The primary work mobile number of the contact.
    */
    'workMobilePhone1': string;
    'personalMobilePhone1': string;
    /**
    * The primary work email address of the contact.
    */
    'workEmailAddress1': string;
    /**
    * The work country of the contact.
    */
    'workCountry': string;
    /**
    * The time zone in which the contact lives in. Values are relative to GMT.  Supported values are:  * Offset from GMT in the format `+/-NN`. For example, `+10`. * Worldwide time zone in the format `Country/City`. For example, `Australia/Melbourne`  See the list of [worldwide time zones](https://en.wikipedia.org/wiki/List_of_time_zones_by_country).
    */
    'timezone': string;
    /**
    * The title to address the contact with.
    */
    'title': string;
    /**
    * The secondary work mobile number of the contact.
    */
    'workMobilePhone2': string;
    /**
    * The secondary work email address of the contact.
    */
    'workEmailAddress2': string;
    /**
    * The primary work phone number area code of the contact.
    */
    'workPhoneAreaCode1': string;
    /**
    * The primary work phone number of the contact.
    */
    'workPhone1': string;
    /**
    * The secondary work phone number area code of the contact.
    */
    'workPhoneAreaCode2': string;
    /**
    * The secondary work phone number of the contact.
    */
    'workPhone2': string;
    /**
    * The work fax number area code of the contact.
    */
    'workFaxAreaCode1': string;
    /**
    * The work fax number of the contact.
    */
    'workFax1': string;
    /**
    * The work satellite phone number of the contact.
    */
    'workSatellitePhone': string;
    /**
    * The work other phone number of the contact.
    */
    'workOtherPhone': string;
    /**
    * The first work address line of the contact.
    */
    'workAddress1': string;
    /**
    * The second work address line of the contact.
    */
    'workAddress2': string;
    /**
    * The work address suburb of the contact.
    */
    'workSuburb': string;
    /**
    * The work address state of the contact.
    */
    'workState': string;
    /**
    * The work address post code of the contact.
    */
    'workPostCode': string;
    /**
    * The first work postal address line of the contact.
    */
    'workPostalAddress1': string;
    /**
    * The second work postal address line of the contact.
    */
    'workPostalAddress2': string;
    /**
    * The work postal address suburb of the contact.
    */
    'workPostalSuburb': string;
    /**
    * The work postal address state of the contact.
    */
    'workPostalState': string;
    /**
    * The work postal address post code of the contact.
    */
    'workPostalPostCode': string;
    /**
    * The primary personal email address of the contact.
    */
    'personalEmailAddress1': string;
    /**
    * The secondary personal email address of the contact.
    */
    'personalEmailAddress2': string;
    /**
    * The first personal address line of the contact.
    */
    'personalAddress1': string;
    /**
    * The second personal address line of the contact.
    */
    'personalAddress2': string;
    /**
    * The personal address suburb of the contact.
    */
    'personalSuburb': string;
    /**
    * The personal address state of the contact.
    */
    'personalState': string;
    /**
    * The personal address post code of the contact.
    */
    'personalPostCode': string;
    /**
    * The personal address country of the contact.
    */
    'personalCountry': string;
    /**
    * The primary personal phone number area code of the contact.
    */
    'personalPhoneAreaCode1': string;
    /**
    * The primary personal phone number of the contact.
    */
    'personalPhone1': string;
    /**
    * The secondary personal phone number area code of the contact.
    */
    'personalPhoneAreaCode2': string;
    /**
    * The secondary personal phone number of the contact.
    */
    'personalPhone2': string;
    /**
    * The personal fax number area code of the contact.
    */
    'personalFaxAreaCode1': string;
    /**
    * The personal fax number of the contact.
    */
    'personalFax1': string;
    /**
    * The other phone number area code of the contact.
    */
    'otherPhoneAreaCode1': string;
    /**
    * The other phone number of the contact.
    */
    'otherPhone1': string;
    /**
    * The other mobile number of the contact.
    */
    'otherMobile': string;
    /**
    * The other first name of the contact.
    */
    'otherFirstName': string;
    /**
    * The other last name of the contact.
    */
    'otherLastName': string;
    /**
    * The other title to address the contact with.
    */
    'otherTitle': string;
    /**
    * The validity status of the contact, either `A`ctive or `D`isabled.
    */
    'status': 'A' | 'D';
    /**
    * The company name of the contact.
    */
    'companyName': string;
    /**
    * The job title of the contact.
    */
    'jobTitle': string;
    /**
    * The division in the company to which the contact is associated.
    */
    'division': string;
    /**
    * The business unit in the company to which the contact is associated.
    */
    'businessUnit': string;
    /**
    * The department in the company to which the contact is associated.
    */
    'department': string;
    /**
    * The primary team name of the contact.
    */
    'teamName1': string;
    /**
    * The secondary team name of the contact.
    */
    'teamName2': string;
    /**
    * The primary role of the contact.
    */
    'role1': string;
    /**
    * The secondary role of the contact.
    */
    'role2': string;
    /**
    * The locations for the contact.
    */
    'locations': Array<Location>;
    /**
    * The message channel options for the contact.
    */
    'messagingoptions': Array<MessagingOption>;
    /**
    * - PROJECT - for Contacts stored in a User-defined workspace - COMPANY - for Contacts stored in the default workspace
    */
    'type': 'PROJECT' | 'COMPANY';
    /**
    * Specifies the Message Resource Identifier of the Contact in Whispir
    */
    'mri': string;
    /**
    * Specifies the devices associated to this contact. See Contact Devices for more details about it
    */
    'devices': Array<object>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    /**
    * Last Modified data and time
    */
    'lastModifiedTime': string;
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
