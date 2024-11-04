"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const version_1 = require("../version");
const api_1 = __importDefault(require("../api"));
let client;
const workspaceId = '26E4E27F0360A8C9';
beforeEach(() => { });
describe("Whispir Client", () => {
    test("should accept username and password", async () => {
        client = (0, api_1.default)({
            host: "http://127.0.0.1:4010",
            username: 'whispir_user',
            password: 'whispir_password',
            apiKey: 'apiKeyMock',
        });
        client.addInterceptor((req) => {
            expect(req).toHaveProperty("headers");
            const { headers = {} } = req;
            expect(headers["User-Agent"]).toBe(`whispir-node-${version_1.VERSION}`);
            expect(headers["Authorization"]).toBeTruthy();
            expect(headers["X-Api-Key"]).toBeTruthy();
            expect(headers["Accept"]).toBe("application/vnd.whispir.message-v1+json");
        });
        const result = await client.messages.list({ workspaceId });
        const { lastResponse } = result;
        expect(lastResponse).toBeTruthy();
        expect(typeof (lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.statusCode)).toBe("number");
        expect(lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.headers).toBeTruthy();
    });
    test("should accept accessToken", async () => {
        client = (0, api_1.default)({
            host: "http://127.0.0.1:4010",
            username: 'whispir_user',
            password: 'whispir_password',
            apiKey: 'apiKeyMock',
        });
        const { token } = await client.auth.create({});
        const client2 = (0, api_1.default)({
            host: "http://127.0.0.1:4010",
            accessToken: token,
            apiKey: 'apiKeyMock',
        });
        client2.addInterceptor((req) => {
            expect(req).toHaveProperty("headers");
            const { headers } = req;
            expect(headers === null || headers === void 0 ? void 0 : headers["User-Agent"]).toBe(`whispir-node-${version_1.VERSION}`);
            expect(headers === null || headers === void 0 ? void 0 : headers["Authorization"]).toBeTruthy();
            expect(headers === null || headers === void 0 ? void 0 : headers["Accept"]).toBe("application/vnd.whispir.message-v1+json");
        });
        try {
            const result = await client2.messages.list({ workspaceId });
            const { lastResponse } = result;
            expect(lastResponse).toBeTruthy();
            expect(typeof (lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.statusCode)).toBe("number");
            expect(lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.headers).toBeTruthy();
        }
        catch (error) {
            console.error(error);
        }
    });
});
