import { stripe } from ".."

export const create_payment_intent = async(amount: number) => {
    const payment_intent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        // when using auth, include email etc.
    })

    return payment_intent
}
