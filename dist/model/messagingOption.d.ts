export type MessagingOptionWrite = {
    /**
    * The message channel.
    */
    'channel'?: 'sms' | 'email' | 'voice';
    /**
    * A boolean flag indicating whether messaging is enabled for the `channel`.
    */
    'enabled'?: boolean;
    /**
    * The primary contact address for the `channel`.
    */
    'primary'?: 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';
    /**
    * The secondary contact address for the `channel`.
    */
    'secondary'?: 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';
    /**
    * The tertiary contact address for the `channel`.
    */
    'tertiary'?: 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';
};
/**
* The object to configure message channel options.
*/
export declare class MessagingOption {
    /**
    * The message channel.
    */
    'channel': 'sms' | 'email' | 'voice';
    /**
    * A boolean flag indicating whether messaging is enabled for the `channel`.
    */
    'enabled': boolean;
    /**
    * The primary contact address for the `channel`.
    */
    'primary': 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';
    /**
    * The secondary contact address for the `channel`.
    */
    'secondary': 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';
    /**
    * The tertiary contact address for the `channel`.
    */
    'tertiary': 'WorkMobilePhone1' | 'WorkMobilePhone2' | 'WorkEmailAddress1' | 'WorkEmailAddress2' | 'PersonalMobilePhone1' | 'PersonalEmailAddress1';
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
