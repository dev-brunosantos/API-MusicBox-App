import { Router } from 'express';
import { LoginControllers } from '../controllers/LoginControllers';

// IMPORTAÇÃO DE MIDDLEWARES
import { validarFormulario } from '../middlewares/validarFormulario';
import { routesTurmas } from './turmas.routes';
import { routesCargos } from './cargos.routes';
import { routesUsuario } from './usuario.routes';

const routesLogin = Router();

// ROTAS DE LOGIN
routesLogin.post('/login', validarFormulario, LoginControllers.signIn);

const routes = {
    routesLogin,
    routesTurmas,
    routesCargos,
    routesUsuario,
};

export { routes };
