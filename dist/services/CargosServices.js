"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargosServices = void 0;
const prisma_1 = require("../config/prisma");
const { cargo } = prisma_1.Prisma;
class CargosServices {
    async criarCargos(cargoNome) {
        const cargoExistente = await cargo.findFirst({ where: { cargo: cargoNome } });
        if (!cargoExistente) {
            const criar = await cargo.create({ data: { cargo: cargoNome } });
            return { status: `O cargo ${criar.cargo} foi cadastrado no sistema` };
        }
        return { erro: 'O cargo informado já está cadastrado no sistema.' };
    }
    async listarCargos() {
        const cargosExistentes = await cargo.findMany();
        if (!cargosExistentes) {
            return { erro: 'Nenhum cargo cadastrado no sistema.' };
        }
        return { cargosExistentes };
    }
    async listarCargoID(id) {
        const idCargo = await cargo.findFirst({ where: { cargoId: id } });
        if (!id) {
            return { erro: 'Não foi encontrado nenhum cargo com esse ID.' };
        }
        return { idCargo };
    }
    async editarCargo(id, cargoNome) {
        const idCargo = await cargo.findFirst({ where: { cargoId: id } });
        if (idCargo) {
            const editar = await cargo.update({
                where: { cargoId: id },
                data: { cargo: cargoNome },
            });
            return {
                status: 'Alterado como solicitado.',
                antes: idCargo,
                alteracao: editar,
            };
        }
        return { erro: 'Não foi encontrado nenhum cargo com esse ID.' };
    }
    async deletarCargo(id) {
        const idCargo = await cargo.findFirst({ where: { cargoId: id } });
        if (idCargo) {
            const apagar = await cargo.delete({ where: { cargoId: id } });
            return {
                status: `O cargo ${idCargo.cargo} foi apagado do sistema com sucesso.`,
            };
        }
        return { erro: 'Não foi encontrado nenhum cargo com esse ID.' };
    }
}
exports.CargosServices = CargosServices;
