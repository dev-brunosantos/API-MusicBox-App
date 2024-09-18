import { Router } from "express";
import { CargosControllers } from "./controllers/CargosControllers";
import { UsuarioController } from "./controllers/UsuarioControllers";

const routes = Router()

// ROTAS DE CONTROLE DE CARGOS
routes.post('/cargos/criar', CargosControllers.criar)
routes.get('/cargos', CargosControllers.listar)
routes.get('/cargos/:id', CargosControllers.listarId)
routes.put('/cargos/editar/:id', CargosControllers.editar)
routes.delete('/cargos/apagar/:id', CargosControllers.apagar)

// ROTAS DE USUÁRIOS 
routes.post('/usuario/cadastrar', UsuarioController.criar)
routes.get('/usuario', UsuarioController.listar)
routes.get('/usuario/:id', UsuarioController.listarUsuarioId)
routes.put('/usuario/editar/:id', UsuarioController.editar)
routes.put('/usuario/editar/senha/:id', UsuarioController.editarSenha)
routes.delete('/usuario/apagar/:id', UsuarioController.apagar)

export { routes }