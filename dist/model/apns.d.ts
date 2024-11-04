export type ApnsWrite = {
    /**
    * The sound to play when the device receives the notification. The value *default* will play the system sound, otherwise this attribute must point to a sound resource in your app\'s main bundle or in the *Library/Sounds* folder of your app\'s container directory.
    */
    'sound'?: string;
    /**
    * The action linked with a user click on the notification. Translates to the <span style=\"color:red\">*category*</span> attribute in APNS.
    */
    'action'?: string;
};
/**
* The apns object holds attributes specific to the contacts\' APNS-registered (Apple Push Notification Service) iOS devices
*/
export declare class Apns {
    /**
    * The sound to play when the device receives the notification. The value *default* will play the system sound, otherwise this attribute must point to a sound resource in your app\'s main bundle or in the *Library/Sounds* folder of your app\'s container directory.
    */
    'sound': string;
    /**
    * The action linked with a user click on the notification. Translates to the <span style=\"color:red\">*category*</span> attribute in APNS.
    */
    'action': string;
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
