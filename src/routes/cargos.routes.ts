// import { Router } from 'express';
// import { CargosControllers } from '../controllers/CargosControllers';

// // IMPORTAÇÃO DE MIDDLEWARES
// import { validarFormulario } from '../middlewares/validarFormulario';
// import { validarAutenticacao } from '../middlewares/validarAutenticacao';
// import { validarCargo } from '../middlewares/validarCargo';

// const routesCargos = Router();

// // ROTAS DE CONTROLE DE CARGOS
// routesCargos.post(
//     '/cargos/criar',
//     validarAutenticacao,
//     validarCargo,
//     validarFormulario,
//     CargosControllers.criar
// );
// routesCargos.get('/cargos', validarAutenticacao, CargosControllers.listar);
// routesCargos.get('/cargos/:id', validarAutenticacao, CargosControllers.listarId);
// routesCargos.put(
//     '/cargos/editar/:id',
//     validarAutenticacao,
//     validarCargo,
//     validarFormulario,
//     CargosControllers.editar
// );
// routesCargos.delete(
//     '/cargos/apagar/:id',
//     validarAutenticacao,
//     validarCargo,
//     CargosControllers.apagar
// );

// export { routesCargos };
