import { Prisma } from "../config/prisma";

interface UsuarioDados {
    nome: string;
    email: string;
    senhaCriptografada: string;
    cargoId: number;
}

const { usuario } = Prisma

class UsuarioServices {
    async criarUsuario({ nome, email, senhaCriptografada, cargoId }: UsuarioDados) {
        const usuaroExistente = await usuario.findFirst({ where: { email } })
        if (!usuaroExistente) {
            const criar = await usuario.create({
                data: { nome, email, senha: senhaCriptografada, cargoId }
            })
            return {
                status: "Usuario cadastrado com sucesso.",
                criar
            }
        }
    }
    async listarUsuarios() {
        const listaUsuarios = await usuario.findMany()
        if (!listaUsuarios) {
            return { erro: "Não existe nenhum usuário cadastrado no sistema." }
        }
        return { listaUsuarios }
    }
}

export { UsuarioServices }