
import { RequestFile } from './models';
import { RCSSuggestionDialAction, RCSSuggestionDialActionWrite } from './rCSSuggestionDialAction';
import { RCSSuggestionUrlAction, RCSSuggestionUrlActionWrite } from './rCSSuggestionUrlAction';
import { RCSSuggestionViewLocationAction, RCSSuggestionViewLocationActionWrite } from './rCSSuggestionViewLocationAction';


export type RCSSuggestionWrite = {
    'text': string;
    'postbackData': string;
    'urlAction'?: RCSSuggestionUrlActionWrite;
    'dialAction'?: RCSSuggestionDialActionWrite;
    /**
    * Allows the recipient to share their location  back to Soprano.  The Share Location suggestion/action does  not have any fields, the presence of the  object itself triggers the action on the phone. 
    */
    'shareLocationAction'?: object;
    'viewLocationAction'?: RCSSuggestionViewLocationActionWrite;
}

/**
* A suggestion is an interactive button displayed on the recipient\'s message.   If the suggestion consists of only the *text* and *postbackData* fields, it is referred to as a \"normal action\" and when the user clicks that button it results in the postback data being sent back to you.   A suggestion can also be any one of urlAction, dialAction, shareLocationAction and viewLocationAction - depending on which one is included in the payload.  If the user clicks on one of these buttons, they will also return the provided postback data but also have special behaviours described in the schema.  Note that only *one* of the special actions can be included in a single suggestion. 
*/
export class RCSSuggestion {
    'text': string;
    'postbackData': string;
    'urlAction': RCSSuggestionUrlAction;
    'dialAction': RCSSuggestionDialAction;
    /**
    * Allows the recipient to share their location  back to Soprano.  The Share Location suggestion/action does  not have any fields, the presence of the  object itself triggers the action on the phone. 
    */
    'shareLocationAction': object;
    'viewLocationAction': RCSSuggestionViewLocationAction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "postbackData",
            "baseName": "postbackData",
            "type": "string"
        },
        {
            "name": "urlAction",
            "baseName": "urlAction",
            "type": "RCSSuggestionUrlAction"
        },
        {
            "name": "dialAction",
            "baseName": "dialAction",
            "type": "RCSSuggestionDialAction"
        },
        {
            "name": "shareLocationAction",
            "baseName": "shareLocationAction",
            "type": "object"
        },
        {
            "name": "viewLocationAction",
            "baseName": "viewLocationAction",
            "type": "RCSSuggestionViewLocationAction"
        }    ];

    static getAttributeTypeMap() {
        return RCSSuggestion.attributeTypeMap;
    }
}

