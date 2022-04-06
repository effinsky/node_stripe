import { config } from "dotenv"
import Stripe from "stripe"
import { app } from "./api"

if (process.env.NODE_ENV !== "production") {
    config()
}

export const stripe = new Stripe(process.env.STRIPE_SECRET, {
    // check this version if conflicts occur with TS
    apiVersion: "2020-08-27",
})

const port = process.env.PORT || 666
app.listen(port, () => void console.log(`running on port ${port}`))
