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
        message: {
            to: '639911234567',
            subject: `Hi there Buddy`,
            body: `Hi there from Whispir"`,
        },
    };

    const result = await client.messages.create(requestParams);
    console.log(result);
}

main()
    .catch(console.error)