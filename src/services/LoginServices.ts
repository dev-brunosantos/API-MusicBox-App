import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { Prisma } from "../config/prisma";
import dotenv from 'dotenv';

dotenv.config()
const { JWT_SECRET } = process.env 
const { usuario } = Prisma

interface LoginDados {
    email: string;
    senha: string;
}

class LoginServices {
    async signIn({ email, senha }: LoginDados) {
        const emailUsuario = await usuario.findFirst({ where: { email } })
        if (!emailUsuario) { return { erro: "Não existe esse email cadastrado no sistema." } }
        try {
            const senhaDescriptografada = await compare(senha, emailUsuario.senha)
            const token = await sign(
                [emailUsuario.id, emailUsuario.email], 
                JWT_SECRET as string,
                { expiresIn: '2h'}
            )
            return {
                emailUsuario, token
            }
        } catch (error) {
            return {
                erro: "Verifique se as informações foram preenchidas corretamente.",
                error
            }
        }
    }
}
