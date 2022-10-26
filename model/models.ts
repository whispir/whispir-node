import localVarRequest from 'request';

export * from './activity';
export * from './attachment';
export * from './callback';
export * from './callbackAuth';
export * from './callbackCallbacks';
export * from './callbackInstance';
export * from './callbackInstanceCallback';
export * from './callbackInstanceFrom';
export * from './callbackInstanceResponseMessage';
export * from './contact';
export * from './customList';
export * from './customListCustomlabellistsInner';
export * from './distributionlist';
export * from './distributionlistDistlistdetailsInner';
export * from './dlr';
export * from './dynamicdistributionlist';
export * from './email';
export * from './emailResources';
export * from './event';
export * from './eventEventFormListInner';
export * from './eventEventFormListInnerEventFieldListInner';
export * from './features';
export * from './featuresAliasOption';
export * from './featuresPushOptions';
export * from './featuresPushOptionsApns';
export * from './featuresPushOptionsFcm';
export * from './fieldMapping';
export * from './getActivities200Response';
export * from './getCallbackInstances200Response';
export * from './getCallbacks200Response';
export * from './getCallbacks200ResponseCallbacksInner';
export * from './getContacts200Response';
export * from './getCustomLists200Response';
export * from './getDistributionLists200Response';
export * from './getDistributionLists200ResponseDistributionLists';
export * from './getEvents200Response';
export * from './getMessageResponsesById200Response';
export * from './getMessages200Response';
export * from './getMessages400Response';
export * from './getMessages401Response';
export * from './getMessages403Response';
export * from './getMessages404Response';
export * from './getMessages405Response';
export * from './getMessages415Response';
export * from './getMessages422Response';
export * from './getMessages500Response';
export * from './getMessages501Response';
export * from './getResources200Response';
export * from './getScenarios200Response';
export * from './getTemplates200Response';
export * from './getTemplates200ResponseMessagetemplatesInner';
export * from './getUsers200Response';
export * from './getWorkspaces200Response';
export * from './import';
export * from './linkInner';
export * from './listUsers';
export * from './locationsInner';
export * from './message';
export * from './messageResponseDetailed';
export * from './messageResponseDetailedMessageresponsesInner';
export * from './messageResponseDetailedMessageresponsesInnerFrom';
export * from './messageResponseDetailedMessageresponsesInnerResponseMessage';
export * from './messageResponseSummary';
export * from './messageResponseSummaryMessageresponsesInner';
export * from './messageStatus';
export * from './messageStatusMessageStatusesInner';
export * from './messageStatusMessageStatusesInnerCategoriesInner';
export * from './messageStatusMessageStatusesInnerStatusInner';
export * from './messagingoptionsInner';
export * from './postAuth200Response';
export * from './putCallbackInstanceStatusRequest';
export * from './resource';
export * from './responseRule';
export * from './responseTemplatePattern';
export * from './scenario';
export * from './social';
export * from './socialSocialInner';
export * from './template';
export * from './user';
export * from './voice';
export * from './voiceResources';
export * from './web';
export * from './workspace';

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
import { Attachment } from './attachment';
import { Callback } from './callback';
import { CallbackAuth } from './callbackAuth';
import { CallbackCallbacks } from './callbackCallbacks';
import { CallbackInstance } from './callbackInstance';
import { CallbackInstanceCallback } from './callbackInstanceCallback';
import { CallbackInstanceFrom } from './callbackInstanceFrom';
import { CallbackInstanceResponseMessage } from './callbackInstanceResponseMessage';
import { Contact } from './contact';
import { CustomList } from './customList';
import { CustomListCustomlabellistsInner } from './customListCustomlabellistsInner';
import { Distributionlist } from './distributionlist';
import { DistributionlistDistlistdetailsInner } from './distributionlistDistlistdetailsInner';
import { Dlr } from './dlr';
import { Dynamicdistributionlist } from './dynamicdistributionlist';
import { Email } from './email';
import { EmailResources } from './emailResources';
import { Event } from './event';
import { EventEventFormListInner } from './eventEventFormListInner';
import { EventEventFormListInnerEventFieldListInner } from './eventEventFormListInnerEventFieldListInner';
import { Features } from './features';
import { FeaturesAliasOption } from './featuresAliasOption';
import { FeaturesPushOptions } from './featuresPushOptions';
import { FeaturesPushOptionsApns } from './featuresPushOptionsApns';
import { FeaturesPushOptionsFcm } from './featuresPushOptionsFcm';
import { FieldMapping } from './fieldMapping';
import { GetActivities200Response } from './getActivities200Response';
import { GetCallbackInstances200Response } from './getCallbackInstances200Response';
import { GetCallbacks200Response } from './getCallbacks200Response';
import { GetCallbacks200ResponseCallbacksInner } from './getCallbacks200ResponseCallbacksInner';
import { GetContacts200Response } from './getContacts200Response';
import { GetCustomLists200Response } from './getCustomLists200Response';
import { GetDistributionLists200Response } from './getDistributionLists200Response';
import { GetDistributionLists200ResponseDistributionLists } from './getDistributionLists200ResponseDistributionLists';
import { GetEvents200Response } from './getEvents200Response';
import { GetMessageResponsesById200Response } from './getMessageResponsesById200Response';
import { GetMessages200Response } from './getMessages200Response';
import { GetMessages400Response } from './getMessages400Response';
import { GetMessages401Response } from './getMessages401Response';
import { GetMessages403Response } from './getMessages403Response';
import { GetMessages404Response } from './getMessages404Response';
import { GetMessages405Response } from './getMessages405Response';
import { GetMessages415Response } from './getMessages415Response';
import { GetMessages422Response } from './getMessages422Response';
import { GetMessages500Response } from './getMessages500Response';
import { GetMessages501Response } from './getMessages501Response';
import { GetResources200Response } from './getResources200Response';
import { GetScenarios200Response } from './getScenarios200Response';
import { GetTemplates200Response } from './getTemplates200Response';
import { GetTemplates200ResponseMessagetemplatesInner } from './getTemplates200ResponseMessagetemplatesInner';
import { GetUsers200Response } from './getUsers200Response';
import { GetWorkspaces200Response } from './getWorkspaces200Response';
import { Import } from './import';
import { LinkInner } from './linkInner';
import { ListUsers } from './listUsers';
import { LocationsInner } from './locationsInner';
import { Message } from './message';
import { MessageResponseDetailed } from './messageResponseDetailed';
import { MessageResponseDetailedMessageresponsesInner } from './messageResponseDetailedMessageresponsesInner';
import { MessageResponseDetailedMessageresponsesInnerFrom } from './messageResponseDetailedMessageresponsesInnerFrom';
import { MessageResponseDetailedMessageresponsesInnerResponseMessage } from './messageResponseDetailedMessageresponsesInnerResponseMessage';
import { MessageResponseSummary } from './messageResponseSummary';
import { MessageResponseSummaryMessageresponsesInner } from './messageResponseSummaryMessageresponsesInner';
import { MessageStatus } from './messageStatus';
import { MessageStatusMessageStatusesInner } from './messageStatusMessageStatusesInner';
import { MessageStatusMessageStatusesInnerCategoriesInner } from './messageStatusMessageStatusesInnerCategoriesInner';
import { MessageStatusMessageStatusesInnerStatusInner } from './messageStatusMessageStatusesInnerStatusInner';
import { MessagingoptionsInner } from './messagingoptionsInner';
import { PostAuth200Response } from './postAuth200Response';
import { PutCallbackInstanceStatusRequest } from './putCallbackInstanceStatusRequest';
import { Resource } from './resource';
import { ResponseRule } from './responseRule';
import { ResponseTemplatePattern } from './responseTemplatePattern';
import { Scenario } from './scenario';
import { Social } from './social';
import { SocialSocialInner } from './socialSocialInner';
import { Template } from './template';
import { User } from './user';
import { Voice } from './voice';
import { VoiceResources } from './voiceResources';
import { Web } from './web';
import { Workspace } from './workspace';

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

