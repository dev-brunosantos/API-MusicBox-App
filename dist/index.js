"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const { LINK, PORT } = process.env;
const link = LINK;
const port = PORT;
const url = `${link}:${port}`;
app_1.app.listen(port, () => console.log(`Servidor rodando em: ${url}`));
