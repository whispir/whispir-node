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

    const message = await client.messages.create({
        workspaceId: defaultWorkspaceId,
        to: '61400400400',
        subject: 'Hello & Welcome!',
        body: 'Your first message from the Whispir Node SDK. Congrats!',
    });

    const retrievedMessage = await client.messages.retrieve({
        workspaceId: defaultWorkspaceId,
        messageId: message.id,
    });

    console.log(retrievedMessage);
};

main()
    .catch(console.error);
