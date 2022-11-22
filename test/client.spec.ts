import { VERSION } from "../version";

import WhispirClient from "../api";

const mockHost = 'http://127.0.0.1:4010';
const mockApiKey = 'apiKeyMock';
const mockUsername = 'usernameMock';
const mockPassword = 'passwordMock';
const mockAccessToken = 'accessTokenMock';

describe("client", () => {
  describe('authentication & authorization', () => {
    it("should accept username and password", async () => {
      const client = WhispirClient({
        host: mockHost,
        username: mockUsername,
        password: mockPassword,
        apiKey: mockApiKey,
      });

      const result = await client.users.list();

      expect(result.lastResponse.statusCode).toBeGreaterThanOrEqual(200);
      expect(result.lastResponse.statusCode).toBeLessThan(300);
    });

    it("should accept accessToken", async () => {
      const basicClient = WhispirClient({
        host: mockHost,
        username: mockUsername,
        password: mockPassword,
        apiKey: mockApiKey,
      });

      const { token } = await basicClient.auth.create();

      const bearerClient = WhispirClient({
        host: mockHost,
        accessToken: token,
        apiKey: mockApiKey,
      });

      const result = await bearerClient.users.list();

      expect(result.lastResponse.statusCode).toBeGreaterThanOrEqual(200);
      expect(result.lastResponse.statusCode).toBeLessThan(300);
    });
  });

  describe('headers', () => {
    it('should set the User-Agent header to include SDK information', async () => {
      const client = WhispirClient({
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
          'User-Agent': `whispir-node-${VERSION}`,
        })
      }));
    });

    it('should set the Authorization header to Basic when provided with username/password', async () => {
      const client = WhispirClient({
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
          Authorization: expect.stringContaining('Basic')
        })
      }));
    });

    it('should set the Authorization header to Bearer when provided with accessToken', async () => {
      const client = WhispirClient({
        host: mockHost,
        accessToken: mockAccessToken,
        apiKey: mockApiKey,
      });

      const mockClientInterceptor = jest.fn();
      client.addInterceptor(mockClientInterceptor);
      await client.users.list();

      expect(mockClientInterceptor).toBeCalledWith(expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: expect.stringContaining('Bearer')
        })
      }));
    });

    it('should set the X-Api-Key header when provided with apiKey', async () => {
      const client = WhispirClient({
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
          'X-Api-Key': expect.any(String),
        })
      }));
    });
  });

  describe('interceptor', () => {
    it('should callback the interceptor provided to the client with the request', async () => {
      const client = WhispirClient({
        host: mockHost,
        username: mockUsername,
        password: mockPassword,
        apiKey: mockApiKey,
      });

      const mockClientInterceptor = jest.fn();

      client.addInterceptor(mockClientInterceptor);
      await client.users.list();

      expect(mockClientInterceptor).toBeCalledWith(expect.objectContaining({
        headers: expect.any(Object),
        method: 'GET',
      }))
    });

    it('should callback the interceptor provided to the resource with the request', async () => {
      const client = WhispirClient({
        host: mockHost,
        username: mockUsername,
        password: mockPassword,
        apiKey: mockApiKey,
      });

      const mockResourceInterceptor = jest.fn();
      client.users.addInterceptor(mockResourceInterceptor);
      await client.users.list();

      expect(mockResourceInterceptor).toBeCalledWith(expect.objectContaining({
        headers: expect.any(Object),
        method: 'GET',
      }))
    });

    it('should callback the interceptors provided to the client and resource with the request', async () => {
      const client = WhispirClient({
        host: mockHost,
        username: mockUsername,
        password: mockPassword,
        apiKey: mockApiKey,
      });

      const mockClientInterceptor = jest.fn();
      const mockResourceInterceptor = jest.fn();

      client.addInterceptor(mockClientInterceptor);
      client.users.addInterceptor(mockResourceInterceptor);
      await client.users.list();

      const expectedCall = expect.objectContaining({
        headers: expect.any(Object),
        method: 'GET',
      });
      expect(mockClientInterceptor).toBeCalledWith(expectedCall);
      expect(mockResourceInterceptor).toBeCalledWith(expectedCall);
    });
  });
});
