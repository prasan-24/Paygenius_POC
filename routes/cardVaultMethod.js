const express = require("express");
const router = express.Router();

const { registerCardVault , getRegisterCardVault , deleteCard } = require('../controller/cardVaultMethodController');

/**
 * Payment Gateway API Endpoint for reference -- /v2/card/register
 * Save the credit card detail
*/
router.post('/card/register',registerCardVault);

/**
 * Payment Gateway API Endpoint for reference -- /v2/card/lookup
 * Get saved credit card detail
*/
router.post('/card/detail',getRegisterCardVault);

/**
 * Payment Gateway API Endpoint for reference -- /v2/card/unregister
 * Delete the saved credit card detail
*/
router.post('/card/delete',deleteCard);

module.exports = router;