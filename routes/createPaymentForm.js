const express = require("express");
const router = express.Router();

const { createPaymentForm } = require('../controller/createPaymentFormController');

router.post('/create/paymentform',createPaymentForm);

module.exports = router;