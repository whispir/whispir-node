import WhispirClient from "../api";

const mockWorkspaceId = '26E4E27F0360A8C9';
const mockMessageId = '29AB86D82E9B9A29';

describe('Resource identifier parsing', () => {
    it('should parse the Location header for the resource identifier for POST requests', async () => {
        const client = WhispirClient({
            host: "http://127.0.0.1:4010",
            username: 'whispir_user',
            password: 'whispir_password',
            apiKey: 'apiKeyMock',
        });

        const message = await client.messages.create({
            to: '61400400400',
            subject: 'My first message',
            body: 'Hello from Whispir Node SDK!',
            workspaceId: mockWorkspaceId,
        })

        expect(message.id).toEqual(expect.any(String));
    });

    it('should NOT parse the Location header for the resource identifier for non-POST requests', async () => {
        const client = WhispirClient({
            host: "http://127.0.0.1:4010",
            username: 'whispir_user',
            password: 'whispir_password',
            apiKey: 'apiKeyMock',
        });

        const message = await client.messages.retrieve({
            workspaceId: mockWorkspaceId,
            messageId: mockMessageId,
        })

        // @ts-expect-error
        expect(message.id).toEqual(undefined);
    });
});
