import { Request, Response } from "express";
import { hash } from 'bcrypt';
import { UsuarioServices } from "../services/UsuarioServices";


const services = new UsuarioServices() ;

class Usuario {
    async criar(req: Request, res: Response) {
        const { nome, email, senha, cargoId} = req.body 
        const senhaCriptografada = await hash(senha, 10)
        const criar = await services.criarUsuario({nome, email, senhaCriptografada, cargoId})
        return res.json(criar)
    }
}

const UsuarioController = new Usuario()


export { UsuarioController }