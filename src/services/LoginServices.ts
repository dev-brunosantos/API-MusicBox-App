import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { Prisma } from "../config/prisma";

const { JWT_SECRET } = process.env;
const { usuario } = Prisma;

interface LoginDados {
    email: string;
    senha: string;
}

class LoginServices {
    async signIn({ email, senha }: LoginDados) {
        const emailUsuario = await usuario.findFirst({ where: { email } });
        if (!emailUsuario) return { erro: "Não existe esse email cadastrado no sistema." };

        const senhaDescriptografada = await compare(senha, emailUsuario.senha);
        if (!senhaDescriptografada) return { erro: "Senha incorreta." };

        const token = sign(
            { id: emailUsuario.id, email: emailUsuario.email },
            JWT_SECRET,
            { subject: emailUsuario.id, expiresIn: '2h' }
        );
        return { emailUsuario, token };
    }
}

export { LoginServices };
