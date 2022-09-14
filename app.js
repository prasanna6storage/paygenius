// const CryptoJS = require("crypto-js");

// var seed = "788764cf-7ef2-44e7-8688-8875ee3789c1"
// var seed_hash = CryptoJS.SHA256(seed).toString();

// console.log(seed_hash);


const CryptoJS = require("crypto-js");

const axios = require("axios");

const salt = CryptoJS.lib.WordArray.random(12);                              // Randomly generated for each request.
const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString(); // Current Unix time (seconds).
const access_key = "02d086e8-cbb4-4e0b-9e86-45c0bd35ac89";                   // The access key from Client Portal.
const secret_key = "788764cf-7ef2-44e7-8688-8875ee3789c1";                   // Never transmit the secret key by itself.
const url_path = "/pg/api/v2/util/validate";                                       // Portion after the base URL.
                                                                                // Hardkeyed for this example.
const http_method = "post";                                                   // get|put|post|delete - must be lowercase.
const data = "" ;                                                            // Stringified JSON without whitespace.
                                                                                // Always empty string for GET;

const getSignature = () => {
  const to_sign =
    http_method + url_path + salt + timestamp + access_key + secret_key + data;
  let signature = CryptoJS.enc.Hex.stringify(
    CryptoJS.HmacSHA256(to_sign, secret_key)
  );

  signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

  return signature;
};

const headers = {
  access_key,
  signature: getSignature(),
  salt,
  timestamp,
  "Content-Type": `application/json`,
};

const request = {
  baseURL: "https://developer.paygenius.co.za",
  headers,
  url: url_path,
  method: http_method,
  data,
};

console.log(headers.signature);

// You can use any HTTP request library to make the request. Example: Axios
//const response =  axios(request);
