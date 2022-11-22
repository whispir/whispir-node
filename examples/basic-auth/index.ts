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
    const result = await whispir.users.list();
    console.log(result);
};

main()
    .catch(console.error);
