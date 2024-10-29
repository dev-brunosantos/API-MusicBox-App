"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarFormulario = validarFormulario;
function validarFormulario(req, res, next) {
    const { nome, email, senha, cargoId } = req.body;
    if (nome === '' || email === '' || senha === '' || cargoId === '') {
        return res.json({ erro: 'O preenchimento de todos os campos são obrigatórios.' });
    }
    return next();
}
