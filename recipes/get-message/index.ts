import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import WhispirClient from '../../api';

const client = WhispirClient({
    host: 'https://stage-ap-southeast-2.whispirdev.com/api',
    username: process.env.WHISPIR_USERNAME,
    password: process.env.WHISPIR_PASSWORD,
    apiKey: process.env.API_KEY,
});

const workspaceId = process.env.WORKSPACE_ID || '';

async function main() {
    const requestParams = {
        workspaceId: workspaceId,
        to: '639911234567',
        subject: `Hi there Buddy`,
        body: `Hi there from Whispir"`,
    };

    const createResult = await client.messages.create(requestParams);

    const result = await client.messages.retrieve({ workspaceId, messageId: createResult.id });

    console.log(result);
}

main()
    .catch(console.error)