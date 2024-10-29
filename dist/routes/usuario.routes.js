"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesUsuario = void 0;
const express_1 = require("express");
const UsuarioControllers_1 = require("../controllers/UsuarioControllers");
// IMPORTAÇÃO DE MIDDLEWARES
const validarFormulario_1 = require("../middlewares/validarFormulario");
// import { validarCargo } from '../middlewares/validarCargo';
const routesUsuario = (0, express_1.Router)();
exports.routesUsuario = routesUsuario;
// ROTAS DE USUÁRIOS
routesUsuario.post('/usuario/cadastrar', 
// validarAutenticacao,
// validarCargo,
validarFormulario_1.validarFormulario, UsuarioControllers_1.UsuarioController.criar);
routesUsuario.get('/usuario', /*validarAutenticacao,*/ UsuarioControllers_1.UsuarioController.listar);
routesUsuario.get('/usuario/:id', /*validarAutenticacao,*/ UsuarioControllers_1.UsuarioController.listarUsuarioId);
routesUsuario.put('/usuario/editar/:id', 
// validarAutenticacao, 
// validarCargo,
validarFormulario_1.validarFormulario, UsuarioControllers_1.UsuarioController.editar);
routesUsuario.patch('/usuario/editar/senha/:id', /*validarAutenticacao,*/ UsuarioControllers_1.UsuarioController.editarSenha);
routesUsuario.delete('/usuario/apagar/:id', 
// validarAutenticacao,
// validarCargo,
UsuarioControllers_1.UsuarioController.apagar);
