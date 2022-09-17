const { makeRequest } = require('../helper/helper');
const apiEndpoint = require('../helper/constant');

exports.validateGetApi = async (req, res) => {

  const method = "GET";
  const requestAPIUrl = process.env.PAY_GENIUS_BASE_URL + apiEndpoint.validate_api;

  const response = await makeRequest(method, requestAPIUrl, req.body);
  res.send(response);
}

exports.validatePostApi = async (req, res) => {

  const method = "POST";
  const requestAPIUrl = process.env.PAY_GENIUS_BASE_URL + apiEndpoint.validate_api;
  const response = await makeRequest(method, requestAPIUrl, req.body);
  res.send(response);
}