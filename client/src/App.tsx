import React from "react"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import "./App.css"
import { Checkout } from "./pages/Checkout"
import { CheckoutFail } from "./pages/CheckoutFail"
import { CheckoutSuccess } from "./pages/CheckoutSuccess"
import { Customers } from "./pages/Customers"
import { Home } from "./pages/Home"
import { Payments } from "./pages/Payments"
import { Subscriptions } from "./pages/Subscriptions"

function App() {
    return (
        // <div className="App">
        //     <Checkout testId="checkout" />
        // </div>
        <Router>
            <div>
                <nav>
                    <ul className="navbarNav">
                        <li>
                            <Link to="/">Home </Link>
                        </li>
                        <li>
                            <Link to="/checkout">
                                <span aria-label="emoji" role="img">
                                    🛒
                                </span>{" "}
                                Checkout
                            </Link>
                        </li>
                        <li>
                            <Link to="/payments">
                                <span aria-label="emoji" role="img">
                                    💸
                                </span>{" "}
                                Payments
                            </Link>
                        </li>
                        <li>
                            <Link to="/customers">
                                <span aria-label="emoji" role="img">
                                    🧑🏿‍🤝‍🧑🏻
                                </span>{" "}
                                Customers
                            </Link>
                        </li>
                        <li>
                            <Link to="/subscriptions">
                                <span aria-label="emoji" role="img">
                                    🔄
                                </span>{" "}
                                Subscriptions
                            </Link>
                        </li>
                    </ul>
                </nav>

                <main>
                    <Routes>
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route
                            path="/subscriptions"
                            element={<Subscriptions />}
                        />
                        <Route path="/success" element={<CheckoutSuccess />} />
                        <Route path="/failed" element={<CheckoutFail />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
