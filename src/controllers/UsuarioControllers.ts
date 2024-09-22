import { Request, Response } from "express";
import { hash } from 'bcrypt';
import { UsuarioServices } from "../services/UsuarioServices";

const services = new UsuarioServices();

class Usuario {
    async criar(req: Request, res: Response) {
        const { nome, email, senha, cargoId } = req.body
        const senhaCriptografada = await hash(senha, 10)
        const criar = await services.criarUsuario({ nome, email, senhaCriptografada, cargoId })
        return res.json(criar)
    }
    async listar(req: Request, res: Response) {
        const usuarioId = req.usuario_id
        console.log("Id do usuário: ", usuarioId)
        const usuarios = await services.listarUsuarios()
        return res.json(usuarios)
    }
    async listarUsuarioId(req: Request, res: Response) {
        const { id } = req.params
        const usuarioId = await services.listarUsuarioID(id)
        return res.json(usuarioId)
    }
    async editar(req: Request, res: Response) {
        const { id } = req.params
        const { nome, email } = req.body
        const editarUsuario = await services.editarUsuario(id, nome, email)
        return res.json(editarUsuario)
    }
    // async editarSenha(req: Request, res: Response) {
    //     const { id } = req.params
    //     const { senha } = req.body
    //     const novaSenha = await services.editarSenha(id, senha)
    //     return res.json(novaSenha)
    // }
    async apagar(req: Request, res: Response) {
        const { id } = req.params
        const apagarUsuario = await services.apagarUsuario(id)
        return res.json(apagarUsuario)
    }
}

const UsuarioController = new Usuario()

export { UsuarioController }