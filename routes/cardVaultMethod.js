const express = require("express");
const router = express.Router();

const { registerCardVault , getRegisterCardVault } = require('../controller/cardVaultMethodController');

/**
 * Payment Gateway API Endpoint for reference -- /v2/card/register
*/
router.post('/card/register',registerCardVault);

/**
 * Payment Gateway API Endpoint for reference -- /v2/card/lookup
*/
router.post('/card/detail',getRegisterCardVault);

module.exports = router;