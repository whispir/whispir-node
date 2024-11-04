"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackAuth = void 0;
/**
* The authentication model details. You will receive -   For `queryparam` - `?Auth={{KeyValue}}`  For `httpheader` - `X-Whispir-Callback-Key: {{KeyValue}}`  For `basicauth` - `Authorization: Basic {{KeyValue}}`  For `bearertoken` - `Authorization: Bearer {{KeyValue}}`
*/
class CallbackAuth {
    static getAttributeTypeMap() {
        return CallbackAuth.attributeTypeMap;
    }
}
exports.CallbackAuth = CallbackAuth;
CallbackAuth.discriminator = undefined;
CallbackAuth.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    }
];
