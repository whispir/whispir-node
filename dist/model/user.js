"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/**
* The user object.
*/
class User {
    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}
exports.User = User;
User.discriminator = undefined;
User.attributeTypeMap = [
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
    }
];
