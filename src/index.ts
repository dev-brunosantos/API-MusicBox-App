import { app } from "./App";
import dotenv from "dotenv";

dotenv.config()
const { LINK, PORT } = process.env

const link = LINK 
const port = PORT 
const url = `${link}:${port}`

app.listen(port, () => console.log(`Servidor rodando em: ${url}`))