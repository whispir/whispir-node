
import { RequestFile } from './models';
import { WAContent, WAContentWrite } from './wAContent';


export type WhatsAppWrite = {
    /**
    * The type of WhatsApp message to be sent, e.g. \"template\".  Whispir currently only supports type \"template\". 
    */
    'type': 'template';
    /**
    * The name of the template to be sent  > Must be the same as how it appears in your WhatsApp Business Manager 
    */
    'name': string;
    /**
    * The language to use for your WhatsApp Template e.g. \"en\", \"en_AU\", \"en_SG\" etc. > Must be the same as how it appears in your WhatsApp Business Manager  > Supported in v2 **only**
    */
    'language'?: string;
    /**
    * Array of positional parameters that are used to personalise the body of the WhatsApp message.   For example,  \"Hello {{1}}!\"  would become  \"Hello John!\"  if \"John\" is the first positional parameter  > Supported in v2 **only**
    */
    'parameters'?: Array<string>;
    'content'?: WAContentWrite;
}

/**
* ### Overview  Customers can send templated WhatsApp messages via Whispir\'s API.   Templates must first be submitted for approval by WhatsApp in your WhatsApp Business Manager account before any template messages can be sent from Whispir.   Please reach out to your Whispir account manager to help you get started.   #### WhatsApp Messages via Rich Message Templates (v2) Note that from **October 2025** WhatsApp messages can also be configured in Whispir Rich Message Templates. These templates can then be used to send WhatsApp messages via the Whispir API.    Please contact your Whispir account manager to see how you can have this feature enabled.   ##### Examples Sending via Rich Message Templates is shown in the following examples: * _WhatsApp Message via WhatsApp Enabled Rich Message Template_ * _WhatsApp Bulk Message via Rich Message Template_ * _WhatsApp Message via Rich Message Template with Field Overrides_  Customers who have this feature enabled will also have access to using the new _parameters_ object, shown in the following examples: * _WhatsApp Message with Throttling, Alias, Web Link and Body Positional Parameters_ * _WhatsApp Bulk Message with Web Link and Body Positional Parameters_  **Overriding fields from Rich Message Templates (RMT)**  Customers have the ability to configure the body positional parameters, alias etc. as part of a Rich Message Template (RMT).     By default, when sending via our API with a given RMT, all values will be collected from the provided RMT. (See _WhatsApp Message via WhatsApp Enabled Rich Message Template_ example)  However, the platform allows you to include both the Rich Message Template reference **and** a WhatsApp object in the API payload.   Please note that in this case the platform will give priority to the message configuration in the **WhatsApp object** over the Rich Message Template. (see _WhatsApp Message via Rich Message Template with Field Overrides_ example).  For clarity and simplicity,  it is recommended to choose to send your WhatsApp message via one of: * a WhatsApp enabled Rich Message Template previously defined in our portal  * or providing a WhatsApp object in the payload with all the required details  **v2 compatibility**  Please note that our WhatsApp v2 version only supports the use of positional body parameters (via the new _parameters_ object). The _content_ object is not supported.   
*/
export class WhatsApp {
    /**
    * The type of WhatsApp message to be sent, e.g. \"template\".  Whispir currently only supports type \"template\". 
    */
    'type': 'template';
    /**
    * The name of the template to be sent  > Must be the same as how it appears in your WhatsApp Business Manager 
    */
    'name': string;
    /**
    * The language to use for your WhatsApp Template e.g. \"en\", \"en_AU\", \"en_SG\" etc. > Must be the same as how it appears in your WhatsApp Business Manager  > Supported in v2 **only**
    */
    'language': string;
    /**
    * Array of positional parameters that are used to personalise the body of the WhatsApp message.   For example,  \"Hello {{1}}!\"  would become  \"Hello John!\"  if \"John\" is the first positional parameter  > Supported in v2 **only**
    */
    'parameters': Array<string>;
    'content': WAContent;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<string>"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "WAContent"
        }    ];

    static getAttributeTypeMap() {
        return WhatsApp.attributeTypeMap;
    }
}

