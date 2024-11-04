import { DeliveryCategory, DeliveryCategoryWrite } from './deliveryCategory';
import { DeliveryStatus, DeliveryStatusWrite } from './deliveryStatus';
import { Link } from './link';
export type MessageStatusWrite = {
    /**
    * Present when `view` is `summary`.
    */
    'categories'?: Array<DeliveryCategoryWrite>;
    /**
    * Present when `view` is `detailed`.
    */
    'name'?: string;
    /**
    * Present when `view` is `detailed`.
    */
    'info'?: string;
    /**
    * Present when `view` is `detailed`.
    */
    'status'?: Array<DeliveryStatusWrite>;
};
export declare class MessageStatus {
    /**
    * A [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) link array, describing all discoverable resources in relation to the original request.
    */
    'link': Array<Link>;
    /**
    * Present when `view` is `summary`.
    */
    'categories': Set<DeliveryCategory>;
    /**
    * Present when `view` is `detailed`.
    */
    'name': string;
    /**
    * Present when `view` is `detailed`.
    */
    'info': string;
    /**
    * Present when `view` is `detailed`.
    */
    'status': Set<DeliveryStatus>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
