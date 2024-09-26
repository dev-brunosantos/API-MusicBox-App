import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioControllers';

// IMPORTAÇÃO DE MIDDLEWARES
import { validarFormulario } from '../middlewares/validarFormulario';
import { validarAutenticacao } from '../middlewares/validarAutenticacao';
import { validarCargo } from '../middlewares/validarCargo';

const routesUsuario = Router();

// ROTAS DE USUÁRIOS
routesUsuario.post(
    '/usuario/cadastrar',
    validarAutenticacao,
    validarCargo,
    validarFormulario,
    UsuarioController.criar
);
routesUsuario.get('/usuario', validarAutenticacao, UsuarioController.listar);
routesUsuario.get('/usuario/:id', validarAutenticacao, UsuarioController.listarUsuarioId);
routesUsuario.put(
    '/usuario/editar/:id',
    validarAutenticacao,
    validarCargo,
    validarFormulario,
    UsuarioController.editar
);
// routes.put('/usuario/editar/senha/:id', UsuarioController.editarSenha) -- VERIFICAR AS CONFIGURAÇÕES DO SERVICE E DO CONTROLLER
routesUsuario.delete(
    '/usuario/apagar/:id',
    validarAutenticacao,
    validarCargo,
    UsuarioController.apagar
);

export { routesUsuario };
