// import { Router } from 'express';
// import { TurmasControllers } from '../controllers/TurmasControllers';

// // IMPORTAÇÃO DE MIDDLEWARES
// import { validarFormulario } from '../middlewares/validarFormulario';
// import { validarAutenticacao } from '../middlewares/validarAutenticacao';
// import { validarCargo } from '../middlewares/validarCargo';

// const routesTurmas = Router();

// // ROTAS DE SOBRE TURMAS
// routesTurmas.post(
//     '/turmas/criar',
//     validarAutenticacao,
//     validarCargo,
//     validarFormulario,
//     TurmasControllers.novaTurma
// );
// routesTurmas.get('/turmas/', validarAutenticacao, TurmasControllers.verTurmas);
// routesTurmas.get('/turmas/:id', validarAutenticacao, TurmasControllers.turmaId);
// routesTurmas.put(
//     '/turmas/editar/:id',
//     validarAutenticacao,
//     validarCargo,
//     validarFormulario,
//     TurmasControllers.editarTurma
// );
// routesTurmas.delete(
//     '/turmas/apagar/:id',
//     validarAutenticacao,
//     validarCargo,
//     TurmasControllers.apagarTurma
// );

// export { routesTurmas };
