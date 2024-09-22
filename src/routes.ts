import { Router } from "express";
import { CargosControllers } from "./controllers/CargosControllers";
import { UsuarioController } from "./controllers/UsuarioControllers";
import { LoginControllers } from "./controllers/LoginControllers";

// IMPORTAÇÃO DE MIDDLEWARES
import { validarFormulario } from "./middlewares/validarFormulario";
import { validarAutenticacao } from "./middlewares/validarAutenticacao";
import { validarCargo } from "./middlewares/validarCargo";

const routes = Router()

// ROTAS DE CONTROLE DE CARGOS
routes.post('/cargos/criar', validarAutenticacao, validarCargo, validarFormulario, CargosControllers.criar)
routes.get('/cargos', validarAutenticacao,  CargosControllers.listar)
routes.get('/cargos/:id', validarAutenticacao,  CargosControllers.listarId)
routes.put('/cargos/editar/:id', validarAutenticacao, validarCargo, validarFormulario, CargosControllers.editar)
routes.delete('/cargos/apagar/:id', validarAutenticacao, validarCargo, CargosControllers.apagar)

// ROTAS DE USUÁRIOS 
routes.post('/usuario/cadastrar', validarAutenticacao, validarCargo, validarFormulario, UsuarioController.criar)
routes.get('/usuario', validarAutenticacao, UsuarioController.listar)
routes.get('/usuario/:id', validarAutenticacao, UsuarioController.listarUsuarioId)
routes.put('/usuario/editar/:id', validarAutenticacao, validarCargo, validarFormulario, UsuarioController.editar)
// routes.put('/usuario/editar/senha/:id', UsuarioController.editarSenha) -- VERIFICAR AS CONFIGURAÇÕES DO SERVICE E DO CONTROLLER
routes.delete('/usuario/apagar/:id', validarAutenticacao, validarCargo, UsuarioController.apagar)

// ROTAS DE LOGIN
routes.post('/login', validarFormulario, LoginControllers.signIn)


export { routes }