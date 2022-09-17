const express = require("express");
const router = express.Router();

const { createPaymentFormRedirect , createPayment } = require('../controller/createPaymentFormController');

/**
 * Payment Gateway API Endpoint for reference -- /v2/redirect/create
*/
router.post('/create/paymentform/redirect',createPaymentFormRedirect);

/**
 * Payment Gateway API Endpoint for reference -- /v2/payment/create
*/
router.post('/payment/create',createPayment);

module.exports = router;