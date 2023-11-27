"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursoRepository_1 = require("../repositorio/cursoRepository");
const listarCursoDAO_1 = __importDefault(require("../dao/listarCursoDAO"));
class Controlador extends listarCursoDAO_1.default {
    listarTodos(req, res) {
        const sqllistall = cursoRepository_1.SQL_CURSO_CRUD.LISTAR_SALONES;
        Controlador.listartodos(sqllistall, [], res);
    }
}
const controlador = new Controlador();
exports.default = controlador;
//# sourceMappingURL=CursoController.js.map