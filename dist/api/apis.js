"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
__exportStar(require("./activitiesApi"), exports);
__exportStar(require("./authApi"), exports);
__exportStar(require("./callbacksApi"), exports);
__exportStar(require("./contactsApi"), exports);
__exportStar(require("./customListsApi"), exports);
__exportStar(require("./distributionListsApi"), exports);
__exportStar(require("./eventsApi"), exports);
__exportStar(require("./importsApi"), exports);
__exportStar(require("./keysApi"), exports);
__exportStar(require("./messagesApi"), exports);
__exportStar(require("./resourcesApi"), exports);
__exportStar(require("./responseRulesApi"), exports);
__exportStar(require("./scenariosApi"), exports);
__exportStar(require("./templatesApi"), exports);
__exportStar(require("./usersApi"), exports);
__exportStar(require("./workspacesApi"), exports);
class HttpError extends Error {
    constructor(body) {
        super(body.errorText);
        this.body = body;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
;
