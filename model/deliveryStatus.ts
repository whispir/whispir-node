
import { RequestFile } from './models';


export type DeliveryStatusWrite = {
    /**
    * The message channel
    */
    'type'?: 'sms' | 'email' | 'voice';
    /**
    * The delivery status
    */
    'status'?: string;
    /**
    * The message destination
    */
    'destination'?: string;
}

export class DeliveryStatus {
    /**
    * The message channel
    */
    'type': 'sms' | 'email' | 'voice';
    /**
    * The delivery status
    */
    'status': string;
    /**
    * The message destination
    */
    'destination': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DeliveryStatus.attributeTypeMap;
    }
}

