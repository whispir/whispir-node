require('dotenv').config()
const { ContactsApi, MessagesApi } = require("@whispir/ztest-node-api")
const { API_URL, API_KEY, WHISPIR_USERNAME, WHISPIR_PASSWORD, WORKSPACE_ID } = process.env;

const { createBasicAuthHeader, initCredentials } = require('../lib/auth.lib')
const {
    createContact,
    parseContactIdFromCreateResponse,
    parseContactMriFromCreateResponse,
    getContactById,
} = require('../lib/contact.lib')
const { sendMessage } = require('../lib/message.lib')

// const getContactById = async () => {
//     const contactApi = new ContactsApi(API_URL)
//     const requestConfig = {
//         headers: createBasicAuthHeader()
//     }

//     const params = {
//         workspaceId: WORKSPACE_ID,
//         xApiKey: API_KEY,
//         contactId: 'B5589BB86E0DD79D',
//         accept: 'application/vnd.whispir.contact-v1+json',
//         options: requestConfig
//     }

//     const result = await contactApi.getContactsById(
//         WORKSPACE_ID,
//         API_KEY,
//         'B5589BB86E0DD79D',
//         "application/vnd.whispir.contact-v1+json", null, null, null, requestConfig)

//     return result;
// }


async function main() {
    const credentials = initCredentials(WORKSPACE_ID, WHISPIR_USERNAME, WHISPIR_PASSWORD, API_KEY)

    const contactCreatePayload = {
        firstName: 'John',
        lastName: 'Wick',
        workMobilePhone1: '61400400400',
        workEmailAddress1: 'testUser@example.com',
        workCountry: 'Australia',
        timezone: 'Australia/Melbourne'
    }

    const { body: createContactResponseBody } = await createContact(contactCreatePayload, credentials)
    const contactId = parseContactIdFromCreateResponse(createContactResponseBody)
    const userMRI = parseContactMriFromCreateResponse(createContactResponseBody)
    console.log('contact ID', contactId)

    const contacts = [
        contactId,
        userMRI
    ]

    const { body: contactDetails } = await getContactById(contactId, credentials)
    console.log('contact details', contactDetails)

    const sendMessagePayload = {
        to: contacts.join(','),
        subject: 'Hello from Whispir',
        body: 'Hi! This is a message using Whispir SDK'
    }

    const sendMessageResult = await sendMessage(sendMessagePayload, credentials)
    console.log('sendMessageResult', sendMessageResult)
    return contacts
}

main()
.then(result => {
    console.info('message sent to', result)
})
.catch(error => {
    console.error('error:', error)
})
.finally(() => {
    console.log('whispir-send-message-to-contact [DONE]')
})