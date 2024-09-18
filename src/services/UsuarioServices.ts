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
    async listarUsuarioID(id: string) {
        const usuarioId = await usuario.findFirst({ where: { id } })
        if (!usuarioId) {
            return { erro: "Não existe usuário com o ID informado." }
        }
        return { usuarioId }
    }
    async editarUsuario(id: string, nome: string, email: string) {
        const usuarioId = await usuario.findFirst({ where: { id } })
        if (usuarioId) {
            const editar = await usuario.update({
                where: { id },
                data: { nome, email }
            })
            return {
                status: "Os dados do usuário foram editado com sucesso.",
                dados_antigos: usuarioId,
                dados_atualizados: editar
            }
        }
        return { erro: "Nenhum usuário encontrado com o ID informado." }
    }
    async editarSenha(id: string, senha: string) {
        const usuarioId = await usuario.findFirst({ where: { id } })
        if (usuarioId) {
            const editar = await usuario.update({
                where: { id },
                data: { senha }
            })
            return { status: "A senha do usuário foi editada com sucesso." }
        }
        return { erro: "Nenhum usuário encontrado com o ID informado." }
    }
    async apagarUsuario(id: string) {
        const usuarioId = await usuario.findFirst({ where: { id } })
        if(usuarioId) {
            const apagar = await usuario.delete({ where: { id }})
            return { status: `O usuário ${apagar.nome} foi exluído do sistema.`}
        }
        return { erro: "Nenhum usuário encontrado com o ID informado." }
    }
}

export { UsuarioServices }