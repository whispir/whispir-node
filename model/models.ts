import localVarRequest from 'request';

export * from './activity';
export * from './activityCollection';
export * from './apiError';
export * from './auth';
export * from './callback';
export * from './callbackAuth';
export * from './callbackCall';
export * from './callbackCallCollection';
export * from './callbackCallEvent';
export * from './callbackCallFrom';
export * from './callbackCallResponseMessage';
export * from './callbackCollection';
export * from './callbackEvent';
export * from './callbackShort';
export * from './contact';
export * from './contactCollection';
export * from './contactLocation';
export * from './contactMessagingOption';
export * from './customList';
export * from './customListCollection';
export * from './customListItem';
export * from './distributionList';
export * from './distributionListCollection';
export * from './distributionListDetails';
export * from './distributionListDynamic';
export * from './distributionListStatic';
export * from './event';
export * from './eventCollection';
export * from './eventForm';
export * from './eventFormField';
export * from './fieldMapping';
export * from './import';
export * from './link';
export * from './message';
export * from './messageAttachment';
export * from './messageCollection';
export * from './messageDlr';
export * from './messageEmail';
export * from './messageEmailResources';
export * from './messageFeatures';
export * from './messageFeaturesAliasOption';
export * from './messageFeaturesPushOptions';
export * from './messageFeaturesPushOptionsAPNS';
export * from './messageFeaturesPushOptionsFCM';
export * from './messageResponse';
export * from './messageResponseDetailed';
export * from './messageResponseDetailedStatus';
export * from './messageResponseDetailedStatusFrom';
export * from './messageResponseDetailedStatusResponseMessage';
export * from './messageResponseSummary';
export * from './messageResponseSummaryStatus';
export * from './messageSocial';
export * from './messageSocialChannel';
export * from './messageStatus';
export * from './messageStatusChannel';
export * from './messageStatusSummary';
export * from './messageStatusSummaryCategory';
export * from './messageTemplateShort';
export * from './messageVoice';
export * from './messageVoiceResources';
export * from './messageWeb';
export * from './resource';
export * from './resourceCollection';
export * from './responseRule';
export * from './responseRuleCollection';
export * from './responseTemplatePattern';
export * from './scenario';
export * from './scenarioCollection';
export * from './template';
export * from './templateCollection';
export * from './user';
export * from './userCollection';
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
import { ApiError } from './apiError';
import { Auth } from './auth';
import { Callback } from './callback';
import { CallbackAuth } from './callbackAuth';
import { CallbackCall } from './callbackCall';
import { CallbackCallCollection } from './callbackCallCollection';
import { CallbackCallEvent } from './callbackCallEvent';
import { CallbackCallFrom } from './callbackCallFrom';
import { CallbackCallResponseMessage } from './callbackCallResponseMessage';
import { CallbackCollection } from './callbackCollection';
import { CallbackEvent } from './callbackEvent';
import { CallbackShort } from './callbackShort';
import { Contact } from './contact';
import { ContactCollection } from './contactCollection';
import { ContactLocation } from './contactLocation';
import { ContactMessagingOption } from './contactMessagingOption';
import { CustomList } from './customList';
import { CustomListCollection } from './customListCollection';
import { CustomListItem } from './customListItem';
import { DistributionList } from './distributionList';
import { DistributionListCollection } from './distributionListCollection';
import { DistributionListDetails } from './distributionListDetails';
import { DistributionListDynamic } from './distributionListDynamic';
import { DistributionListStatic } from './distributionListStatic';
import { Event } from './event';
import { EventCollection } from './eventCollection';
import { EventForm } from './eventForm';
import { EventFormField } from './eventFormField';
import { FieldMapping } from './fieldMapping';
import { Import } from './import';
import { Link } from './link';
import { Message } from './message';
import { MessageAttachment } from './messageAttachment';
import { MessageCollection } from './messageCollection';
import { MessageDlr } from './messageDlr';
import { MessageEmail } from './messageEmail';
import { MessageEmailResources } from './messageEmailResources';
import { MessageFeatures } from './messageFeatures';
import { MessageFeaturesAliasOption } from './messageFeaturesAliasOption';
import { MessageFeaturesPushOptions } from './messageFeaturesPushOptions';
import { MessageFeaturesPushOptionsAPNS } from './messageFeaturesPushOptionsAPNS';
import { MessageFeaturesPushOptionsFCM } from './messageFeaturesPushOptionsFCM';
import { MessageResponse } from './messageResponse';
import { MessageResponseDetailed } from './messageResponseDetailed';
import { MessageResponseDetailedStatus } from './messageResponseDetailedStatus';
import { MessageResponseDetailedStatusFrom } from './messageResponseDetailedStatusFrom';
import { MessageResponseDetailedStatusResponseMessage } from './messageResponseDetailedStatusResponseMessage';
import { MessageResponseSummary } from './messageResponseSummary';
import { MessageResponseSummaryStatus } from './messageResponseSummaryStatus';
import { MessageSocial } from './messageSocial';
import { MessageSocialChannel } from './messageSocialChannel';
import { MessageStatus } from './messageStatus';
import { MessageStatusChannel } from './messageStatusChannel';
import { MessageStatusSummary } from './messageStatusSummary';
import { MessageStatusSummaryCategory } from './messageStatusSummaryCategory';
import { MessageTemplateShort } from './messageTemplateShort';
import { MessageVoice } from './messageVoice';
import { MessageVoiceResources } from './messageVoiceResources';
import { MessageWeb } from './messageWeb';
import { Resource } from './resource';
import { ResourceCollection } from './resourceCollection';
import { ResponseRule } from './responseRule';
import { ResponseRuleCollection } from './responseRuleCollection';
import { ResponseTemplatePattern } from './responseTemplatePattern';
import { Scenario } from './scenario';
import { ScenarioCollection } from './scenarioCollection';
import { Template } from './template';
import { TemplateCollection } from './templateCollection';
import { User } from './user';
import { UserCollection } from './userCollection';
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
    "ApiError": ApiError,
    "Auth": Auth,
    "Callback": Callback,
    "CallbackAuth": CallbackAuth,
    "CallbackCall": CallbackCall,
    "CallbackCallCollection": CallbackCallCollection,
    "CallbackCallEvent": CallbackCallEvent,
    "CallbackCallFrom": CallbackCallFrom,
    "CallbackCallResponseMessage": CallbackCallResponseMessage,
    "CallbackCollection": CallbackCollection,
    "CallbackEvent": CallbackEvent,
    "CallbackShort": CallbackShort,
    "Contact": Contact,
    "ContactCollection": ContactCollection,
    "ContactLocation": ContactLocation,
    "ContactMessagingOption": ContactMessagingOption,
    "CustomList": CustomList,
    "CustomListCollection": CustomListCollection,
    "CustomListItem": CustomListItem,
    "DistributionList": DistributionList,
    "DistributionListCollection": DistributionListCollection,
    "DistributionListDetails": DistributionListDetails,
    "DistributionListDynamic": DistributionListDynamic,
    "DistributionListStatic": DistributionListStatic,
    "Event": Event,
    "EventCollection": EventCollection,
    "EventForm": EventForm,
    "EventFormField": EventFormField,
    "FieldMapping": FieldMapping,
    "Import": Import,
    "Link": Link,
    "Message": Message,
    "MessageAttachment": MessageAttachment,
    "MessageCollection": MessageCollection,
    "MessageDlr": MessageDlr,
    "MessageEmail": MessageEmail,
    "MessageEmailResources": MessageEmailResources,
    "MessageFeatures": MessageFeatures,
    "MessageFeaturesAliasOption": MessageFeaturesAliasOption,
    "MessageFeaturesPushOptions": MessageFeaturesPushOptions,
    "MessageFeaturesPushOptionsAPNS": MessageFeaturesPushOptionsAPNS,
    "MessageFeaturesPushOptionsFCM": MessageFeaturesPushOptionsFCM,
    "MessageResponse": MessageResponse,
    "MessageResponseDetailed": MessageResponseDetailed,
    "MessageResponseDetailedStatus": MessageResponseDetailedStatus,
    "MessageResponseDetailedStatusFrom": MessageResponseDetailedStatusFrom,
    "MessageResponseDetailedStatusResponseMessage": MessageResponseDetailedStatusResponseMessage,
    "MessageResponseSummary": MessageResponseSummary,
    "MessageResponseSummaryStatus": MessageResponseSummaryStatus,
    "MessageSocial": MessageSocial,
    "MessageSocialChannel": MessageSocialChannel,
    "MessageStatus": MessageStatus,
    "MessageStatusChannel": MessageStatusChannel,
    "MessageStatusSummary": MessageStatusSummary,
    "MessageStatusSummaryCategory": MessageStatusSummaryCategory,
    "MessageTemplateShort": MessageTemplateShort,
    "MessageVoice": MessageVoice,
    "MessageVoiceResources": MessageVoiceResources,
    "MessageWeb": MessageWeb,
    "Resource": Resource,
    "ResourceCollection": ResourceCollection,
    "ResponseRule": ResponseRule,
    "ResponseRuleCollection": ResponseRuleCollection,
    "ResponseTemplatePattern": ResponseTemplatePattern,
    "Scenario": Scenario,
    "ScenarioCollection": ScenarioCollection,
    "Template": Template,
    "TemplateCollection": TemplateCollection,
    "User": User,
    "UserCollection": UserCollection,
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
