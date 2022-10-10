const express = require("express");
const router = express.Router();

const { createPaymentFormRedirect , createPayment } = require('../controller/createPaymentFormController');

/**
 * Payment Gateway API Endpoint for reference -- /v2/redirect/create
 * Using this we can load in our application as an iframe.
*/
router.post('/create/paymentform/redirect',createPaymentFormRedirect);

/**
 * Payment Gateway API Endpoint for reference -- /v2/payment/create
 * We use this for recurring charges
*/
router.post('/payment/create',createPayment);

module.exports = router;