const { ContactsApi } = require('@whispir/ztest-node-api')
const { createRequestOptions } = require('../lib/auth.lib')

const { API_URL } = process.env;

const initContactApi = () => {
    const contactApi = new ContactsApi(API_URL)
    return contactApi;
}

const createContact = async(contact, credentials) => {
    const contactApi = initContactApi()
    const httpOptions = createRequestOptions(credentials.username, credentials.password)

    try {
        const result = await contactApi.postContacts(
            credentials.workspaceId,
            credentials.apiKey,
            "application/vnd.whispir.contact-v1+json",
            "application/vnd.whispir.contact-v1+json",
            contact,
            httpOptions,
        )

        return result

    } catch (error) {
        console.error('createContact error', error)
    }
}

const getContactById = async (contactId, credentials) => {
    const contactApi = initContactApi()
    const httpOptions = createRequestOptions(credentials.username, credentials.password)

    const result = await contactApi.getContactsById(
        credentials.workspaceId,
        credentials.apiKey,
        contactId,
        "application/vnd.whispir.contact-v1+json",
        null,
        null,
        null,
        httpOptions
    )

    return result
}

const parseContactIdFromCreateResponse = (createContactResponse) => {
    const link = createContactResponse.link.shift()
    const contactId = link.uri.split('/').pop()
    return contactId
}

const parseContactMriFromCreateResponse = (createContactResponse) => {
    return createContactResponse.mri
}

module.exports = {
    createContact,
    parseContactIdFromCreateResponse,
    parseContactMriFromCreateResponse,
    getContactById,
}