import localVarRequest from 'request';

export * from './activity';
export * from './activityCollection';
export * from './aliasOption';
export * from './apiError';
export * from './apiErrorNextGen';
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
export * from './distributionListCollectionDistributionListsInner';
export * from './distributionListContacts';
export * from './email';
export * from './event';
export * from './eventCollection';
export * from './fcm';
export * from './features';
export * from './featuresFallback';
export * from './fieldMapping';
export * from './fieldMappingFieldMapping';
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
export * from './modelObject';
export * from './object1';
export * from './object2';
export * from './object3';
export * from './optOutOption';
export * from './otp';
export * from './otpLinks';
export * from './pushOptions';
export * from './rCS';
export * from './rCSCard';
export * from './rCSMedia';
export * from './rCSRichCard';
export * from './rCSSuggestion';
export * from './rCSSuggestionDialAction';
export * from './rCSSuggestionUrlAction';
export * from './rCSSuggestionViewLocationAction';
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
export * from './sendCodeCreateRequest';
export * from './social';
export * from './template';
export * from './templateCollection';
export * from './templatePattern';
export * from './user';
export * from './userCollection';
export * from './verifyCodeCreateRequest';
export * from './voice';
export * from './wAContent';
export * from './wAContentButton';
export * from './wAContentHeader';
export * from './web';
export * from './whatsApp';
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
import { ApiErrorNextGen } from './apiErrorNextGen';
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
import { DistributionListCollectionDistributionListsInner } from './distributionListCollectionDistributionListsInner';
import { DistributionListContacts } from './distributionListContacts';
import { Email } from './email';
import { Event } from './event';
import { EventCollection } from './eventCollection';
import { Fcm } from './fcm';
import { Features } from './features';
import { FeaturesFallback } from './featuresFallback';
import { FieldMapping } from './fieldMapping';
import { FieldMappingFieldMapping } from './fieldMappingFieldMapping';
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
import { ModelObject } from './modelObject';
import { Object1 } from './object1';
import { Object2 } from './object2';
import { Object3 } from './object3';
import { OptOutOption } from './optOutOption';
import { Otp } from './otp';
import { OtpLinks } from './otpLinks';
import { PushOptions } from './pushOptions';
import { RCS } from './rCS';
import { RCSCard } from './rCSCard';
import { RCSMedia } from './rCSMedia';
import { RCSRichCard } from './rCSRichCard';
import { RCSSuggestion } from './rCSSuggestion';
import { RCSSuggestionDialAction } from './rCSSuggestionDialAction';
import { RCSSuggestionUrlAction } from './rCSSuggestionUrlAction';
import { RCSSuggestionViewLocationAction } from './rCSSuggestionViewLocationAction';
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
import { SendCodeCreateRequest } from './sendCodeCreateRequest';
import { Social } from './social';
import { Template } from './template';
import { TemplateCollection } from './templateCollection';
import { TemplatePattern } from './templatePattern';
import { User } from './user';
import { UserCollection } from './userCollection';
import { VerifyCodeCreateRequest } from './verifyCodeCreateRequest';
import { Voice } from './voice';
import { WAContent } from './wAContent';
import { WAContentButton } from './wAContentButton';
import { WAContentHeader } from './wAContentHeader';
import { Web } from './web';
import { WhatsApp } from './whatsApp';
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
    "ApiErrorNextGen": ApiErrorNextGen,
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
    "DistributionListCollectionDistributionListsInner": DistributionListCollectionDistributionListsInner,
    "DistributionListContacts": DistributionListContacts,
    "Email": Email,
    "Event": Event,
    "EventCollection": EventCollection,
    "Fcm": Fcm,
    "Features": Features,
    "FeaturesFallback": FeaturesFallback,
    "FieldMapping": FieldMapping,
    "FieldMappingFieldMapping": FieldMappingFieldMapping,
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
    "ModelObject": ModelObject,
    "Object1": Object1,
    "Object2": Object2,
    "Object3": Object3,
    "OptOutOption": OptOutOption,
    "Otp": Otp,
    "OtpLinks": OtpLinks,
    "PushOptions": PushOptions,
    "RCS": RCS,
    "RCSCard": RCSCard,
    "RCSMedia": RCSMedia,
    "RCSRichCard": RCSRichCard,
    "RCSSuggestion": RCSSuggestion,
    "RCSSuggestionDialAction": RCSSuggestionDialAction,
    "RCSSuggestionUrlAction": RCSSuggestionUrlAction,
    "RCSSuggestionViewLocationAction": RCSSuggestionViewLocationAction,
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
    "SendCodeCreateRequest": SendCodeCreateRequest,
    "Social": Social,
    "Template": Template,
    "TemplateCollection": TemplateCollection,
    "TemplatePattern": TemplatePattern,
    "User": User,
    "UserCollection": UserCollection,
    "VerifyCodeCreateRequest": VerifyCodeCreateRequest,
    "Voice": Voice,
    "WAContent": WAContent,
    "WAContentButton": WAContentButton,
    "WAContentHeader": WAContentHeader,
    "Web": Web,
    "WhatsApp": WhatsApp,
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
