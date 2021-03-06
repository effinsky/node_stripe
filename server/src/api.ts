import { create_payment_intent } from "./services/payments"
import cors from "cors"
import express, { NextFunction, Request, Response } from "express"
import { create_stripe_checkout_session } from "./services/checkout"
export const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))

const run_async =
    (cb: (a: Request, b: Response, c: NextFunction) => void) =>
    (req: Request, res: Response, next: NextFunction) =>
        cb(req, res, next)

app.post(
    "/checkout",
    run_async(async ({ body }: Request, res: Response) => {
        console.log("server: received POST request to /checkout")
        res.send(await create_stripe_checkout_session(body.line_items))
    })
)

app.post(
    "/payments",
    run_async(async ({ body }: Request, res: Response) => {
        res.send(await create_payment_intent(body.amount))
    })
)
