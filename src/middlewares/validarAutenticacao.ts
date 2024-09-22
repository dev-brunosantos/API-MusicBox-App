import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

const { SECRET_KEY } = process.env

export function validarAutenticacao(req: Request, res: Response, next: NextFunction) {
    const autenticacao = req.headers.authorization
    if(!autenticacao) {
        return res.status(401).json({ erro: "Usuário não autenticado!"}).end()
    }

    const [, token] = autenticacao.split(' ')

    if (!token) {
        return res.status(401).json({ erro: "Token mal formatado!" });
    }

    try {
        // Verificar e decodificar o token
        const decoded = verify(token, SECRET_KEY);
        //req.user = decoded; // Se quiser adicionar informações do usuário no request
        return next();
    } catch (error) {
        return res.status(401).json({ erro: "Token inválido!" });
    }
}