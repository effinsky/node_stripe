"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
const dotenv_1 = require("dotenv");
const stripe_1 = __importDefault(require("stripe"));
const api_1 = require("./api");
if (process.env.NODE_ENV !== "production") {
    (0, dotenv_1.config)();
}
exports.stripe = new stripe_1.default(process.env.STRIPE_SECRET, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    apiVersion: "2020-03-02",
});
const port = process.env.PORT || 666;
api_1.app.listen(port, () => void console.log(`running on port ${port}`));
//# sourceMappingURL=index.js.map