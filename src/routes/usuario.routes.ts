import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioControllers';

// IMPORTAÇÃO DE MIDDLEWARES
import { validarFormulario } from '../middlewares/validarFormulario';
import { validarAutenticacao } from '../middlewares/validarAutenticacao';
import { validarCargo } from '../middlewares/validarCargo';

const routes = Router();

// ROTAS DE USUÁRIOS
routes.post(
    '/usuario/cadastrar',
    validarAutenticacao,
    validarCargo,
    validarFormulario,
    UsuarioController.criar
);
routes.get('/usuario', validarAutenticacao, UsuarioController.listar);
routes.get('/usuario/:id', validarAutenticacao, UsuarioController.listarUsuarioId);
routes.put(
    '/usuario/editar/:id',
    validarAutenticacao,
    validarCargo,
    validarFormulario,
    UsuarioController.editar
);
// routes.put('/usuario/editar/senha/:id', UsuarioController.editarSenha) -- VERIFICAR AS CONFIGURAÇÕES DO SERVICE E DO CONTROLLER
routes.delete(
    '/usuario/apagar/:id',
    validarAutenticacao,
    validarCargo,
    UsuarioController.apagar
);