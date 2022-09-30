# whispir-node

The whispir-node SDK enables developers to access Whispir API through Javascript code.

## API Documentation
You can find the complete API documentation on the [Whispir Platform API page](https://whispirrestapi.stoplight.io/docs/api)


## Installation
To install whispir-node in  your project
```sh
npm install @whispir/whispir-node
```


## Authentication
Create a basic authentication header using a `username` and `password` pair as shown below and add it in your HTTP request authentication header.
```javascript
const createBasicAuthHeader = (username, password) => {
    return {
        Authorization: `Basic ${Buffer.from(
          `${username}:${password}`
        ).toString("base64")}`,
    }
}

const createRequestOptions = (username, password) => {
    const requestConfig = {
        headers: createBasicAuthHeader(username, password),
    }
    return requestConfig
}
```

## Usage Example
This example 

See more examples [here](/examples)

```javascript
const { MessagesApi } = require('@whispir/whispir-node')

// Configuration
const API_URL = ''
const WORKSPACE_ID = ''
const API_KEY = ''
const CONTACT = ''

// create an instance of MessagesApi
const messageApi = new MessagesApi(API_URL)

// see Authentication above
const httpOptions = createRequestOptions(USERNAME, PASSWORD) 

// See how to create a message payload
const sendMessagePayload = {
    to: CONTACT,
    subject: 'Message from Whispir',
    body: 'Hi! Thank you for using the Whispir API SDK'
}

const result = await messageApi.postMessages(
            WORKSPACE_ID,
            API_KEY,
            "application/vnd.whispir.message-v1+json",
            "application/vnd.whispir.message-v1+json",
            sendMessagePayload,
            httpOptions
        )

return result.response.body
```