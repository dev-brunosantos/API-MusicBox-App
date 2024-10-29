"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginControllers = void 0;
const LoginServices_1 = require("../services/LoginServices");
const services = new LoginServices_1.LoginServices();
class Login {
    async signIn(req, res) {
        const { email, senha } = req.body;
        const login = await services.signIn({ email, senha });
        return res.json(login);
    }
}
const LoginControllers = new Login();
exports.LoginControllers = LoginControllers;
