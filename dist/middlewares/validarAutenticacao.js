"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAutenticacao = validarAutenticacao;
const jsonwebtoken_1 = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
function validarAutenticacao(req, res, next) {
    const autorizacao = req.headers.authorization;
    if (!autorizacao) {
        return res.status(401).end();
    }
    const [, token] = autorizacao.split(' ');
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
        req.usuario_id = sub;
        return next();
    }
    catch (error) {
        return res.status(401).end();
    }
}
