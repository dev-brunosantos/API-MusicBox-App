import { Request, Response, NextFunction } from "express";

export function validarFormulario(req: Request, res: Response, next: NextFunction) {
    const { nome, email, senha, cargoId } = req.body 
    if(nome === "" || email === "" || senha === "" || cargoId === "") {
        return res.json({ erro: "O preenchimento de todos os campos são obrigatórios."})
    }
    return next()
}