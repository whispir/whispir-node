"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voice = void 0;
/**
* The voice channel payload, used when sending a Message.  Calls are charged in 30 seconds intervals (rounded up).  Text max length is 5000 characters.  The maximum payload size rule applies for the body, header and type usage.  <!-- theme: info -->  > #### Requirements > > In order to use this functionality your account must be enabled to use the Voice module. If you\'re unsure whether you can use Voice, please contact the Whispir Support Team.  ---  ### Overview  Whispir’s API provides you with the ability to send a voice message to any landline phone or mobile phone around the world, both via text-to-speech and custom WAV files to be played over the phone  Whispir’s Voice module can easily connect all recipients to a single bridged call, simplifying your teleconferences and ensuring your message gets through  Each voice call is made up of three parts:  - Message introduction: Either Text-To-Speech (TTS) or a WAV file - Message acceptance: Asks the recipient to press a button or insert a PIN to hear the message - Message content: The concatenation of the message subject and message body. The latter can be either TTS or a WAV file. At the end the recipient will be given the possibility to acknowledge the message. <!-- theme: info -->  > #### Adding pauses > > Pauses can be added to conference call details using the `+` character. Each `+` represents 1 second. Pauses allow some wait time to ensure the conference call service is ready to accept the account number and PIN.  ### WAV files requirements  WAV files can be used in place of Text-To-Speech to provide a custom `header` and `body`.  | Voice field    | attachmentDesc | | -------------- |--------------- | | header         | `\"voiceintro.wav\"` | | body           | `\"voicebody.wav\"` |  Before a WAV file can be used for the Voice module, it needs to conform to certain criteria:  - All the WAV files combined must not exceed 10 MB in total file size - All the WAV files must be a maximum of 8 bit, 8000 Hz, 1ch, 64 kbps - If a WAV file is outside these criteria please use TTS instead
*/
class Voice {
    static getAttributeTypeMap() {
        return Voice.attributeTypeMap;
    }
}
exports.Voice = Voice;
Voice.discriminator = undefined;
Voice.attributeTypeMap = [
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
        "type": "Attachments"
    }
];
