import { config } from "dotenv"
import Stripe from "stripe"
import { app } from "./api"

if (process.env.NODE_ENV !== "production") {
    config()
}

export const stripe = new Stripe(process.env.STRIPE_SECRET, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    apiVersion: "2020-03-02",
})

const port = process.env.PORT || 666
app.listen(port, () => void console.log(`running on port ${port}`))
