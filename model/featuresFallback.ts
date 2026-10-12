
import { RequestFile } from './models';


export type FeaturesFallbackWrite = {
    'channel': 'SMS';
    /**
    * The name of the Rich Message Template to use when  delivering the message via the fallback  channel.
    */
    'templateName': string;
}

/**
* The fallback feature allows the sender to configure a  fallback channel in case the original channel fails to deliver the message.  Note that currently this feature is *only*  supported for RCS message and the only allowed fallback channel is SMS.
*/
export class FeaturesFallback {
    'channel': 'SMS';
    /**
    * The name of the Rich Message Template to use when  delivering the message via the fallback  channel.
    */
    'templateName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "templateName",
            "baseName": "templateName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FeaturesFallback.attributeTypeMap;
    }
}

