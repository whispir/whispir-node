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
    const { token } = await client.auth.create({});

    const client2 = WhispirClient({
        host: 'https://stage-ap-southeast-2.whispirdev.com/api',
        accessToken: token,
        apiKey: process.env.API_KEY,
    });

    const result = await client2.messages.retrieve({ workspaceId, messageId: '55294920E647F399' });
    console.log(result);
}

main()
    .catch(console.error)