import { Request, Response } from 'express';
import { LoginServices } from '../services/LoginServices';

const services = new LoginServices();

class Login {
    async signIn(req: Request, res: Response) {
        const { email, senha } = req.body;
        const login = await services.signIn({ email, senha });
        return res.json(login);
    }
}

const LoginControllers = new Login();

export { LoginControllers };
