
import { RequestFile } from './models';
import { LinkInner, LinkInnerWrite } from './linkInner';


export type ResourceWrite = {
    /**
    * Specifies the name of the file being uploaded. The extension of the file too is allowed to be present in the name.
    */
    'name': string;
    /**
    * Specifies the permission scope of the file being uploaded. The scope defines the access restriction of the resource. It can only be one of the following:  - **public**: Public files have an addressable URL and are available publicly - **private**: Private files have no URL and are only available for bulk messaging purposes and for importing contacts
    */
    'scope': 'private' | 'public';
    /**
    * The mime type of the file that is being uploaded. The type is dependent on the scope of the resource.  - **public**: Public files can be any mimetype, e.g. text/HTML or text/CSV - **private**: Private files are restricted to CSV, JSON and XML. The respective mimetypes to be used are text/csv, application/json, application/xml
    */
    'mimeType': string;
    /**
    * The base64 representation of the file being submitted.
    */
    'derefUri': string;
}

/**
* When you’re creating a resource, the following conditions apply:  - Maximum of 10 MB per file being uploaded - Transactions have an enforced timeout - Resources are available in the Whispir platform for a limited time [90 days]. After this time they are automatically cleaned. This is a configurable setting for Whispir Administrators
*/
export class Resource {
    /**
    * The identifier for the resource.
    */
    'id': string;
    /**
    * Specifies the name of the file being uploaded. The extension of the file too is allowed to be present in the name.
    */
    'name': string;
    /**
    * Specifies the permission scope of the file being uploaded. The scope defines the access restriction of the resource. It can only be one of the following:  - **public**: Public files have an addressable URL and are available publicly - **private**: Private files have no URL and are only available for bulk messaging purposes and for importing contacts
    */
    'scope': 'private' | 'public';
    /**
    * The mime type of the file that is being uploaded. The type is dependent on the scope of the resource.  - **public**: Public files can be any mimetype, e.g. text/HTML or text/CSV - **private**: Private files are restricted to CSV, JSON and XML. The respective mimetypes to be used are text/csv, application/json, application/xml
    */
    'mimeType': string;
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link object, describing all discoverable resources in relation to the original request.
    */
    'link': Array<LinkInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        },
        {
            "name": "derefUri",
            "baseName": "derefUri",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<LinkInner>"
        }    ];

    static getAttributeTypeMap() {
        return Resource.attributeTypeMap;
    }
}

