import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import report_web_vitals from "./reportWebVitals"

export const stripe_promise = loadStripe("put stripe publishable key here!!!")

ReactDOM.render(
    <React.StrictMode>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Elements stripe={stripe_promise}>
            <App />
        </Elements>
    </React.StrictMode>,
    document.getElementById("root")
)

report_web_vitals()
