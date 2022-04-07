"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_stripe_checkout_session = void 0;
const _1 = require("./");
/**
 *  create a stripe checkout session with line items
 */
const create_stripe_checkout_session = async (line_items) => {
    const url = process.env.WEBAPP_URL;
    return await _1.stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`,
    });
};
exports.create_stripe_checkout_session = create_stripe_checkout_session;
//# sourceMappingURL=checkout.js.map