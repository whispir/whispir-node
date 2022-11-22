import WhispirClient from 'whispir';
import env from 'dotenv';

env.config();

const whispir = WhispirClient({
    host: process.env.WHISPIR_HOST as string,
    username: process.env.WHISPIR_USERNAME,
    password: process.env.WHISPIR_PASSWORD,
    apiKey: process.env.WHISPIR_API_KEY,
});

async function main() {
    const { token } = await whispir.auth.create();

    const bearerWhispir = WhispirClient({
        host: process.env.WHISPIR_HOST as string,
        accessToken: token,
        apiKey: process.env.WHISPIR_API_KEY,
    });

    const result = await bearerWhispir.users.list();
    console.log(result);
};

main()
    .catch(console.error);
