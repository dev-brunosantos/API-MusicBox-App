"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const LoginControllers_1 = require("../controllers/LoginControllers");
// IMPORTAÇÃO DE MIDDLEWARES
const validarFormulario_1 = require("../middlewares/validarFormulario");
// import { routesTurmas } from './turmas.routes';
// import { routesCargos } from './cargos.routes';
const usuario_routes_1 = require("./usuario.routes");
const routesLogin = (0, express_1.Router)();
// ROTAS DE LOGIN
routesLogin.post('/login', validarFormulario_1.validarFormulario, LoginControllers_1.LoginControllers.signIn);
const routes = {
    routesLogin,
    // routesTurmas,
    // routesCargos,
    routesUsuario: usuario_routes_1.routesUsuario,
};
exports.routes = routes;
