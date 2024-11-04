"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./activity"), exports);
__exportStar(require("./activityCollection"), exports);
__exportStar(require("./aliasOption"), exports);
__exportStar(require("./apiError"), exports);
__exportStar(require("./apns"), exports);
__exportStar(require("./attachment"), exports);
__exportStar(require("./attachments"), exports);
__exportStar(require("./auth"), exports);
__exportStar(require("./callback"), exports);
__exportStar(require("./callbackAuth"), exports);
__exportStar(require("./callbackCall"), exports);
__exportStar(require("./callbackCallCollection"), exports);
__exportStar(require("./callbackCollection"), exports);
__exportStar(require("./callbackInvocation"), exports);
__exportStar(require("./callbackOptions"), exports);
__exportStar(require("./channel"), exports);
__exportStar(require("./contact"), exports);
__exportStar(require("./contactCollection"), exports);
__exportStar(require("./customList"), exports);
__exportStar(require("./customListCollection"), exports);
__exportStar(require("./deliveryCategory"), exports);
__exportStar(require("./deliveryReceipt"), exports);
__exportStar(require("./deliveryStatus"), exports);
__exportStar(require("./distributionList"), exports);
__exportStar(require("./distributionListCollection"), exports);
__exportStar(require("./distributionListContacts"), exports);
__exportStar(require("./email"), exports);
__exportStar(require("./event"), exports);
__exportStar(require("./eventCollection"), exports);
__exportStar(require("./fcm"), exports);
__exportStar(require("./features"), exports);
__exportStar(require("./fieldMapping"), exports);
__exportStar(require("./form"), exports);
__exportStar(require("./formField"), exports);
__exportStar(require("./import"), exports);
__exportStar(require("./link"), exports);
__exportStar(require("./listLabel"), exports);
__exportStar(require("./location"), exports);
__exportStar(require("./message"), exports);
__exportStar(require("./messageCollection"), exports);
__exportStar(require("./messageResponseCollection"), exports);
__exportStar(require("./messageResponseDetailed"), exports);
__exportStar(require("./messageResponseSummary"), exports);
__exportStar(require("./messageStatus"), exports);
__exportStar(require("./messageStatusCollection"), exports);
__exportStar(require("./messagingOption"), exports);
__exportStar(require("./pushOptions"), exports);
__exportStar(require("./resource"), exports);
__exportStar(require("./resourceCollection"), exports);
__exportStar(require("./responder"), exports);
__exportStar(require("./response"), exports);
__exportStar(require("./responseRule"), exports);
__exportStar(require("./responseRuleCollection"), exports);
__exportStar(require("./responseStatusDetailed"), exports);
__exportStar(require("./responseStatusSummary"), exports);
__exportStar(require("./scenario"), exports);
__exportStar(require("./scenarioCollection"), exports);
__exportStar(require("./social"), exports);
__exportStar(require("./template"), exports);
__exportStar(require("./templateCollection"), exports);
__exportStar(require("./templatePattern"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./userCollection"), exports);
__exportStar(require("./voice"), exports);
__exportStar(require("./web"), exports);
__exportStar(require("./workspace"), exports);
__exportStar(require("./workspaceCollection"), exports);
const activity_1 = require("./activity");
const activityCollection_1 = require("./activityCollection");
const aliasOption_1 = require("./aliasOption");
const apiError_1 = require("./apiError");
const apns_1 = require("./apns");
const attachment_1 = require("./attachment");
const attachments_1 = require("./attachments");
const auth_1 = require("./auth");
const callback_1 = require("./callback");
const callbackAuth_1 = require("./callbackAuth");
const callbackCall_1 = require("./callbackCall");
const callbackCallCollection_1 = require("./callbackCallCollection");
const callbackCollection_1 = require("./callbackCollection");
const callbackInvocation_1 = require("./callbackInvocation");
const callbackOptions_1 = require("./callbackOptions");
const channel_1 = require("./channel");
const contact_1 = require("./contact");
const contactCollection_1 = require("./contactCollection");
const customList_1 = require("./customList");
const customListCollection_1 = require("./customListCollection");
const deliveryCategory_1 = require("./deliveryCategory");
const deliveryReceipt_1 = require("./deliveryReceipt");
const deliveryStatus_1 = require("./deliveryStatus");
const distributionList_1 = require("./distributionList");
const distributionListCollection_1 = require("./distributionListCollection");
const distributionListContacts_1 = require("./distributionListContacts");
const email_1 = require("./email");
const event_1 = require("./event");
const eventCollection_1 = require("./eventCollection");
const fcm_1 = require("./fcm");
const features_1 = require("./features");
const fieldMapping_1 = require("./fieldMapping");
const form_1 = require("./form");
const formField_1 = require("./formField");
const import_1 = require("./import");
const importOptions_1 = require("./importOptions");
const key_1 = require("./key");
const keyCollection_1 = require("./keyCollection");
const link_1 = require("./link");
const listLabel_1 = require("./listLabel");
const location_1 = require("./location");
const message_1 = require("./message");
const messageCollection_1 = require("./messageCollection");
const messageResponseCollection_1 = require("./messageResponseCollection");
const messageResponseDetailed_1 = require("./messageResponseDetailed");
const messageResponseSummary_1 = require("./messageResponseSummary");
const messageStatus_1 = require("./messageStatus");
const messageStatusCollection_1 = require("./messageStatusCollection");
const messagingOption_1 = require("./messagingOption");
const pushOptions_1 = require("./pushOptions");
const resource_1 = require("./resource");
const resourceCollection_1 = require("./resourceCollection");
const responder_1 = require("./responder");
const response_1 = require("./response");
const responseRule_1 = require("./responseRule");
const responseRuleCollection_1 = require("./responseRuleCollection");
const responseStatusDetailed_1 = require("./responseStatusDetailed");
const responseStatusSummary_1 = require("./responseStatusSummary");
const scenario_1 = require("./scenario");
const scenarioCollection_1 = require("./scenarioCollection");
const social_1 = require("./social");
const template_1 = require("./template");
const templateCollection_1 = require("./templateCollection");
const templatePattern_1 = require("./templatePattern");
const user_1 = require("./user");
const userCollection_1 = require("./userCollection");
const voice_1 = require("./voice");
const web_1 = require("./web");
const workspace_1 = require("./workspace");
const workspaceCollection_1 = require("./workspaceCollection");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let typeMap = {
    "Activity": activity_1.Activity,
    "ActivityCollection": activityCollection_1.ActivityCollection,
    "AliasOption": aliasOption_1.AliasOption,
    "ApiError": apiError_1.ApiError,
    "Apns": apns_1.Apns,
    "Attachment": attachment_1.Attachment,
    "Attachments": attachments_1.Attachments,
    "Auth": auth_1.Auth,
    "Callback": callback_1.Callback,
    "CallbackAuth": callbackAuth_1.CallbackAuth,
    "CallbackCall": callbackCall_1.CallbackCall,
    "CallbackCallCollection": callbackCallCollection_1.CallbackCallCollection,
    "CallbackCollection": callbackCollection_1.CallbackCollection,
    "CallbackInvocation": callbackInvocation_1.CallbackInvocation,
    "CallbackOptions": callbackOptions_1.CallbackOptions,
    "Channel": channel_1.Channel,
    "Contact": contact_1.Contact,
    "ContactCollection": contactCollection_1.ContactCollection,
    "CustomList": customList_1.CustomList,
    "CustomListCollection": customListCollection_1.CustomListCollection,
    "DeliveryCategory": deliveryCategory_1.DeliveryCategory,
    "DeliveryReceipt": deliveryReceipt_1.DeliveryReceipt,
    "DeliveryStatus": deliveryStatus_1.DeliveryStatus,
    "DistributionList": distributionList_1.DistributionList,
    "DistributionListCollection": distributionListCollection_1.DistributionListCollection,
    "DistributionListContacts": distributionListContacts_1.DistributionListContacts,
    "Email": email_1.Email,
    "Event": event_1.Event,
    "EventCollection": eventCollection_1.EventCollection,
    "Fcm": fcm_1.Fcm,
    "Features": features_1.Features,
    "FieldMapping": fieldMapping_1.FieldMapping,
    "Form": form_1.Form,
    "FormField": formField_1.FormField,
    "Import": import_1.Import,
    "ImportOptions": importOptions_1.ImportOptions,
    "Key": key_1.Key,
    "KeyCollection": keyCollection_1.KeyCollection,
    "Link": link_1.Link,
    "ListLabel": listLabel_1.ListLabel,
    "Location": location_1.Location,
    "Message": message_1.Message,
    "MessageCollection": messageCollection_1.MessageCollection,
    "MessageResponseCollection": messageResponseCollection_1.MessageResponseCollection,
    "MessageResponseDetailed": messageResponseDetailed_1.MessageResponseDetailed,
    "MessageResponseSummary": messageResponseSummary_1.MessageResponseSummary,
    "MessageStatus": messageStatus_1.MessageStatus,
    "MessageStatusCollection": messageStatusCollection_1.MessageStatusCollection,
    "MessagingOption": messagingOption_1.MessagingOption,
    "PushOptions": pushOptions_1.PushOptions,
    "Resource": resource_1.Resource,
    "ResourceCollection": resourceCollection_1.ResourceCollection,
    "Responder": responder_1.Responder,
    "Response": response_1.Response,
    "ResponseRule": responseRule_1.ResponseRule,
    "ResponseRuleCollection": responseRuleCollection_1.ResponseRuleCollection,
    "ResponseStatusDetailed": responseStatusDetailed_1.ResponseStatusDetailed,
    "ResponseStatusSummary": responseStatusSummary_1.ResponseStatusSummary,
    "Scenario": scenario_1.Scenario,
    "ScenarioCollection": scenarioCollection_1.ScenarioCollection,
    "Social": social_1.Social,
    "Template": template_1.Template,
    "TemplateCollection": templateCollection_1.TemplateCollection,
    "TemplatePattern": templatePattern_1.TemplatePattern,
    "User": user_1.User,
    "UserCollection": userCollection_1.UserCollection,
    "Voice": voice_1.Voice,
    "Web": web_1.Web,
    "Workspace": workspace_1.Workspace,
    "WorkspaceCollection": workspaceCollection_1.WorkspaceCollection,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
