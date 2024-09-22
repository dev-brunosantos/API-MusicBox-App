import { Router } from "express";
import { CargosControllers } from "./controllers/CargosControllers";
import { UsuarioController } from "./controllers/UsuarioControllers";
import { LoginControllers } from "./controllers/LoginControllers";

// IMPORTAÇÃO DE MIDDLEWARES
import { validarFormulario } from "./middlewares/validarFormulario";
import { validarAutenticacao } from "./middlewares/validarAutenticacao";

const routes = Router()

// ROTAS DE CONTROLE DE CARGOS
routes.post('/cargos/criar', validarFormulario, CargosControllers.criar)
routes.get('/cargos', CargosControllers.listar)
routes.get('/cargos/:id', CargosControllers.listarId)
routes.put('/cargos/editar/:id', validarFormulario, CargosControllers.editar)
routes.delete('/cargos/apagar/:id', CargosControllers.apagar)

// ROTAS DE USUÁRIOS 
routes.post('/usuario/cadastrar', validarFormulario, UsuarioController.criar)
routes.get('/usuario', validarAutenticacao, UsuarioController.listar)
routes.get('/usuario/:id', UsuarioController.listarUsuarioId)
routes.put('/usuario/editar/:id', validarFormulario, UsuarioController.editar)
// routes.put('/usuario/editar/senha/:id', UsuarioController.editarSenha) -- VERIFICAR AS CONFIGURAÇÕES DO SERVICE E DO CONTROLLER
routes.delete('/usuario/apagar/:id', UsuarioController.apagar)

// ROTAS DE LOGIN
routes.post('/login', validarFormulario, LoginControllers.signIn)

export { routes }