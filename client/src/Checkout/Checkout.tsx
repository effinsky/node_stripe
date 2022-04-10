import { useStripe } from "@stripe/react-stripe-js"
import React, { useState } from "react"
import { fetch_from_API_post } from "../helpers/fetch"

interface CheckoutProps {
    testId: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Checkout(_: CheckoutProps) {
    const stripe = useStripe()
    const [product, set_product] = useState({
        name: "Hat",
        description: "Pug hat. A hat your pug will love",
        images: ["your-img"],
        amount: 799,
        currency: "usd",
        quantity: 0,
    })

    const change_quantity = (value: number) => {
        set_product({
            ...product,
            quantity: Math.max(0, product.quantity + value),
        })
    }

    const handle_click = async () => {
        const body = { line_items: [product] }
        const { id: session_id } = await fetch_from_API_post("/checkout", {
            body,
        })

        const res = await (stripe &&
            stripe.redirectToCheckout({
                sessionId: session_id,
            }))

        if (res?.error) {
            console.error(res.error)
        }

        console.log(
            `click handled, response from server received: ${session_id}`
        )
    }

    return (
        <>
            <div>
                <h3>{product.name}</h3>
                <h4>Stripe Amount: {product.name}</h4>
                <img src={product.images[0]} alt="product" width="250px" />
                <button onClick={() => change_quantity(-1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => change_quantity(1)}>+</button>
            </div>

            <hr />

            <button disabled={product.quantity < 1} onClick={handle_click}>
                Start Checkout
            </button>
        </>
    )
}
