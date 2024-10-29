"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { LINK, PORT } = process.env;
const link = LINK;
// const port = PORT || 8080;
const port = 8080;
const url = `${link}:${port}`;
app_1.app.listen(port, () => console.log(`Servidor rodando em: ${url}`));
