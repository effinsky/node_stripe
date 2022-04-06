import cors from "cors"
import express, { Request, Response } from "express"
export const app = express()

app.use(express.json())
app.use(cors({ origin: true }))

interface Amount {
    with_tax: number
}

app.post("/test", (req: Request, res: Response<Amount>): void => {
    const amt = req.body.amount
    console.log(req.body)
    res.status(200).send({ with_tax: amt * 7 })
})

interface ResponseBody {
    name: string
    age: number
}

app.post("/content", (req, res: Response<ResponseBody>): void => {
    console.log(req.body)
    res.status(200).send({ name: "JSON", age: 20 })
})
