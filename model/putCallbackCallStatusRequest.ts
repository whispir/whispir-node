
import { RequestFile } from './models';

/**
* The status of this particular callback attempt.
*/
export class PutCallbackCallStatusRequest {
    /**
    * The status of this particular callback attempt.
    */
    'status': 'FAILED' | 'SUCCESS';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PutCallbackCallStatusRequest.attributeTypeMap;
    }
}

