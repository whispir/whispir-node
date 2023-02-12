import localVarRequest from 'request';

export * from './activity';
export * from './activityCollection';
export * from './aliasOption';
export * from './apiError';
export * from './apns';
export * from './attachment';
export * from './attachments';
export * from './auth';
export * from './callback';
export * from './callbackAuth';
export * from './callbackCall';
export * from './callbackCallCollection';
export * from './callbackCollection';
export * from './callbackInvocation';
export * from './callbackOptions';
export * from './channel';
export * from './contact';
export * from './contactCollection';
export * from './customList';
export * from './customListCollection';
export * from './deliveryCategory';
export * from './deliveryReceipt';
export * from './deliveryStatus';
export * from './distributionList';
export * from './distributionListCollection';
export * from './distributionListContacts';
export * from './email';
export * from './event';
export * from './eventCollection';
export * from './fcm';
export * from './features';
export * from './fieldMapping';
export * from './form';
export * from './formField';
export * from './import';
export * from './link';
export * from './listLabel';
export * from './location';
export * from './message';
export * from './messageCollection';
export * from './messageResponseCollection';
export * from './messageResponseDetailed';
export * from './messageResponseSummary';
export * from './messageStatus';
export * from './messageStatusCollection';
export * from './messagingOption';
export * from './pushOptions';
export * from './resource';
export * from './resourceCollection';
export * from './responder';
export * from './response';
export * from './responseRule';
export * from './responseRuleCollection';
export * from './responseStatusDetailed';
export * from './responseStatusSummary';
export * from './scenario';
export * from './scenarioCollection';
export * from './social';
export * from './template';
export * from './templateCollection';
export * from './templatePattern';
export * from './user';
export * from './userCollection';
export * from './voice';
export * from './web';
export * from './workspace';
export * from './workspaceCollection';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Activity } from './activity';
import { ActivityCollection } from './activityCollection';
import { AliasOption } from './aliasOption';
import { ApiError } from './apiError';
import { Apns } from './apns';
import { Attachment } from './attachment';
import { Attachments } from './attachments';
import { Auth } from './auth';
import { Callback } from './callback';
import { CallbackAuth } from './callbackAuth';
import { CallbackCall } from './callbackCall';
import { CallbackCallCollection } from './callbackCallCollection';
import { CallbackCollection } from './callbackCollection';
import { CallbackInvocation } from './callbackInvocation';
import { CallbackOptions } from './callbackOptions';
import { Channel } from './channel';
import { Contact } from './contact';
import { ContactCollection } from './contactCollection';
import { CustomList } from './customList';
import { CustomListCollection } from './customListCollection';
import { DeliveryCategory } from './deliveryCategory';
import { DeliveryReceipt } from './deliveryReceipt';
import { DeliveryStatus } from './deliveryStatus';
import { DistributionList } from './distributionList';
import { DistributionListCollection } from './distributionListCollection';
import { DistributionListContacts } from './distributionListContacts';
import { Email } from './email';
import { Event } from './event';
import { EventCollection } from './eventCollection';
import { Fcm } from './fcm';
import { Features } from './features';
import { FieldMapping } from './fieldMapping';
import { Form } from './form';
import { FormField } from './formField';
import { Import } from './import';
import { Key } from './key';
import { KeyCollection } from './keyCollection';
import { Link } from './link';
import { ListLabel } from './listLabel';
import { Location } from './location';
import { Message } from './message';
import { MessageCollection } from './messageCollection';
import { MessageResponseCollection } from './messageResponseCollection';
import { MessageResponseDetailed } from './messageResponseDetailed';
import { MessageResponseSummary } from './messageResponseSummary';
import { MessageStatus } from './messageStatus';
import { MessageStatusCollection } from './messageStatusCollection';
import { MessagingOption } from './messagingOption';
import { PushOptions } from './pushOptions';
import { Resource } from './resource';
import { ResourceCollection } from './resourceCollection';
import { Responder } from './responder';
import { Response } from './response';
import { ResponseRule } from './responseRule';
import { ResponseRuleCollection } from './responseRuleCollection';
import { ResponseStatusDetailed } from './responseStatusDetailed';
import { ResponseStatusSummary } from './responseStatusSummary';
import { Scenario } from './scenario';
import { ScenarioCollection } from './scenarioCollection';
import { Social } from './social';
import { Template } from './template';
import { TemplateCollection } from './templateCollection';
import { TemplatePattern } from './templatePattern';
import { User } from './user';
import { UserCollection } from './userCollection';
import { Voice } from './voice';
import { Web } from './web';
import { Workspace } from './workspace';
import { WorkspaceCollection } from './workspaceCollection';

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

let typeMap: {[index: string]: any} = {
    "Activity": Activity,
    "ActivityCollection": ActivityCollection,
    "AliasOption": AliasOption,
    "ApiError": ApiError,
    "Apns": Apns,
    "Attachment": Attachment,
    "Attachments": Attachments,
    "Auth": Auth,
    "Callback": Callback,
    "CallbackAuth": CallbackAuth,
    "CallbackCall": CallbackCall,
    "CallbackCallCollection": CallbackCallCollection,
    "CallbackCollection": CallbackCollection,
    "CallbackInvocation": CallbackInvocation,
    "CallbackOptions": CallbackOptions,
    "Channel": Channel,
    "Contact": Contact,
    "ContactCollection": ContactCollection,
    "CustomList": CustomList,
    "CustomListCollection": CustomListCollection,
    "DeliveryCategory": DeliveryCategory,
    "DeliveryReceipt": DeliveryReceipt,
    "DeliveryStatus": DeliveryStatus,
    "DistributionList": DistributionList,
    "DistributionListCollection": DistributionListCollection,
    "DistributionListContacts": DistributionListContacts,
    "Email": Email,
    "Event": Event,
    "EventCollection": EventCollection,
    "Fcm": Fcm,
    "Features": Features,
    "FieldMapping": FieldMapping,
    "Form": Form,
    "FormField": FormField,
    "Import": Import,
    "Key": Key,
    "KeyCollection": KeyCollection,
    "Link": Link,
    "ListLabel": ListLabel,
    "Location": Location,
    "Message": Message,
    "MessageCollection": MessageCollection,
    "MessageResponseCollection": MessageResponseCollection,
    "MessageResponseDetailed": MessageResponseDetailed,
    "MessageResponseSummary": MessageResponseSummary,
    "MessageStatus": MessageStatus,
    "MessageStatusCollection": MessageStatusCollection,
    "MessagingOption": MessagingOption,
    "PushOptions": PushOptions,
    "Resource": Resource,
    "ResourceCollection": ResourceCollection,
    "Responder": Responder,
    "Response": Response,
    "ResponseRule": ResponseRule,
    "ResponseRuleCollection": ResponseRuleCollection,
    "ResponseStatusDetailed": ResponseStatusDetailed,
    "ResponseStatusSummary": ResponseStatusSummary,
    "Scenario": Scenario,
    "ScenarioCollection": ScenarioCollection,
    "Social": Social,
    "Template": Template,
    "TemplateCollection": TemplateCollection,
    "TemplatePattern": TemplatePattern,
    "User": User,
    "UserCollection": UserCollection,
    "Voice": Voice,
    "Web": Web,
    "Workspace": Workspace,
    "WorkspaceCollection": WorkspaceCollection,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
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

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
