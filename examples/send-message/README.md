# Create a Contact and Send a Message

Use this example to create your first contact, and send a message to the new contact.

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

You'll now see the message id in the CLI, which can be used for further querying on the message status. Congrats!
