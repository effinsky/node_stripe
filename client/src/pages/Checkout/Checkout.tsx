import { useStripe } from "@stripe/react-stripe-js"
import React, { useState } from "react"
import { fetch_from_API_post } from "../../helpers/fetch"
import styles from "./Checkout.module.css"

export function Checkout() {
    const stripe = useStripe()
    const [product, set_product] = useState({
        name: "Hat",
        description: "Pug hat. A hat your pug will love",
        images: ["../../public/images/hat.jpg"],
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
        const { id: session_id } = await fetch_from_API_post("checkout", {
            body,
        })

        // here stripe redirects to checkout page if successful
        const res = await (stripe &&
            stripe.redirectToCheckout({
                sessionId: session_id,
            }))

        if (res?.error) {
            console.error(res.error)
        }

        console.log(res)
    }

    return (
        <>
            <div className={styles.checkoutContainer}>
                <h3 className={styles.heading}>{product.name}</h3>
                <h4 className={styles.subheading}>
                    Stripe Amount: {product.amount}
                </h4>{" "}
                <img src={product.images[0]} alt="hat" width="250px" />
                <div>
                    <button
                        className={styles.quantityButton}
                        onClick={() => change_quantity(-1)}
                    >
                        -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                        className={styles.quantityButton}
                        onClick={() => change_quantity(1)}
                    >
                        +
                    </button>
                </div>
            </div>

            <hr />

            <button
                className={styles.checkoutButton}
                disabled={product.quantity < 1}
                onClick={handle_click}
            >
                Start Checkout
            </button>
        </>
    )
}
