# Using Basic Authentication

Use this example to test your basic authentication integration with the Whispir API.

### Requirements

You’ll need the following:

- [Node.js](http://nodejs.org) >=12
- Whispir account with an API Key

### Setup

Clone the repository:

```bash
git clone https://github.com/whispir/whispir-node.git
```

Move into the project's directory:

```bash
cd examples/basic-auth
```

Copy the environment variables file:

```bash
cp .env.example .env
```

Update `.env` with your own username, password, [Whispir API key](https://developers.whispir.com/2a21cad9e5da7-authentication#obtain-an-api-key), and host (depending on your Whispir region).

### Usage

Install dependencies:

```bash
npm install
```

Then run the example:

```bash
npm run start
```

You'll now see a list of your workspaces in the CLI. Congrats!
