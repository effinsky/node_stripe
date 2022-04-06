"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({ origin: true }));
exports.app.post("/test", (req, res) => {
    const amt = req.body.amount;
    console.log(req.body);
    res.status(200).send({ with_tax: amt * 7 });
});
exports.app.post("/content", (req, res) => {
    console.log(req.body);
    res.status(200).send({ name: "JSON", age: 20 });
});
//# sourceMappingURL=api.js.map