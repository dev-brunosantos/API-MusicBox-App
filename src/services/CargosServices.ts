import { Prisma } from "../config/prisma";

const { cargo } = Prisma

class CargosServices {
    async criarCargos(cargoNome: string) {
        const cargoExistente = await cargo.findFirst({ where: { cargo: cargoNome } })
        if (!cargoExistente) {
            const criar = await cargo.create({ data: { cargo: cargoNome } })
            return { status: `O cargo ${criar.cargo} foi cadastrado no sistema` }
        }
        return { erro: "Erro ao cadastrar novo cargo no sistema." }
    }
    async listarCargos() {
        const cargosExistentes = await cargo.findMany()
        if (!cargosExistentes) {
            return { erro: "Nenhum cargo cadastrado no sistema." }
        }
        return { cargosExistentes }
    }
    async listarCargoID(id: number) {
        const idCargo = await cargo.findFirst({ where: { cargoId: id } })
        if (!id) {
            return { erro: "Não foi encontrado nenhum cargo com esse ID." }
        }
        return { idCargo }
    }
    async editarCargo(id: number, cargoNome: string) {
        const idCargo = await cargo.findFirst({ where: { cargoId: id } })
        if(idCargo) {
            const editar = await cargo.update({
                where: { cargoId: id },
                data: { cargo: cargoNome }
            })
            return { 
                status: "Alterado como solicitado.",
                antes: idCargo,
                alteracao: editar
            }
        }
        return { erro: "Não foi encontrado nenhum cargo com esse ID." }
    }
    async deletarCargo(id: number) {
        const idCargo = await cargo.findFirst({ where: {cargoId: id}})
        if(idCargo) {
            return {status: `O cargo ${idCargo.cargo} foi apagado do sistema com sucesso.`}
        }
        return { erro: "Não foi encontrado nenhum cargo com esse ID." }
    }
}

export { CargosServices }