"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioServices = void 0;
const prisma_1 = require("../config/prisma");
const { usuario } = prisma_1.Prisma;
const MsgErro = 'Não existe usuário com o ID informado.';
class UsuarioServices {
    async criarUsuario({ nome, email, senhaCriptografada, cargoId }) {
        const usuaroExistente = await usuario.findFirst({ where: { email } });
        if (!usuaroExistente) {
            const criar = await usuario.create({
                data: { nome, email, senha: senhaCriptografada },
            });
            return 'Usuario cadastrado com sucesso.';
        }
        return 'Usuário já cadastrado no sistema.';
    }
    async listarUsuarios() {
        const listaUsuarios = await usuario.findMany({
            select: { id: true, nome: true, email: true }
        });
        if (!listaUsuarios) {
            return 'Não existe nenhum usuário cadastrado no sistema.';
        }
        return listaUsuarios;
    }
    async listarUsuarioID(id) {
        const usuarioId = await usuario.findFirst({
            where: { id },
            select: { id: true, nome: true, email: true }
        });
        if (!usuarioId) {
            return MsgErro;
        }
        return usuarioId;
    }
    async editarUsuario(id, nome, email) {
        const usuarioId = await usuario.findFirst({ where: { id } });
        if (usuarioId) {
            if (nome === '') {
                nome = usuarioId.nome;
            }
            if (email === '') {
                email = usuarioId.email;
            }
            const editar = await usuario.update({
                where: { id },
                data: { nome, email },
            });
            return {
                status: 'Os dados do usuário foram editado com sucesso.',
                dados_antigos: usuarioId,
                dados_atualizados: editar,
            };
        }
        return { erro: MsgErro };
    }
    async editarSenha(id, senha) {
        const usuarioId = await usuario.findFirst({ where: { id } });
        if (usuarioId) {
            await usuario.update({
                where: { id },
                data: { senha }
            });
            return "A senha do usuário foi editada com sucesso.";
        }
        return { erro: MsgErro };
    }
    async apagarUsuario(id) {
        const usuarioId = await usuario.findFirst({ where: { id } });
        if (usuarioId) {
            const apagar = await usuario.delete({ where: { id } });
            return `O usuário ${apagar.nome} foi exluído do sistema.`;
        }
        return MsgErro;
    }
}
exports.UsuarioServices = UsuarioServices;
