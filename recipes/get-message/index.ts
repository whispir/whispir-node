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
    const result = await client.messages.retrieve({ workspaceId, messageId: '55294920E647F399' });

    console.log(result);
}

main()
    .catch(console.error)