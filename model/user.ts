
import { RequestFile } from './models';
import { Link, LinkWrite } from './link';


export type UserWrite = {
    /**
    * Specifies the username for the account
    */
    'userName': string;
    /**
    * Specifies the password for the account <p><b>Note:</b>The following are the rules for the password:</p><p><ul><li>Alpha Numeric [a-zA-Z0-9_]</li><li>Must have at least one uppercase and one lowercase character</li></ul></p>
    */
    'password': string;
    /**
    * The first name of the user.
    */
    'firstName': string;
    /**
    * The middle name of the user.
    */
    'middleName'?: string;
    /**
    * The last name of the user.
    */
    'lastName': string;
    /**
    * The title to address the user with.
    */
    'title'?: string;
    /**
    * Preferred name to be shown in the platfom interface
    */
    'nickname'?: string;
    /**
    * Specifies the validity status of the user. The default status is PENDING. One cannot set the status while creation of account. Read `User State Machine` again mentioned above.</p>
    */
    'status'?: 'ACTIVE' | 'A' | 'INACTIVE' | 'I' | 'PENDING' | 'P' | 'SUSPENDED' | 'B' | 'DELETED' | 'D';
    /**
    * The primary work mobile number of the user.
    */
    'workMobilePhone1'?: string;
    /**
    * The primary work email address of the user.
    */
    'workEmailAddress1'?: string;
    /**
    * The work country of the user.
    */
    'workCountry': string;
    /**
    * The time zone in which the user lives in. Values are relative to GMT.  Supported values are:  * Offset from GMT in the format `+/-NN`. For example, `+10`. * Worldwide time zone in the format `Country/City`. For example, `Australia/Melbourne`  See the list of [worldwide time zones](https://en.wikipedia.org/wiki/List_of_time_zones_by_country).
    */
    'timezone': string;
    /**
    * The secondary work mobile number of the user.
    */
    'workMobilePhone2'?: string;
    /**
    * The secondary work email address of the user.
    */
    'workEmailAddress2'?: string;
    /**
    * The primary work phone number area code of the user.
    */
    'workPhoneAreaCode1'?: string;
    /**
    * The primary work phone number of the user.
    */
    'workPhone1'?: string;
    /**
    * The secondary work phone number area code of the user.
    */
    'workPhoneAreaCode2'?: string;
    /**
    * The secondary work phone number of the user.
    */
    'workPhone2'?: string;
    /**
    * The work fax number area code of the user.
    */
    'workFaxAreaCode1'?: string;
    /**
    * The work fax number of the user.
    */
    'workFax1'?: string;
    /**
    * The work satellite phone number of the user.
    */
    'workSatellitePhone'?: string;
    /**
    * The work other phone number of the user.
    */
    'workOtherPhone'?: string;
    /**
    * The first work address line of the user.
    */
    'workAddress1'?: string;
    /**
    * The second work address line of the user.
    */
    'workAddress2'?: string;
    /**
    * The work address suburb of the user.
    */
    'workSuburb'?: string;
    /**
    * The work address state of the user.
    */
    'workState'?: string;
    /**
    * The work address post code of the user.
    */
    'workPostCode'?: string;
    /**
    * The first work postal address line of the user.
    */
    'workPostalAddress1'?: string;
    /**
    * The second work postal address line of the user.
    */
    'workPostalAddress2'?: string;
    /**
    * The work postal address suburb of the user.
    */
    'workPostalSuburb'?: string;
    /**
    * The work postal address state of the user.
    */
    'workPostalState'?: string;
    /**
    * The work postal address post code of the user.
    */
    'workPostalPostCode'?: string;
    /**
    * The primary personal email address of the user.
    */
    'personalEmailAddress1'?: string;
    /**
    * The secondary personal email address of the user.
    */
    'personalEmailAddress2'?: string;
    /**
    * The first personal address line of the user.
    */
    'personalAddress1'?: string;
    /**
    * The second personal address line of the user.
    */
    'personalAddress2'?: string;
    /**
    * The personal address suburb of the user.
    */
    'personalSuburb'?: string;
    /**
    * The personal address state of the user.
    */
    'personalState'?: string;
    /**
    * The personal address post code of the user.
    */
    'personalPostCode'?: string;
    /**
    * The personal address country of the user.
    */
    'personalCountry'?: string;
    /**
    * The primary personal phone number area code of the user.
    */
    'personalPhoneAreaCode1'?: string;
    /**
    * The primary personal phone number of the user.
    */
    'personalPhone1'?: string;
    /**
    * The secondary personal phone number area code of the user.
    */
    'personalPhoneAreaCode2'?: string;
    /**
    * The secondary personal phone number of the user.
    */
    'personalPhone2'?: string;
    /**
    * The personal fax number area code of the user.
    */
    'personalFaxAreaCode1'?: string;
    /**
    * The personal fax number of the user.
    */
    'personalFax1'?: string;
    /**
    * The other phone number area code of the user.
    */
    'otherPhoneAreaCode1'?: string;
    /**
    * The other phone number of the user.
    */
    'otherPhone1'?: string;
    /**
    * The other mobile number of the user.
    */
    'otherMobile'?: string;
    /**
    * The other first name of the user.
    */
    'otherFirstName'?: string;
    /**
    * The other last name of the user.
    */
    'otherLastName'?: string;
    /**
    * The other title to address the user with.
    */
    'otherTitle'?: string;
    /**
    * The company name of the user.
    */
    'companyName'?: string;
    /**
    * The job title of the user.
    */
    'jobTitle'?: string;
    /**
    * The division in the company to which the user is associated.
    */
    'division'?: string;
    /**
    * The business unit in the company to which the user is associated.
    */
    'businessUnit'?: string;
    /**
    * The department in the company to which the user is associated.
    */
    'department'?: string;
    /**
    * The primary team name of the user.
    */
    'teamName1'?: string;
    /**
    * The secondary team name of the user.
    */
    'teamName2'?: string;
    /**
    * The primary role of the user.
    */
    'role1'?: string;
    /**
    * The secondary role of the user.
    */
    'role2'?: string;
}

