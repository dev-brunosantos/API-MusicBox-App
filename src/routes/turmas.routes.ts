import { Router } from 'express';
import { TurmasControllers } from '../controllers/TurmasControllers';

// IMPORTAÇÃO DE MIDDLEWARES
import { validarFormulario } from '../middlewares/validarFormulario';
import { validarAutenticacao } from '../middlewares/validarAutenticacao';
import { validarCargo } from '../middlewares/validarCargo';

const routes = Router();

// ROTAS DE SOBRE TURMAS
routes.post(
    '/turmas/criar',
    validarAutenticacao,
    validarCargo,
    validarFormulario,
    TurmasControllers.novaTurma
);
routes.get('/turmas/', validarAutenticacao, TurmasControllers.verTurmas);
routes.get('/turmas/:id', validarAutenticacao, TurmasControllers.turmaId);
routes.put(
    '/turmas/editar/:id',
    validarAutenticacao,
    validarCargo,
    validarFormulario,
    TurmasControllers.editarTurma
);
routes.delete(
    '/turmas/apagar/:id',
    validarAutenticacao,
    validarCargo,
    TurmasControllers.apagarTurma
);