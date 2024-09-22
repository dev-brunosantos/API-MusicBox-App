import { Request, Response, NextFunction } from "express";
import { Prisma } from "../config/prisma";

const { usuario } = Prisma

export async function validarCargo(req: Request, res: Response, next: NextFunction) {
    const usuarioId = req.usuario_id;
    const usuarioExistente = await usuario.findFirst({ where: { id: usuarioId } })

    if (usuarioExistente.cargoId === 1) {
        return next()
    }
    return res.json({ erro: `O usuário ${usuarioExistente.nome} não tem permissão para realizar essa função!` })
}