/**
* The user object.
*/
export class User {
    /**
    * The ID of the user.
    */
    'id': string;
    /**
    * The first name of the user.
    */
    'firstName': string;
    /**
    * The middle name of the user.
    */
    'middleName': string;
    /**
    * The last name of the user.
    */
    'lastName': string;
    /**
    * The title to address the user with.
    */
    'title': string;
    /**
    * Preferred name to be shown in the platfom interface
    */
    'nickname': string;
    /**
    * Specifies the validity status of the user. The default status is PENDING. One cannot set the status while creation of account. Read `User State Machine` again mentioned above.</p>
    */
    'status': 'ACTIVE' | 'A' | 'INACTIVE' | 'I' | 'PENDING' | 'P' | 'SUSPENDED' | 'B' | 'DELETED' | 'D';
    /**
    * The primary work mobile number of the user.
    */
    'workMobilePhone1': string;
    /**
    * The primary work email address of the user.
    */
    'workEmailAddress1': string;
    /**
    * The work country of the user.
    */
    'workCountry': string;
    /**
    * The time zone in which the user lives in. Values are relative to GMT.  Supported values are:  * Offset from GMT in the format `+/-NN`. For example, `+10`. * Worldwide time zone in the format `Country/City`. For example, `Australia/Melbourne`  See the list of [worldwide time zones](https://en.wikipedia.org/wiki/List_of_time_zones_by_country).
    */
    'timezone': string;
    /**
    * The secondary work mobile number of the user.
    */
    'workMobilePhone2': string;
    /**
    * The secondary work email address of the user.
    */
    'workEmailAddress2': string;
    /**
    * The primary work phone number area code of the user.
    */
    'workPhoneAreaCode1': string;
    /**
    * The primary work phone number of the user.
    */
    'workPhone1': string;
    /**
    * The secondary work phone number area code of the user.
    */
    'workPhoneAreaCode2': string;
    /**
    * The secondary work phone number of the user.
    */
    'workPhone2': string;
    /**
    * The work fax number area code of the user.
    */
    'workFaxAreaCode1': string;
    /**
    * The work fax number of the user.
    */
    'workFax1': string;
    /**
    * The work satellite phone number of the user.
    */
    'workSatellitePhone': string;
    /**
    * The work other phone number of the user.
    */
    'workOtherPhone': string;
    /**
    * The first work address line of the user.
    */
    'workAddress1': string;
    /**
    * The second work address line of the user.
    */
    'workAddress2': string;
    /**
    * The work address suburb of the user.
    */
    'workSuburb': string;
    /**
    * The work address state of the user.
    */
    'workState': string;
    /**
    * The work address post code of the user.
    */
    'workPostCode': string;
    /**
    * The first work postal address line of the user.
    */
    'workPostalAddress1': string;
    /**
    * The second work postal address line of the user.
    */
    'workPostalAddress2': string;
    /**
    * The work postal address suburb of the user.
    */
    'workPostalSuburb': string;
    /**
    * The work postal address state of the user.
    */
    'workPostalState': string;
    /**
    * The work postal address post code of the user.
    */
    'workPostalPostCode': string;
    /**
    * The primary personal email address of the user.
    */
    'personalEmailAddress1': string;
    /**
    * The secondary personal email address of the user.
    */
    'personalEmailAddress2': string;
    /**
    * The first personal address line of the user.
    */
    'personalAddress1': string;
    /**
    * The second personal address line of the user.
    */
    'personalAddress2': string;
    /**
    * The personal address suburb of the user.
    */
    'personalSuburb': string;
    /**
    * The personal address state of the user.
    */
    'personalState': string;
    /**
    * The personal address post code of the user.
    */
    'personalPostCode': string;
    /**
    * The personal address country of the user.
    */
    'personalCountry': string;
    /**
    * The primary personal phone number area code of the user.
    */
    'personalPhoneAreaCode1': string;
    /**
    * The primary personal phone number of the user.
    */
    'personalPhone1': string;
    /**
    * The secondary personal phone number area code of the user.
    */
    'personalPhoneAreaCode2': string;
    /**
    * The secondary personal phone number of the user.
    */
    'personalPhone2': string;
    /**
    * The personal fax number area code of the user.
    */
    'personalFaxAreaCode1': string;
    /**
    * The personal fax number of the user.
    */
    'personalFax1': string;
    /**
    * The other phone number area code of the user.
    */
    'otherPhoneAreaCode1': string;
    /**
    * The other phone number of the user.
    */
    'otherPhone1': string;
    /**
    * The other mobile number of the user.
    */
    'otherMobile': string;
    /**
    * The other first name of the user.
    */
    'otherFirstName': string;
    /**
    * The other last name of the user.
    */
    'otherLastName': string;
    /**
    * The other title to address the user with.
    */
    'otherTitle': string;
    /**
    * The company name of the user.
    */
    'companyName': string;
    /**
    * The job title of the user.
    */
    'jobTitle': string;
    /**
    * The division in the company to which the user is associated.
    */
    'division': string;
    /**
    * The business unit in the company to which the user is associated.
    */
    'businessUnit': string;
    /**
    * The department in the company to which the user is associated.
    */
    'department': string;
    /**
    * The primary team name of the user.
    */
    'teamName1': string;
    /**
    * The secondary team name of the user.
    */
    'teamName2': string;
    /**
    * The primary role of the user.
    */
    'role1': string;
    /**
    * The secondary role of the user.
    */
    'role2': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
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
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

