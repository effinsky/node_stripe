"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_stripe_checkout_session = void 0;
const __1 = require("..");
/**
 *  create a stripe checkout session with line items
 */
const create_stripe_checkout_session = async (line_items) => {
    const url = process.env.WEBAPP_URL;
    return await __1.stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`,
    });
};
exports.create_stripe_checkout_session = create_stripe_checkout_session;
// example line item
// {
//     name: "product",
//     description: "makes you cry",
//     images: ["path/to/img.png"],
//     amount: 500,
//     currency: "usd",
//     quantity: 1,
// }
//# sourceMappingURL=checkout.js.map