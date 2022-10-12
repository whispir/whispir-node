const { MessagesApi } = require('@whispir/whispir-node')
const { createRequestOptions } = require('../lib/auth.lib')

const { API_URL } = process.env;

const initMessageApi = () => {
    const messageApi = new MessagesApi(API_URL)
    return messageApi;
}

const sendMessage = async (message, credentials) => {
    const messageApi = initMessageApi()
    const httpOptions = createRequestOptions(credentials.username, credentials.password)

    try {
        const result = await messageApi.postMessages(
            credentials.workspaceId,
            credentials.apiKey,
            "application/vnd.whispir.message-v1+json",
            "application/vnd.whispir.message-v1+json",
            message,
            httpOptions
        )
        return result.response.body
    } catch (error) {
        console.error('sendMessage error', error)
    }
}

module.exports = {
    sendMessage,
}