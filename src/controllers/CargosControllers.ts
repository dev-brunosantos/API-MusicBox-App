// import { Request, Response } from 'express';
// import { CargosServices } from '../services/CargosServices';

// const services = new CargosServices();

// class Cargos {
//     async criar(req: Request, res: Response) {
//         const { cargo } = req.body;
//         const criar = await services.criarCargos(cargo);
//         return res.json(criar);
//     }
//     async listar(req: Request, res: Response) {
//         const cargos = await services.listarCargos();
//         return res.json(cargos);
//     }
//     async listarId(req: Request, res: Response) {
//         const { id } = req.params;
//         const cargo = await services.listarCargoID(parseInt(id));
//         return res.json(cargo);
//     }
//     async editar(req: Request, res: Response) {
//         const { id } = req.params;
//         const { cargo } = req.body;
//         const cargoId = await services.editarCargo(parseInt(id), cargo);
//         return res.json(cargoId);
//     }
//     async apagar(req: Request, res: Response) {
//         const { id } = req.params;
//         const apagar = await services.deletarCargo(parseInt(id));
//         return res.json(apagar);
//     }
// }

// const CargosControllers = new Cargos();

// export { CargosControllers };
