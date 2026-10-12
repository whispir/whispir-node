
import { RequestFile } from './models';
import { RCSCard, RCSCardWrite } from './rCSCard';


export type RCSRichCardWrite = {
    'cardOrientation'?: 'VERTICAL' | 'HORIZONTAL';
    'cardWidth'?: 'SMALL' | 'MEDIUM';
    'cards': Array<RCSCardWrite>;
}

/**
* Describes a list of cards that will be displayed in the message.  There can be 1 or more cards. If the Rich Card contains more than one card, it is often referred to as a *carousel*. 
*/
export class RCSRichCard {
    'cardOrientation': 'VERTICAL' | 'HORIZONTAL';
    'cardWidth': 'SMALL' | 'MEDIUM';
    'cards': Array<RCSCard>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardOrientation",
            "baseName": "cardOrientation",
            "type": "string"
        },
        {
            "name": "cardWidth",
            "baseName": "cardWidth",
            "type": "string"
        },
        {
            "name": "cards",
            "baseName": "cards",
            "type": "Array<RCSCard>"
        }    ];

    static getAttributeTypeMap() {
        return RCSRichCard.attributeTypeMap;
    }
}

