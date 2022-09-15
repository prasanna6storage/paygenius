const CryptoJS = require("crypto-js");
require('dotenv').config();

//Making Request
exports.makeRequest = async (method, requestUrl, requestBody) => {
    try {
        const http_method = method;
        const request_url = requestUrl;
        const data = requestBody;

        const signature = await getSignature(data)
        console.log(signature);

    } catch (err) {
        console.log(err);
    }
}

//Genarating Signature 
const getSignature = (data) => {

    let requestPayload = typeof data === "undefined" || data === null || data === "" || data === "{}" ? null : data;

    const url_path = process.env.VALIDATE_URL_PATH;
    const secret_key = process.env.SECRET_KEY;
    const to_sign = url_path + secret_key + requestPayload;
    let signature = CryptoJS.enc.Hex.stringify(
        CryptoJS.HmacSHA256(to_sign, secret_key)
    );

    //signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

    return signature;
};