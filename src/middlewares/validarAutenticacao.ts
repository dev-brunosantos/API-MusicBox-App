import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

const { JWT_SECRET } = process.env

interface Payload {
    sub: string;
}

export function validarAutenticacao(req: Request, res: Response, next: NextFunction) {
    
    const autorizacao = req.headers.authorization;

    if(!autorizacao) { return res.status(401).end() }

    const [, token] = autorizacao.split(" ")

    try {
        const { sub } = verify(token, JWT_SECRET) as Payload
        req.usuario_id = sub;
        return next();
    } catch (error) {
        return res.status(401).end()
    }
}