# Whispir Node.js Library

[![Version](https://img.shields.io/npm/v/whispir.svg)](https://www.npmjs.org/package/whispir)
[![Build Status](https://github.com/whispir/whispir-node/actions/workflows/ci.yml/badge.svg)](https://github.com/whispir/whispir-node/actions?query=branch%3Amain)
[![Downloads](https://img.shields.io/npm/dm/whispir.svg)](https://www.npmjs.com/package/whispir)
[![Try on RunKit](https://badge.runkitcdn.com/whispir.svg)](https://runkit.com/npm/whispir)

The Whispir Node library provides convenient access to the Whispir API from applications written in JavaScript & TypeScript.

## Documentation
You can find the complete documentation of the Whispir API at [developers.whispir.com](https://developers.whispir.com/).

## Requirements

Node 12 or higher.

## Installation

Install the package with:

```sh
npm install whispir --save
# or
yarn add whispir
```

## Usage

The package needs to be configured with your account's username/password combination and API Key, which can be obtained by following the [Obtain an API Key](https://developers.whispir.com/2a21cad9e5da7-authentication#obtain-an-api-key) instructions.

```ts
const whispirClient = require('whispir')

const whispir = whispirClient({
    username: 'username...',
    password: 'password...',
    apiKey: 'apiKey...',
    host: 'https://api.<region>.whispir.com', // e.g. https://api.au.whispir.com
});

whispir.messages.create({
  to: '61400400400',
  subject: 'My first message',
  body: 'Hello from Whispir Node SDK!',
})
  .then(message => console.log(message.id))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```ts
import whispirClient from 'whispir';

const whispir = whispirClient({
    username: 'username...',
    password: 'password...',
    apiKey: 'apiKey...',
    host: 'https://api.<region>.whispir.com', // e.g. https://api.au.whispir.com
});

(async () => {
  const message = await whispir.messages.create({
    to: '61400400400',
    subject: 'My first message',
    body: 'Hello from Whispir Node SDK!',
  });

  console.log(message.id);
})();
```
## Configuration

### Request Interceptor

In certain scenarios it can be helpful to intercept the outgoing request and perform querying or mutation on the request object. Both the API Client and each Resource supports configuration for a request inteceptor.

```ts
whispir.addInteceptor((request) => {
    console.log(request);
})
```

Or for an individual resource:

```ts
whispir.messages.addInteceptor((request) => {
    console.log(request);
})
```

## Examples

Visit the [examples](https://github.com/whispir/whispir-node/tree/main/examples) folder for a curated list of examples to help you get started quickly with Whispir.
