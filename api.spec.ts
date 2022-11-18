import { expect } from 'chai';
import dotenv from 'dotenv';
import { VERSION } from './version';
dotenv.config({ path: '.env' });

import WhispirClient from './api';

let client;
const workspaceId = process.env.WORKSPACE_ID;
const messageId = '55294920E647F399';

beforeEach(() => {
})

describe("Whispir Client", () => {
    it("should accept username and password", async () => {
        client = WhispirClient({
            host: 'https://stage-ap-southeast-2.whispirdev.com/api',
            username: process.env.WHISPIR_USERNAME,
            password: process.env.WHISPIR_PASSWORD,
            apiKey: process.env.API_KEY,
        });

        client.addInterceptor((req) => {
            expect(req).to.have.property('headers')
            const { headers } = req;

            expect(headers['User-Agent']).to.be.eq(`whispir-node-${VERSION}`);
            expect(headers['Authorization']).to.not.be.empty;
            expect(headers['X-Api-Key']).to.not.be.empty;
            expect(headers['Accept']).to.be.eq('application/vnd.whispir.message-v1+json');
        })

        const result = await client.messages.retrieve({ workspaceId, messageId })
        const { lastResponse } = result;
        expect(lastResponse).to.not.be.empty;
        expect(lastResponse?.statusCode).to.be.a('number');
        expect(lastResponse?.headers).to.not.be.empty;
    })

    it("should accept accessToken", async () => {
        client = WhispirClient({
            host: 'https://stage-ap-southeast-2.whispirdev.com/api',
            username: process.env.WHISPIR_USERNAME,
            password: process.env.WHISPIR_PASSWORD,
            apiKey: process.env.API_KEY,
        });

        const { token } = await client.auth.create({});

        const client2 = WhispirClient({
            host: 'https://stage-ap-southeast-2.whispirdev.com/api',
            accessToken: token,
        });

        client2.addInterceptor((req) => {
            expect(req).to.have.property('headers');
            const { headers } = req;
            expect(headers['User-Agent']).to.be.eq(`whispir-node-${VERSION}`);
            expect(headers['Authorization']).to.not.be.empty;
            expect(headers['Accept']).to.be.eq('application/vnd.whispir.message-v1+json');
        })

        const result = await client2.messages.retrieve({ workspaceId, messageId });
        const { lastResponse } = result;
        expect(lastResponse).to.not.be.empty;
        expect(lastResponse?.statusCode).to.be.a('number');
        expect(lastResponse?.headers).to.not.be.empty;
    })
})