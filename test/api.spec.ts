import { VERSION } from "../version";

import WhispirClient from "../api";

let client;
const workspaceId = '26E4E27F0360A8C9';

beforeEach(() => { });

describe("Whispir Client", () => {
  test("should accept username and password", async () => {
    client = WhispirClient({
      host: "http://127.0.0.1:4010",
      username: 'whispir_user',
      password: 'whispir_password',
      apiKey: 'apiKeyMock',
    });

    client.addInterceptor((req) => {
      expect(req).toHaveProperty("headers");
      const { headers = {} } = req;

      expect(headers["User-Agent"]).toBe(`whispir-node-${VERSION}`);
      expect(headers["Authorization"]).toBeTruthy();
      expect(headers["X-Api-Key"]).toBeTruthy();
      expect(headers["Accept"]).toBe("application/vnd.whispir.message-v1+json");
    });

    const result = await client.messages.list({ workspaceId });
    const { lastResponse } = result;
    expect(lastResponse).toBeTruthy();
    expect(typeof lastResponse?.statusCode).toBe("number");
    expect(lastResponse?.headers).toBeTruthy();
  });

  test("should accept accessToken", async () => {
    client = WhispirClient({
      host: "http://127.0.0.1:4010",
      username: 'whispir_user',
      password: 'whispir_password',
      apiKey: 'apiKeyMock',
    });

    const { token } = await client.auth.create({});

    const client2 = WhispirClient({
      host: "http://127.0.0.1:4010",
      accessToken: token,
      apiKey: 'apiKeyMock',
    });

    client2.addInterceptor((req) => {
      expect(req).toHaveProperty("headers");
      const { headers } = req;
      expect(headers?.["User-Agent"]).toBe(`whispir-node-${VERSION}`);
      expect(headers?.["Authorization"]).toBeTruthy();
      expect(headers?.["Accept"]).toBe(
        "application/vnd.whispir.message-v1+json"
      );
    });

    try {
      const result = await client2.messages.list({ workspaceId });
      const { lastResponse } = result;
      expect(lastResponse).toBeTruthy();
      expect(typeof lastResponse?.statusCode).toBe("number");
      expect(lastResponse?.headers).toBeTruthy();
    } catch (error) {
      console.error(error)
    }

  });
});
