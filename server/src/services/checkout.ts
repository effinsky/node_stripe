import Stripe from "stripe"
import { stripe } from ".."

/**
 *  create a stripe checkout session with line items
 */

export const create_stripe_checkout_session = async (
    line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
) => {
    const url = process.env.WEBAPP_URL

    return await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`,
    })
}

// example line item
// {
//     name: "product",
//     description: "makes you cry",
//     images: ["path/to/img.png"],
//     amount: 500,
//     currency: "usd",
//     quantity: 1,
// }
