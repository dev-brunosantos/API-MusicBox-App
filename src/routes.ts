import { Router } from "express";
import { CargosControllers } from "./controllers/CargosControllers";

const routes = Router()

// ROTAS DE CONTROLE DE CARGOS
routes.post('/cargos/criar', CargosControllers.criar)
routes.get('/cargos', CargosControllers.listar)
routes.get('/cargos/:id', CargosControllers.listarId)
routes.put('/cargos/editar/:id', CargosControllers.editar)
routes.delete('/cargos/apagar/:id', CargosControllers.apagar)

export { routes }