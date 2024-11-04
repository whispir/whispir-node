"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
const mockHost = 'http://127.0.0.1:4010';
const mockApiKey = 'apiKeyMock';
const mockUsername = 'usernameMock';
const mockPassword = 'passwordMock';
const mockWorkspaceId = '26E4E27F0360A8C9';
const mockMessageId = '29AB86D82E9B9A29';
describe("resources", () => {
    describe('Resource identifier parsing', () => {
        it('should parse the Location header for the resource identifier for POST requests', async () => {
            const client = (0, api_1.default)({
                host: mockHost,
                username: mockUsername,
                password: mockPassword,
                apiKey: mockApiKey,
            });
            const message = await client.messages.create({
                to: '61400400400',
                subject: 'My first message',
                body: 'Hello from Whispir Node SDK!',
                workspaceId: mockWorkspaceId,
            });
            expect(message.id).toEqual(expect.any(String));
        });
        it('should NOT parse the Location header for the resource identifier for non-POST requests', async () => {
            const client = (0, api_1.default)({
                host: mockHost,
                username: mockUsername,
                password: mockPassword,
                apiKey: mockApiKey,
            });
            const message = await client.messages.retrieve({
                workspaceId: mockWorkspaceId,
                messageId: mockMessageId,
            });
            // @ts-expect-error
            expect(message.id).toEqual(undefined);
        });
    });
    describe('headers', () => {
        it('should set the Accept header for the relevant resource internally', async () => {
            const client = (0, api_1.default)({
                host: mockHost,
                username: mockUsername,
                password: mockPassword,
                apiKey: mockApiKey,
            });
            const mockClientInterceptor = jest.fn();
            client.addInterceptor(mockClientInterceptor);
            await client.users.list();
            expect(mockClientInterceptor).toBeCalledWith(expect.objectContaining({
                headers: expect.objectContaining({
                    Accept: 'application/vnd.whispir.user-v1+json',
                })
            }));
        });
        it('should set the Content-Type header for the relevant resource internally', async () => {
            const client = (0, api_1.default)({
                host: mockHost,
                username: mockUsername,
                password: mockPassword,
                apiKey: mockApiKey,
            });
            const mockClientInterceptor = jest.fn();
            client.addInterceptor(mockClientInterceptor);
            await client.users.create({
                userName: 'mockUser',
                password: 'mockPassword',
                firstName: 'mockFirstName',
                lastName: 'mockLastName',
                workCountry: 'Australia',
                timezone: 'Australia/Melbourne',
            });
            expect(mockClientInterceptor).toBeCalledWith(expect.objectContaining({
                headers: expect.objectContaining({
                    Accept: 'application/vnd.whispir.user-v1+json',
                })
            }));
        });
    });
});
