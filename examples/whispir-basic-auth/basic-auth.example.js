require('dotenv').config()
const { AuthApi } = require("@whispir/ztest-node-api")
const { API_URL, API_KEY, WHISPIR_USERNAME, WHISPIR_PASSWORD } = process.env;

async function main() {
    const auth = new AuthApi(API_URL)

    const result = await auth.postAuth(
        API_KEY,
        "application/vnd.whispir.auth-v1+json",
        "application/vnd.whispir.auth-v1+json",
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${WHISPIR_USERNAME}:${WHISPIR_PASSWORD}`
            ).toString("base64")}`,
          },
        }
    )
    return result;
}
main()
.then(result => {
    const { token } = result.body
    console.log(`Token generated is ${token}`)
})