
import { RequestFile } from './models';
import { AliasOption, AliasOptionWrite } from './aliasOption';
import { PushOptions, PushOptionsWrite } from './pushOptions';


export type FeaturesWrite = {
    'pushOptions'?: PushOptionsWrite;
    'aliasOption'?: AliasOptionWrite;
}

/**
* ### Push Messaging  Whispir allows you to send push notifications to any iOS and Android-based apps  Setting up the platform to handle push notifications involves some one-time steps and some periodically repeated steps (updating push tokens). See Apps to get a clear understanding of the related steps and endpoints. Whispir doesn\'t support sending push notifications to device tokens directly. Read more in Contact devices about how to register the device tokens under contacts.  ### Message Aliasing  The Whispir UI allows you to configure a sender alias from which messages are sent. Instructions for alias creation can be found in [Configure message aliases](https://au.whispir.com/onlinehelp/Content/Topics-whispir-ua/administration/alias-manager/config-message-aliases.htm) within Whispir documentation.  The message alias can be attached to a message to template, to configure the the sender for the following channels: * SMS - a custom mobile number, e.g. +61 123 456 789 * Email - a custom email address, e.g. marketing@example.com * Voice - a custom mobile number, e.g. +61 123 456 789
*/
export class Features {
    'pushOptions': PushOptions;
    'aliasOption': AliasOption;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pushOptions",
            "baseName": "pushOptions",
            "type": "PushOptions"
        },
        {
            "name": "aliasOption",
            "baseName": "aliasOption",
            "type": "AliasOption"
        }    ];

    static getAttributeTypeMap() {
        return Features.attributeTypeMap;
    }
}

