const {makeRequest} = require('../helper/helper');
const apiEndpoint = require('../helper/constant');

exports.validateGetApi = async (req,res) => {

}

exports.createPaymentForm = async (req, res) => {
 res.send();

 const method = "POST";
 const requestAPIUrl = process.env.PAY_GENIUS_BASE_URL + apiEndpoint.create_payment;

 const response = await makeRequest(method,requestAPIUrl,req.body)
  console.log(response);
};