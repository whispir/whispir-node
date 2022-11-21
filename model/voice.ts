
import { RequestFile } from './models';
import { VoiceResources } from './voiceResources';

/**
* The voice channel payload, used when sending a Message.  Calls are charged in 30 seconds intervals (rounded up).  Text max length is 5000 characters.  The maximum payload size rule applies for the body, header and type usage.  <!-- theme: info -->  > #### Requirements > > In order to use this functionality your account must be enabled to use the Voice module. If you\'re unsure whether you can use Voice, please contact the Whispir Support Team.  ---  ### Overview  Whispir’s API provides you with the ability to send a voice message to any landline phone or mobile phone around the world, both via text-to-speech and custom WAV files to be played over the phone  Whispir’s Voice module can easily connect all recipients to a single bridged call, simplifying your teleconferences and ensuring your message gets through  Each voice call is made up of three parts:  - Message introduction: Either Text-To-Speech (TTS) or a WAV file - Message acceptance: Asks the recipient to press a button or insert a PIN to hear the message - Message content: The concatenation of the message subject and message body. The latter can be either TTS or a WAV file. At the end the recipient will be given the possibility to acknowledge the message. <!-- theme: info -->  > #### Adding pauses > > Pauses can be added to conference call details using the `+` character. Each `+` represents 1 second. Pauses allow some wait time to ensure the conference call service is ready to accept the account number and PIN.  ### WAV files requirements  WAV files can be used in place of Text-To-Speech to provide a custom `header` and `body`.  Before a WAV file can be used for the Voice module, it needs to conform to certain criteria:  - All the WAV files combined must not exceed 10 MB in total file size - All the WAV files must be a maximum of 8 bit, 8000 Hz, 1ch, 64 kbps - If a WAV file is outside these criteria please use TTS instead
*/
export class Voice {
    /**
    * Introduction text played with the subject.
    */
    'header'?: string;
    /**
    * Body text, read out to the recipient after the subject and header.
    */
    'body': string;
    /**
    * The conference call details of the voice message. Required when no conference call is being used. The minimum string to be used is specified in the example. Read the following section for information on each field.  The following parameters can be set by specifying the value after the `:` in the `type` string:  | Field         | Description | | ------------- |------------ | | Pin           | The access code required to be inserted from the recipient to hear the Voice message after the \"header\" is over. It can be left blank and then the user will be asked to proceed dialling \"1\". <br><br> For example, `7171`. <br><br> If the right code is inserted then \"subject\" and \"body\" of the Voice Message will be reproduced. The user will be able to dial \"1\" to replay the message, \"2\" to join the conference call or \"3\" to receive the details to dial in later. <br><br> In this last case the details - a Dial-In number and a PIN - will be repeated 3 times. | | ConfCall      | The teleconference line that will be used in the voice call. <br><br> For example, `1800123123`. <br><br> It is possible to reference this value in other channels using the **@@teleconf_number@@** custom variable. | | ConfAccountNo | The teleconference account or room number that is used in the voice call. <br><br> For example, `098711234`. <br><br> It is possible to reference this value in other channels using the **@@teleconf_account@@** custom variable. | | ConfPinNo     | The teleconference room PIN that is used in the voice call. <br><br> For example, `8181`. <br><br> It is possible to reference this value in other channels using the **@@teleconf_pin@@** custom variable. | | ConfModPinNo  | The teleconference moderator PIN that is used in the voice call. <br><br> For example, `4242`. <br><br> It is possible to reference this value in other channels using the **@@teleconf_mod_pin@@** custom variable. |
    */
    'type': string;
    /**
    * Read-only property returned from the Whispir Platform. This property has no meaning to the API consumer.
    */
    'footer'?: '';
    /**
    * Read-only property returned from the Whispir Platform. This property has no meaning to the API consumer.
    */
    'other'?: '';
    'resources'?: VoiceResources;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "other",
            "baseName": "other",
            "type": "string"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "VoiceResources"
        }    ];

    static getAttributeTypeMap() {
        return Voice.attributeTypeMap;
    }
}

