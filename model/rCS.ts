
import { RequestFile } from './models';
import { RCSMedia, RCSMediaWrite } from './rCSMedia';
import { RCSRichCard, RCSRichCardWrite } from './rCSRichCard';
import { RCSSuggestion, RCSSuggestionWrite } from './rCSSuggestion';


export type RCSWrite = {
    /**
    * Text string for simple messages. 
    */
    'text'?: string;
    'media'?: RCSMediaWrite;
    'richCard'?: RCSRichCardWrite;
    'suggestions'?: Array<RCSSuggestionWrite>;
}

/**
* ### Overview  RCS (Rich Communication Services) is a modern messaging standard designed to upgrade traditional SMS and MMS on mobile phones. It enables richer features such as read receipts, typing indicators, high‑resolution media sharing, group chats, and interactive buttons. RCS messages are sent over the internet (mobile data or Wi‑Fi) but are integrated directly into a device’s default messaging app.   #### RCS Message  The RCS message can have one of the three following elements:  * Text * Media * Rich Card  followed by an optional:  * Suggestions list (for interactive buttons displayed at the bottom of the message)
*/
export class RCS {
    /**
    * Text string for simple messages. 
    */
    'text': string;
    'media': RCSMedia;
    'richCard': RCSRichCard;
    'suggestions': Array<RCSSuggestion>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "media",
            "baseName": "media",
            "type": "RCSMedia"
        },
        {
            "name": "richCard",
            "baseName": "richCard",
            "type": "RCSRichCard"
        },
        {
            "name": "suggestions",
            "baseName": "suggestions",
            "type": "Array<RCSSuggestion>"
        }    ];

    static getAttributeTypeMap() {
        return RCS.attributeTypeMap;
    }
}

