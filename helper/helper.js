const axios = require('axios').default;
const CryptoJS = require("crypto-js");
require('dotenv').config();

//Making Request
exports.makeRequest = async (method, requestUrl, requestBody) => {
    try {
        const http_method = method;
        const request_url = requestUrl;
        const data = requestBody;

        const signature = await getSignature(data,request_url)
        console.log(signature);
        let config = {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                "X-Token": process.env.ACCESS_TOKEN,
                "X-Signature": signature
            },
        };

        console.log(request_url);
        axios.post(request_url,data,config)
        .then(response =>{
            return response
        }).catch(err => {
            return err
        })

    } catch (err) {
        console.log(err);
    }
}

//Genarating Signature 
const getSignature = (data , requestApiUrl) => {

    let requestPayload = typeof data === "undefined" || data === null || data === "" || data === "{}" ? null : data;
    const url_path = requestApiUrl;
    const secret_key = process.env.SECRET_KEY;
    let to_sign = url_path + "\n" + requestPayload;
    to_sign = to_sign.trim();
    let signature = CryptoJS.enc.Hex.stringify(
        CryptoJS.HmacSHA256(to_sign, secret_key)
    );

    //signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

    return signature;
};