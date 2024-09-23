import { Prisma } from '../config/prisma';

interface UsuarioDados {
    nome: string;
    email: string;
    senhaCriptografada: string;
    cargoId: number;
}

const { usuario } = Prisma;
const MsgErro = 'Não existe usuário com o ID informado.';

class UsuarioServices {
    async criarUsuario({ nome, email, senhaCriptografada, cargoId }: UsuarioDados) {
        const usuaroExistente = await usuario.findFirst({ where: { email } });
        if (!usuaroExistente) {
            const criar = await usuario.create({
                data: { nome, email, senha: senhaCriptografada, cargoId },
            });
            return {
                status: 'Usuario cadastrado com sucesso.',
                criar,
            };
        }
        return { erro: 'Usuário já cadastrado no sistema.' };
    }
    async listarUsuarios() {
        const listaUsuarios = await usuario.findMany();
        if (!listaUsuarios) {
            return { erro: 'Não existe nenhum usuário cadastrado no sistema.' };
        }
        return { listaUsuarios };
    }
    async listarUsuarioID(id: string) {
        const usuarioId = await usuario.findFirst({ where: { id } });
        if (!usuarioId) {
            return { erro: MsgErro };
        }
        return { usuarioId };
    }
    async editarUsuario(id: string, nome: string, email: string) {
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
    // async editarSenha(id: string, senha: string) {
    //     const usuarioId = await usuario.findFirst({ where: { id } })
    //     if (usuarioId) {
    //         const editar = await usuario.update({
    //             where: { id },
    //             data: { senha }
    //         })
    //         return { status: "A senha do usuário foi editada com sucesso." }
    //     }
    //     return { erro: "Nenhum usuário encontrado com o ID informado." }
    // }
    async apagarUsuario(id: string) {
        const usuarioId = await usuario.findFirst({ where: { id } });
        if (usuarioId) {
            const apagar = await usuario.delete({ where: { id } });
            return { status: `O usuário ${apagar.nome} foi exluído do sistema.` };
        }
        return { erro: MsgErro };
    }
}

export { UsuarioServices };
