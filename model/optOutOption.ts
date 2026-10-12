
import { RequestFile } from './models';


export type OptOutOptionWrite = {
    /**
    * This is a URL link to the web channel unsubscribe content for `GET` requests, and for one-click unsubscribe functionality via `POST` requests.
    */
    'rmsUnsubscribeUrl'?: string;
    /**
    * This is the API mapping code or ID triggered for one-click unsubscribe functionality. This code can be retrieved from the API Mapping page.
    */
    'oneClickApiMapping'?: string;
}

/**
* The opt-out option payload is optional in line with the Email Distribution List standardization making it a requirement for recipients to opt out of email lists easily, which will add up to a sender\'s reputation and deliverability.  The `rmsUnsubscribeUrl` is a URL link to the web channel unsubscribe content for `GET` requests, and for one-click unsubscribe functionality via `POST` requests. This is in line with the [RFC-2369](https://www.ietf.org/rfc/rfc2369.txt) (*The Use of URLs as Meta-Syntax for Core Mail List Commands and their Transport through Message Header Fields*). This will append the `List-Unsubscribe` header in the email message for distribution lists with the URL `rmsUnsubscribeUrl` info as its value.  The `oneClickApiMapping` property requires you to have an existing API Mapping and have access to its details. This API Mapping is triggered for one-click unsubscribe functionality. This is in line with the [RFC-8058](https://www.ietf.org/rfc/rfc8058.txt) (*Signaling One-Click Functionality for List Email Headers*). This will append the `List-Unsubscribe-Post` header in the email message for distribution lists with the `List-Unsubscribe=One-Click` header as its `POST` endpoint for one-click.  Both the `rmsUnsubscribeUrl` and `oneClickApiMapping` properties are optional, but `rmsUnsubscribeUrl` is required to enable unsubscribe, `oneClickApiMapping` is required to enable one-click unsubscribe.
*/
export class OptOutOption {
    /**
    * This is a URL link to the web channel unsubscribe content for `GET` requests, and for one-click unsubscribe functionality via `POST` requests.
    */
    'rmsUnsubscribeUrl': string;
    /**
    * This is the API mapping code or ID triggered for one-click unsubscribe functionality. This code can be retrieved from the API Mapping page.
    */
    'oneClickApiMapping': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rmsUnsubscribeUrl",
            "baseName": "rmsUnsubscribeUrl",
            "type": "string"
        },
        {
            "name": "oneClickApiMapping",
            "baseName": "oneClickApiMapping",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OptOutOption.attributeTypeMap;
    }
}

