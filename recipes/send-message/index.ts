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

    const createContact = await client.contacts.create({
        workspaceId: workspaceId,
        firstName: 'Whispir Firstname',
        lastName: 'Whispir Lastname',
        workMobilePhone1: '639911234567',
        workEmailAddress1: 'user@example.com',
        workCountry: 'Australia',
        timezone: 'Australia/Melbourne'
    });

    const requestParams = {
        workspaceId: workspaceId,
        to: createContact.id,
        subject: `Hi there Buddy`,
        body: `Hi there from Whispir"`,
    };

    const result = await client.messages.create(requestParams);
    console.log(result);
}

main()
    .catch(console.error)