let enumsMap: {[index: string]: any} = {
        "Activity.ActionEnum": Activity.ActionEnum,
        "Activity.ModuleEnum": Activity.ModuleEnum,
        "Callback.ContentTypeEnum": Callback.ContentTypeEnum,
        "Callback.RemoveHTMLEnum": Callback.RemoveHTMLEnum,
        "CallbackAuth.TypeEnum": CallbackAuth.TypeEnum,
        "CallbackCallbacks.ReplyEnum": CallbackCallbacks.ReplyEnum,
        "CallbackCallbacks.UndeliverableEnum": CallbackCallbacks.UndeliverableEnum,
        "CallbackInstance.StatusEnum": CallbackInstance.StatusEnum,
        "CallbackInstanceResponseMessage.ChannelEnum": CallbackInstanceResponseMessage.ChannelEnum,
        "Contact.StatusEnum": Contact.StatusEnum,
        "Contact.TypeEnum": Contact.TypeEnum,
        "CustomList.TypeEnum": CustomList.TypeEnum,
        "CustomList.SortTypeEnum": CustomList.SortTypeEnum,
        "CustomList.LinkedEnum": CustomList.LinkedEnum,
        "Email.TypeEnum": Email.TypeEnum,
        "Event.StatusEnum": Event.StatusEnum,
        "FeaturesPushOptions.NotificationsEnum": FeaturesPushOptions.NotificationsEnum,
        "FeaturesPushOptions.PriorityEnum": FeaturesPushOptions.PriorityEnum,
        "Import.ImportModeEnum": Import.ImportModeEnum,
        "LinkInner.PortEnum": LinkInner.PortEnum,
        "Message.TypeEnum": Message.TypeEnum,
        "Message.MessageTypeEnum": Message.MessageTypeEnum,
        "Message.ScheduleTypeEnum": Message.ScheduleTypeEnum,
        "Message.DirectionEnum": Message.DirectionEnum,
        "MessageResponseDetailedMessageresponsesInner.ResponseCategoryEnum": MessageResponseDetailedMessageresponsesInner.ResponseCategoryEnum,
        "MessageResponseDetailedMessageresponsesInnerResponseMessage.ChannelEnum": MessageResponseDetailedMessageresponsesInnerResponseMessage.ChannelEnum,
        "MessageResponseSummaryMessageresponsesInner.TypeEnum": MessageResponseSummaryMessageresponsesInner.TypeEnum,
        "MessageStatusMessageStatusesInnerCategoriesInner.NameEnum": MessageStatusMessageStatusesInnerCategoriesInner.NameEnum,
        "MessageStatusMessageStatusesInnerStatusInner.TypeEnum": MessageStatusMessageStatusesInnerStatusInner.TypeEnum,
        "MessageStatusMessageStatusesInnerStatusInner.StatusEnum": MessageStatusMessageStatusesInnerStatusInner.StatusEnum,
        "MessagingoptionsInner.ChannelEnum": MessagingoptionsInner.ChannelEnum,
        "MessagingoptionsInner.PrimaryEnum": MessagingoptionsInner.PrimaryEnum,
        "MessagingoptionsInner.SecondaryEnum": MessagingoptionsInner.SecondaryEnum,
        "MessagingoptionsInner.TertiaryEnum": MessagingoptionsInner.TertiaryEnum,
        "PutCallbackInstanceStatusRequest.StatusEnum": PutCallbackInstanceStatusRequest.StatusEnum,
        "Resource.ScopeEnum": Resource.ScopeEnum,
        "Scenario.AllowedUsersEnum": Scenario.AllowedUsersEnum,
        "SocialSocialInner.IdEnum": SocialSocialInner.IdEnum,
        "SocialSocialInner.TypeEnum": SocialSocialInner.TypeEnum,
        "User.StatusEnum": User.StatusEnum,
        "Voice.FooterEnum": Voice.FooterEnum,
        "Voice.OtherEnum": Voice.OtherEnum,
        "Web.TypeEnum": Web.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Activity": Activity,
    "Attachment": Attachment,
    "Callback": Callback,
    "CallbackAuth": CallbackAuth,
    "CallbackCallbacks": CallbackCallbacks,
    "CallbackInstance": CallbackInstance,
    "CallbackInstanceCallback": CallbackInstanceCallback,
    "CallbackInstanceFrom": CallbackInstanceFrom,
    "CallbackInstanceResponseMessage": CallbackInstanceResponseMessage,
    "Contact": Contact,
    "CustomList": CustomList,
    "CustomListCustomlabellistsInner": CustomListCustomlabellistsInner,
    "Distributionlist": Distributionlist,
    "DistributionlistDistlistdetailsInner": DistributionlistDistlistdetailsInner,
    "Dlr": Dlr,
    "Dynamicdistributionlist": Dynamicdistributionlist,
    "Email": Email,
    "EmailResources": EmailResources,
    "Event": Event,
    "EventEventFormListInner": EventEventFormListInner,
    "EventEventFormListInnerEventFieldListInner": EventEventFormListInnerEventFieldListInner,
    "Features": Features,
    "FeaturesAliasOption": FeaturesAliasOption,
    "FeaturesPushOptions": FeaturesPushOptions,
    "FeaturesPushOptionsApns": FeaturesPushOptionsApns,
    "FeaturesPushOptionsFcm": FeaturesPushOptionsFcm,
    "FieldMapping": FieldMapping,
    "GetActivities200Response": GetActivities200Response,
    "GetCallbackInstances200Response": GetCallbackInstances200Response,
    "GetCallbacks200Response": GetCallbacks200Response,
    "GetCallbacks200ResponseCallbacksInner": GetCallbacks200ResponseCallbacksInner,
    "GetContacts200Response": GetContacts200Response,
    "GetCustomLists200Response": GetCustomLists200Response,
    "GetDistributionLists200Response": GetDistributionLists200Response,
    "GetDistributionLists200ResponseDistributionLists": GetDistributionLists200ResponseDistributionLists,
    "GetEvents200Response": GetEvents200Response,
    "GetMessageResponsesById200Response": GetMessageResponsesById200Response,
    "GetMessages200Response": GetMessages200Response,
    "GetMessages400Response": GetMessages400Response,
    "GetMessages401Response": GetMessages401Response,
    "GetMessages403Response": GetMessages403Response,
    "GetMessages404Response": GetMessages404Response,
    "GetMessages405Response": GetMessages405Response,
    "GetMessages415Response": GetMessages415Response,
    "GetMessages422Response": GetMessages422Response,
    "GetMessages500Response": GetMessages500Response,
    "GetMessages501Response": GetMessages501Response,
    "GetResources200Response": GetResources200Response,
    "GetScenarios200Response": GetScenarios200Response,
    "GetTemplates200Response": GetTemplates200Response,
    "GetTemplates200ResponseMessagetemplatesInner": GetTemplates200ResponseMessagetemplatesInner,
    "GetUsers200Response": GetUsers200Response,
    "GetWorkspaces200Response": GetWorkspaces200Response,
    "Import": Import,
    "LinkInner": LinkInner,
    "ListUsers": ListUsers,
    "LocationsInner": LocationsInner,
    "Message": Message,
    "MessageResponseDetailed": MessageResponseDetailed,
    "MessageResponseDetailedMessageresponsesInner": MessageResponseDetailedMessageresponsesInner,
    "MessageResponseDetailedMessageresponsesInnerFrom": MessageResponseDetailedMessageresponsesInnerFrom,
    "MessageResponseDetailedMessageresponsesInnerResponseMessage": MessageResponseDetailedMessageresponsesInnerResponseMessage,
    "MessageResponseSummary": MessageResponseSummary,
    "MessageResponseSummaryMessageresponsesInner": MessageResponseSummaryMessageresponsesInner,
    "MessageStatus": MessageStatus,
    "MessageStatusMessageStatusesInner": MessageStatusMessageStatusesInner,
    "MessageStatusMessageStatusesInnerCategoriesInner": MessageStatusMessageStatusesInnerCategoriesInner,
    "MessageStatusMessageStatusesInnerStatusInner": MessageStatusMessageStatusesInnerStatusInner,
    "MessagingoptionsInner": MessagingoptionsInner,
    "PostAuth200Response": PostAuth200Response,
    "PutCallbackInstanceStatusRequest": PutCallbackInstanceStatusRequest,
    "Resource": Resource,
    "ResponseRule": ResponseRule,
    "ResponseTemplatePattern": ResponseTemplatePattern,
    "Scenario": Scenario,
    "Social": Social,
    "SocialSocialInner": SocialSocialInner,
    "Template": Template,
    "User": User,
    "Voice": Voice,
    "VoiceResources": VoiceResources,
    "Web": Web,
    "Workspace": Workspace,
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
            if (enumsMap[expectedType]) {
                return expectedType;
            }

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
            if (enumsMap[type]) {
                return data;
            }
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
            if (enumsMap[type]) {// is Enum
                return data;
            }

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

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
