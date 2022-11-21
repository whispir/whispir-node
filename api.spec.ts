import { VERSION } from "./version";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import WhispirClient from "./api";

let client;
const workspaceId = process.env.WORKSPACE_ID || 'workspaceId';
const messageId = "55294920E647F399";

beforeEach(() => {});

describe("Whispir Client", () => {
  test("should accept username and password", async () => {
    client = WhispirClient({
      host: "https://stage-ap-southeast-2.whispirdev.com/api",
      username: process.env.WHISPIR_USERNAME,
      password: process.env.WHISPIR_PASSWORD,
      apiKey: process.env.API_KEY,
    });

    client.addInterceptor((req) => {
      expect(req).toHaveProperty("headers");
      const { headers } = req;

      expect(headers["User-Agent"]).toBe(`whispir-node-${VERSION}`);
      expect(headers["Authorization"]).toBeTruthy();
      expect(headers["X-Api-Key"]).toBeTruthy();
      expect(headers["Accept"]).toBe("application/vnd.whispir.message-v1+json");
    });

    const result = await client.messages.retrieve({ workspaceId, messageId });
    const { lastResponse } = result;
    expect(lastResponse).toBeTruthy();
    expect(typeof lastResponse?.statusCode).toBe("number");
    expect(lastResponse?.headers).toBeTruthy();
  });

  test("should accept accessToken", async () => {
    client = WhispirClient({
      host: "https://stage-ap-southeast-2.whispirdev.com/api",
      username: process.env.WHISPIR_USERNAME,
      password: process.env.WHISPIR_PASSWORD,
      apiKey: process.env.API_KEY,
    });

    const { token } = await client.auth.create({});

    const client2 = WhispirClient({
      host: "https://stage-ap-southeast-2.whispirdev.com/api",
      accessToken: token,
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

    const result = await client2.messages.retrieve({ workspaceId, messageId });
    const { lastResponse } = result;
    expect(lastResponse).toBeTruthy();
    expect(typeof lastResponse?.statusCode).toBe("number");
    expect(lastResponse?.headers).toBeTruthy();
  });
});
