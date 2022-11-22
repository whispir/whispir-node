# Send & Retrieve a Message

Use this example to send your first message with Whispir and retrieve details of the message.

### Requirements

You’ll need the following:

- [Node.js](http://nodejs.org) >=12
- Whispir account with an API Key

### Setup

In this directory (`cd examples/basic-auth`), copy the environment variables file:

```bash
cp .env.example .env
```

Update `.env` with your own username, password, [Whispir API keys](https://developers.whispir.com/2a21cad9e5da7-authentication#obtain-an-api-key), and host (depending on your Whispir region).

### Install and run

Install dependencies:

```bash
npm install
```

Update `index.ts` with your mobile number. Then run the example:

```bash
npm run start
```

You'll now see a summary of your sent message in the CLI. Congrats!
