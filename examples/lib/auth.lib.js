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

const initCredentials = (workspaceId, username, password, apiKey) => {
    return {
        workspaceId: workspaceId,
        apiKey: apiKey,
        username,
        password
    }
}


module.exports = {
    createBasicAuthHeader,
    initCredentials,
    createRequestOptions,
}