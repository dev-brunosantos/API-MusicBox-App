import express from 'express';
import cors from 'cors';
import { rotas } from './routes/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(rotas.routesLogin);
app.use(rotas.routesUsuario);
app.use(rotas.routesCargos);
app.use(rotas.routesTurmas);

export { app };
