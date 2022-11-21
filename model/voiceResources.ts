
import { RequestFile } from './models';
import { Attachment } from './attachment';

/**
* Provides a configuration object for specifying custom audio for the voice header and body.
*/
export class VoiceResources {
    /**
    * The header and body attachments containing WAV files. Read the following section for configuring each voice field attachment:  In addition to the parameters already specified for the TTS Voice calls, each attached WAV file must have the `attachmentDesc` named these specific values, to override the TTS voice:  | Voice field    | attachmentDesc | | -------------- |--------------- | | header         | `\"voiceintro.wav\"` | | body           | `\"voicebody.wav\"` |
    */
    'attachment'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return VoiceResources.attributeTypeMap;
    }
}

