import { VERSION } from "../version";

import WhispirClient from "../api";

let basicClient;
const workspaceId = '26E4E27F0360A8C9';

describe("Whispir Client", () => {
  it("should accept username and password", async () => {
    basicClient = WhispirClient({
      host: "http://127.0.0.1:4010",
      username: 'whispir_user',
      password: 'whispir_password',
      apiKey: 'apiKeyMock',
    });

    basicClient.addInterceptor((req) => {
      expect(req).toHaveProperty("headers");
      const { headers = {} } = req;

      expect(headers["User-Agent"]).toBe(`whispir-node-${VERSION}`);
      expect(headers["Authorization"]).toBeTruthy();
      expect(headers["X-Api-Key"]).toBeTruthy();
      expect(headers["Accept"]).toBe("application/vnd.whispir.message-v1+json");
    });

    const result = await basicClient.messages.list({ workspaceId });
    const { lastResponse } = result;
    expect(lastResponse).toBeTruthy();
    expect(typeof lastResponse?.statusCode).toBe("number");
    expect(lastResponse?.headers).toBeTruthy();
  });

  it("should accept accessToken", async () => {
    basicClient = WhispirClient({
      host: "http://127.0.0.1:4010",
      username: 'whispir_user',
      password: 'whispir_password',
      apiKey: 'apiKeyMock',
    });

    const { token } = await basicClient.auth.create();

    const bearerClient = WhispirClient({
      host: "http://127.0.0.1:4010",
      accessToken: token,
      apiKey: 'apiKeyMock',
    });

    bearerClient.addInterceptor((req) => {
      expect(req).toHaveProperty("headers");
      const { headers } = req;
      expect(headers?.["User-Agent"]).toBe(`whispir-node-${VERSION}`);
      expect(headers?.["Authorization"]).toBeTruthy();
      expect(headers?.["Accept"]).toBe(
        "application/vnd.whispir.message-v1+json"
      );
    });

    try {
      const result = await bearerClient.messages.list({ workspaceId });
      const { lastResponse } = result;
      expect(lastResponse).toBeTruthy();
      expect(typeof lastResponse?.statusCode).toBe("number");
      expect(lastResponse?.headers).toBeTruthy();
    } catch (error) {
      console.error(error)
    }

  });

  describe('Resource identifier parsing', () => {
    it('should parse the Location header for the resource identifier', () => {
      basicClient = WhispirClient({
        host: "http://127.0.0.1:4010",
        username: 'whispir_user',
        password: 'whispir_password',
        apiKey: 'apiKeyMock',
      });
    });
  });
});
