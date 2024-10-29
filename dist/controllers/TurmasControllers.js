"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurmasControllers = void 0;
const TurmasServices_1 = require("../services/TurmasServices");
const services = new TurmasServices_1.TurmasServices();
class Turmas {
    async novaTurma(req, res) {
        const { turma } = req.body;
        const id = Math.floor(Math.random() * 50000) + 1;
        const criar = await services.criarTurma({ id, turma });
        return res.json(criar);
    }
    async verTurmas(req, res) {
        const turmas = await services.listarTurmas();
        return res.json(turmas);
    }
    async turmaId(req, res) {
        const { id } = req.params;
        const turma = await services.listarTurmaID(parseInt(id));
        return res.json(turma);
    }
    async editarTurma(req, res) {
        const { id } = req.params;
        const { turma } = req.body;
        const editar = await services.editarTurma({ id: parseInt(id), turma });
        return res.json(editar);
    }
    async apagarTurma(req, res) {
        const { id } = req.params;
        const apagar = await services.apagarTurma(parseInt(id));
        return res.json(apagar);
    }
}
const TurmasControllers = new Turmas();
exports.TurmasControllers = TurmasControllers;
