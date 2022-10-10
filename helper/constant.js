const request_api = {
    create_payment_form_redirect: '/v2/redirect/create',
    validate_api:'/v2/util/validate',
    payment_create: '/v2/payment/create',
    add_card_vault: '/v2/card/register',
    get_card_detail: '/v2/card/lookup',
    delete_card_detail: '/v2/card/unregister',
}

module.exports = request_api;