// import { Request, Response } from 'express';
// import { TurmasServices } from '../services/TurmasServices';

// const services = new TurmasServices();

// class Turmas {
//     async novaTurma(req: Request, res: Response) {
//         const { turma } = req.body;
//         const id = Math.floor(Math.random()*50000) + 1
//         const criar = await services.criarTurma({ id, turma });
//         return res.json(criar);
//     }
//     async verTurmas(req: Request, res: Response) {
//         const turmas = await services.listarTurmas();
//         return res.json(turmas);
//     }
//     async turmaId(req: Request, res: Response) {
//         const { id } = req.params;
//         const turma = await services.listarTurmaID(parseInt(id));
//         return res.json(turma);
//     }
//     async editarTurma(req: Request, res: Response) {
//         const { id } = req.params;
//         const { turma } = req.body;
//         const editar = await services.editarTurma({ id: parseInt(id), turma });
//         return res.json(editar);
//     }
//     async apagarTurma(req: Request, res: Response) {
//         const { id } = req.params;
//         const apagar = await services.apagarTurma(parseInt(id));
//         return res.json(apagar);
//     }
// }

// const TurmasControllers = new Turmas();

// export { TurmasControllers };
