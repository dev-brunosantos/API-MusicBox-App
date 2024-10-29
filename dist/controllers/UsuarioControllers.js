"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const bcrypt_1 = require("bcrypt");
const UsuarioServices_1 = require("../services/UsuarioServices");
const services = new UsuarioServices_1.UsuarioServices();
class Usuario {
    async criar(req, res) {
        const { nome, email, senha, cargoId } = req.body;
        const senhaCriptografada = await (0, bcrypt_1.hash)(senha, 10);
        const criar = await services.criarUsuario({
            nome,
            email,
            senhaCriptografada,
            cargoId,
        });
        return res.json(criar);
    }
    async listar(req, res) {
        const usuarios = await services.listarUsuarios();
        return res.json(usuarios);
    }
    async listarUsuarioId(req, res) {
        const { id } = req.params;
        const usuarioId = await services.listarUsuarioID(id);
        return res.json(usuarioId);
    }
    async editar(req, res) {
        const { id } = req.params;
        const { nome, email } = req.body;
        const editarUsuario = await services.editarUsuario(id, nome, email);
        return res.json(editarUsuario);
    }
    async editarSenha(req, res) {
        const { id } = req.params;
        const { senha } = req.body;
        const senhaCriptografada = await (0, bcrypt_1.hash)(senha, 10);
        const novaSenha = await services.editarSenha(id, senhaCriptografada);
        return res.json(novaSenha);
    }
    async apagar(req, res) {
        const { id } = req.params;
        const apagarUsuario = await services.apagarUsuario(id);
        return res.json(apagarUsuario);
    }
}
const UsuarioController = new Usuario();
exports.UsuarioController = UsuarioController;
