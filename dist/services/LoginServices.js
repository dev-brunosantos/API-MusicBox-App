"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginServices = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = require("bcrypt");
const prisma_1 = require("../config/prisma");
const { JWT_SECRET } = process.env;
const { usuario } = prisma_1.Prisma;
class LoginServices {
    async signIn({ email, senha }) {
        const emailUsuario = await usuario.findFirst({ where: { email } });
        if (!emailUsuario)
            return { erro: 'Não existe esse email cadastrado no sistema.' };
        const senhaDescriptografada = await (0, bcrypt_1.compare)(senha, emailUsuario.senha);
        if (!senhaDescriptografada)
            return { erro: 'Senha incorreta.' };
        const token = (0, jsonwebtoken_1.sign)({ id: emailUsuario.id, email: emailUsuario.email }, JWT_SECRET, {
            subject: emailUsuario.id,
            expiresIn: '2h',
        });
        return { emailUsuario, token };
    }
}
exports.LoginServices = LoginServices;
