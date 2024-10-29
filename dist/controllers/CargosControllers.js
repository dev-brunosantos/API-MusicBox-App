"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargosControllers = void 0;
const CargosServices_1 = require("../services/CargosServices");
const services = new CargosServices_1.CargosServices();
class Cargos {
    async criar(req, res) {
        const { cargo } = req.body;
        const criar = await services.criarCargos(cargo);
        return res.json(criar);
    }
    async listar(req, res) {
        const cargos = await services.listarCargos();
        return res.json(cargos);
    }
    async listarId(req, res) {
        const { id } = req.params;
        const cargo = await services.listarCargoID(parseInt(id));
        return res.json(cargo);
    }
    async editar(req, res) {
        const { id } = req.params;
        const { cargo } = req.body;
        const cargoId = await services.editarCargo(parseInt(id), cargo);
        return res.json(cargoId);
    }
    async apagar(req, res) {
        const { id } = req.params;
        const apagar = await services.deletarCargo(parseInt(id));
        return res.json(apagar);
    }
}
const CargosControllers = new Cargos();
exports.CargosControllers = CargosControllers;
