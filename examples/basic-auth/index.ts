import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import WhispirClient from '../../api';

const client = WhispirClient({
    host: 'https://stage-ap-southeast-2.whispirdev.com/api',
    username: process.env.WHISPIR_USERNAME,
    password: process.env.WHISPIR_PASSWORD,
    apiKey: process.env.API_KEY,
});

async function main() {
    const result = await client.users.list({})
    console.log(result)
}

main()
    .catch(console.error)