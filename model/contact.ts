
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';
import { LocationsInner, LocationsInnerWrite } from './locationsInner';
import { MessagingoptionsInner, MessagingoptionsInnerWrite } from './messagingoptionsInner';


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
    'locations'?: Array<LocationsInnerWrite>;
    /**
    * The message channel options for the contact.
    */
    'messagingoptions'?: Array<MessagingoptionsInnerWrite>;
}

/**
* The contact object.
*/
export class Contact {
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
    'locations': Array<LocationsInner>;
    /**
    * The message channel options for the contact.
    */
    'messagingoptions': Array<MessagingoptionsInner>;
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
    'devices': Array<any>;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;
    /**
    * Last Modified data and time
    */
    'lastModifiedTime': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "workMobilePhone1",
            "baseName": "workMobilePhone1",
            "type": "string"
        },
        {
            "name": "workEmailAddress1",
            "baseName": "workEmailAddress1",
            "type": "string"
        },
        {
            "name": "workCountry",
            "baseName": "workCountry",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "workMobilePhone2",
            "baseName": "workMobilePhone2",
            "type": "string"
        },
        {
            "name": "workEmailAddress2",
            "baseName": "workEmailAddress2",
            "type": "string"
        },
        {
            "name": "workPhoneAreaCode1",
            "baseName": "workPhoneAreaCode1",
            "type": "string"
        },
        {
            "name": "workPhone1",
            "baseName": "workPhone1",
            "type": "string"
        },
        {
            "name": "workPhoneAreaCode2",
            "baseName": "workPhoneAreaCode2",
            "type": "string"
        },
        {
            "name": "workPhone2",
            "baseName": "workPhone2",
            "type": "string"
        },
        {
            "name": "workFaxAreaCode1",
            "baseName": "workFaxAreaCode1",
            "type": "string"
        },
        {
            "name": "workFax1",
            "baseName": "workFax1",
            "type": "string"
        },
        {
            "name": "workSatellitePhone",
            "baseName": "workSatellitePhone",
            "type": "string"
        },
        {
            "name": "workOtherPhone",
            "baseName": "workOtherPhone",
            "type": "string"
        },
        {
            "name": "workAddress1",
            "baseName": "workAddress1",
            "type": "string"
        },
        {
            "name": "workAddress2",
            "baseName": "workAddress2",
            "type": "string"
        },
        {
            "name": "workSuburb",
            "baseName": "workSuburb",
            "type": "string"
        },
        {
            "name": "workState",
            "baseName": "workState",
            "type": "string"
        },
        {
            "name": "workPostCode",
            "baseName": "workPostCode",
            "type": "string"
        },
        {
            "name": "workPostalAddress1",
            "baseName": "workPostalAddress1",
            "type": "string"
        },
        {
            "name": "workPostalAddress2",
            "baseName": "workPostalAddress2",
            "type": "string"
        },
        {
            "name": "workPostalSuburb",
            "baseName": "workPostalSuburb",
            "type": "string"
        },
        {
            "name": "workPostalState",
            "baseName": "workPostalState",
            "type": "string"
        },
        {
            "name": "workPostalPostCode",
            "baseName": "workPostalPostCode",
            "type": "string"
        },
        {
            "name": "personalEmailAddress1",
            "baseName": "personalEmailAddress1",
            "type": "string"
        },
        {
            "name": "personalEmailAddress2",
            "baseName": "personalEmailAddress2",
            "type": "string"
        },
        {
            "name": "personalAddress1",
            "baseName": "personalAddress1",
            "type": "string"
        },
        {
            "name": "personalAddress2",
            "baseName": "personalAddress2",
            "type": "string"
        },
        {
            "name": "personalSuburb",
            "baseName": "personalSuburb",
            "type": "string"
        },
        {
            "name": "personalState",
            "baseName": "personalState",
            "type": "string"
        },
        {
            "name": "personalPostCode",
            "baseName": "personalPostCode",
            "type": "string"
        },
        {
            "name": "personalCountry",
            "baseName": "personalCountry",
            "type": "string"
        },
        {
            "name": "personalPhoneAreaCode1",
            "baseName": "personalPhoneAreaCode1",
            "type": "string"
        },
        {
            "name": "personalPhone1",
            "baseName": "personalPhone1",
            "type": "string"
        },
        {
            "name": "personalPhoneAreaCode2",
            "baseName": "personalPhoneAreaCode2",
            "type": "string"
        },
        {
            "name": "personalPhone2",
            "baseName": "personalPhone2",
            "type": "string"
        },
        {
            "name": "personalFaxAreaCode1",
            "baseName": "personalFaxAreaCode1",
            "type": "string"
        },
        {
            "name": "personalFax1",
            "baseName": "personalFax1",
            "type": "string"
        },
        {
            "name": "otherPhoneAreaCode1",
            "baseName": "otherPhoneAreaCode1",
            "type": "string"
        },
        {
            "name": "otherPhone1",
            "baseName": "otherPhone1",
            "type": "string"
        },
        {
            "name": "otherMobile",
            "baseName": "otherMobile",
            "type": "string"
        },
        {
            "name": "otherFirstName",
            "baseName": "otherFirstName",
            "type": "string"
        },
        {
            "name": "otherLastName",
            "baseName": "otherLastName",
            "type": "string"
        },
        {
            "name": "otherTitle",
            "baseName": "otherTitle",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
        },
        {
            "name": "division",
            "baseName": "division",
            "type": "string"
        },
        {
            "name": "businessUnit",
            "baseName": "businessUnit",
            "type": "string"
        },
        {
            "name": "department",
            "baseName": "department",
            "type": "string"
        },
        {
            "name": "teamName1",
            "baseName": "teamName1",
            "type": "string"
        },
        {
            "name": "teamName2",
            "baseName": "teamName2",
            "type": "string"
        },
        {
            "name": "role1",
            "baseName": "role1",
            "type": "string"
        },
        {
            "name": "role2",
            "baseName": "role2",
            "type": "string"
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<LocationsInner>"
        },
        {
            "name": "messagingoptions",
            "baseName": "messagingoptions",
            "type": "Array<MessagingoptionsInner>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "mri",
            "baseName": "mri",
            "type": "string"
        },
        {
            "name": "devices",
            "baseName": "devices",
            "type": "Array<any>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        },
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Contact.attributeTypeMap;
    }
}

