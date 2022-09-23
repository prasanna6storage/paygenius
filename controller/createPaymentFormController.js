const { makeRequest } = require('../helper/helper');
const apiEndpoint = require('../helper/constant');

exports.createPaymentFormRedirect = async (req, res) => {
  let method = "POST";
  let requestAPIUrl = process.env.PAY_GENIUS_BASE_URL + apiEndpoint.create_payment_form_redirect;
  let response = await makeRequest(method, requestAPIUrl, req.body);
  res.send(response);
};

exports.createPayment = async (req, res) => {
  let method = "POST";
  let requestAPIUrl = process.env.PAY_GENIUS_BASE_URL + apiEndpoint.payment_create;
  let response = await makeRequest(method, requestAPIUrl, req.body);
  if (typeof response !== 'undefined' && response !== null && response.success === true) {
    let threeDSecure = response.threeDSecure;
    if (typeof threeDSecure !== 'undefined' && threeDSecure !== null && threeDSecure !== '') {
      let data = {
        paRes: threeDSecure.paReq
      };
      const responseData = await confirmPayment(data,response.reference);
      res.send(responseData);
    }
  }

};

const confirmPayment = async (requestData , reference) => {
  let method = "POST";
  let requestAPIUrl = process.env.PAY_GENIUS_BASE_URL + `/v2/payment/${reference}/confirm`;
  let response = await makeRequest(method, requestAPIUrl, requestData);
  res.send(response);
}