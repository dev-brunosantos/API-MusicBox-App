import { Router } from 'express';
import { CargosControllers } from '../controllers/CargosControllers';

// IMPORTAÇÃO DE MIDDLEWARES
import { validarFormulario } from '../middlewares/validarFormulario';
import { validarAutenticacao } from '../middlewares/validarAutenticacao';
import { validarCargo } from '../middlewares/validarCargo';

const routes = Router();

// ROTAS DE CONTROLE DE CARGOS
routes.post(
    '/cargos/criar',
    validarAutenticacao,
    validarCargo,
    validarFormulario,
    CargosControllers.criar
);
routes.get('/cargos', validarAutenticacao, CargosControllers.listar);
routes.get('/cargos/:id', validarAutenticacao, CargosControllers.listarId);
routes.put(
    '/cargos/editar/:id',
    validarAutenticacao,
    validarCargo,
    validarFormulario,
    CargosControllers.editar
);
routes.delete(
    '/cargos/apagar/:id',
    validarAutenticacao,
    validarCargo,
    CargosControllers.apagar
);