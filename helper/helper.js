const axios = require('axios').default;
const CryptoJS = require("crypto-js");
require('dotenv').config();

//Making Request
const makeRequest = async (method, requestUrl, requestBody) => {
    
    if (typeof method !== 'undefined' && method !== null && method !== "" && method === "GET") {
        try {
            const request_url = requestUrl;
            const data = requestBody;

            const signature = await getSignature(data, request_url)
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-Token": process.env.ACCESS_TOKEN,
                    "X-Signature": signature
                },
            };

            let apiresponse =  await axios.get(request_url,config)
                .then(response => {
                    const responseData = response.data;
                    return responseData;
                }).catch(err => {
                    return err
                })
            return apiresponse;

        } catch (err) {
            return err
        }
    } else if (typeof method !== 'undefined' && method !== null && method !== "" && method === "POST") {
        try {
            const request_url = requestUrl;
            const data = requestBody;

            const signature = await getSignature(data, request_url)
            console.log(signature);
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-Token": process.env.ACCESS_TOKEN,
                    "X-Signature": signature
                },
            };

            console.log(request_url);
            let apiresponse =  await axios.post(request_url,data,config)
                .then(response => {
                    const responseData = response.data;
                    return responseData;
                }).catch(err => {
                    return err
                })
            return apiresponse;

        } catch (err) {
            console.log(err);
        }
    }
}

//Genarating Signature 
const getSignature = (data, requestApiUrl) => {
    let requestPayload = typeof data === "undefined" || data === null || data === "" || data === "{}" || Object.keys(data).length === 0 ? null : JSON.stringify(data);
    const url_path = requestApiUrl;
    const secret_key = process.env.SECRET_KEY;
    let to_sign = "";
    if (typeof requestPayload !== 'undefined' && requestPayload !== null && requestPayload !== "") {
        to_sign = url_path + "\n" + requestPayload;
    } else {
        to_sign = url_path;
    }
    to_sign = to_sign.trim();
    let signature = CryptoJS.enc.Hex.stringify(
        CryptoJS.HmacSHA256(to_sign, secret_key)
    );

    return signature;
};

module.exports = {makeRequest};