"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const checkout_1 = require("./checkout");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({ origin: true }));
const run_async = (cb) => (req, res, next) => cb(req, res, next);
exports.app.post("/checkouts", run_async(async ({ body }, res) => {
    res.send(await (0, checkout_1.create_stripe_checkout_session)(body.line_items));
}));
//# sourceMappingURL=api.js.map