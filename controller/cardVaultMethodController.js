const { makeRequest } = require('../helper/helper');
const apiEndpoint = require('../helper/constant');

exports.registerCardVault = async (req, res) => {
  let method = "POST";
  let requestAPIUrl = process.env.PAY_GENIUS_BASE_URL + apiEndpoint.add_card_vault;
  let response = await makeRequest(method, requestAPIUrl, req.body);
  res.send(response);
};

exports.getRegisterCardVault = async (req, res) => {
  let method = "POST";
  let requestAPIUrl = process.env.PAY_GENIUS_BASE_URL + apiEndpoint.get_card_detail;
  let response = await makeRequest(method, requestAPIUrl, req.body);
  res.send(response);
};