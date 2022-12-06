
import { RequestFile } from './models';
import { MessageAttachment, MessageAttachmentWrite } from './messageAttachment';


export type MessageVoiceResourcesWrite = {
    /**
    * The header and body attachments containing WAV files. Read the following section for configuring each voice field attachment:  In addition to the parameters already specified for the TTS Voice calls, each attached WAV file must have the `attachmentDesc` named these specific values, to override the TTS voice:  | Voice field    | attachmentDesc | | -------------- |--------------- | | header         | `\"voiceintro.wav\"` | | body           | `\"voicebody.wav\"` |
    */
    'attachment'?: Array<MessageAttachmentWrite>;
}

/**
* Provides a configuration object for specifying custom audio for the voice header and body.
*/
export class MessageVoiceResources {
    /**
    * The header and body attachments containing WAV files. Read the following section for configuring each voice field attachment:  In addition to the parameters already specified for the TTS Voice calls, each attached WAV file must have the `attachmentDesc` named these specific values, to override the TTS voice:  | Voice field    | attachmentDesc | | -------------- |--------------- | | header         | `\"voiceintro.wav\"` | | body           | `\"voicebody.wav\"` |
    */
    'attachment': Array<MessageAttachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "Array<MessageAttachment>"
        }    ];

    static getAttributeTypeMap() {
        return MessageVoiceResources.attributeTypeMap;
    }
}

