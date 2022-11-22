import WhispirClient from 'whispir';
import env from 'dotenv';

env.config();

const client = WhispirClient({
    host: process.env.WHISPIR_HOST as string,
    username: process.env.WHISPIR_USERNAME,
    password: process.env.WHISPIR_PASSWORD,
    apiKey: process.env.WHISPIR_API_KEY,
});

async function main() {
    const response = await client.workspaces.list();
    const defaultWorkspaceId = response.workspaces[0].id;

    const contact = await client.contacts.create({
        workspaceId: defaultWorkspaceId,
        firstName: 'Joe',
        lastName: 'Bloggs2',
        workMobilePhone1: '61400400400',
        workEmailAddress1: 'joe@bloggs.com',
        workCountry: 'Australia',
        timezone: 'Australia/Melbourne'
    });

    const message = await client.messages.create({
        workspaceId: defaultWorkspaceId,
        to: contact.mri,
        subject: 'Welcome!',
        body: `Hello ${contact.firstName}, I hear you're from ${contact.workCountry}!`,
    });

    console.log(message.id);
}

main()
    .catch(console.error)
