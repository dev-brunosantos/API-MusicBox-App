import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

const { SECRET_KEY } = process.env

interface Payload {
    sub: string;
}

export function validarAutenticacao(req: Request, res: Response, next: NextFunction) {
    const autenticacao = req.headers.authorization
    if(!autenticacao) {
        return res.status(401).json({ erro: "Usuário não autenticado!"}).end()
    }

    const [, token] = autenticacao.split(' ')

    if (!token) {
        // return res.status(401).json({ erro: "Token mal formatado!" });
        return res.status(401).end()
    }

    try {
        // Verificar e decodificar o token
        const { sub } = verify(token, SECRET_KEY) as Payload;

        req.usuario_id = sub;
        
        //req.user = decoded; // Se quiser adicionar informações do usuário no request
        return next();
    } catch (error) {
        return res.status(401).json({ erro: "Token inválido!" });
    }
}