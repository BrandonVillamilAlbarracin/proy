"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursoRepository_1 = require("../repositorio/cursoRepository");
const eliminarCursoDAO_1 = __importDefault(require("../dao/eliminarCursoDAO"));
class eliminarCursoControlador extends eliminarCursoDAO_1.default {
    borrarCurso(req, res) {
        const codigo = req.params.idecita;
        const parametro = [codigo];
        eliminarCursoControlador.borrarPorId(cursoRepository_1.SQL_CURSO_CRUD.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarCurso = new eliminarCursoControlador;
exports.default = ctrlEliminarCurso;
//# sourceMappingURL=eliminarCursoController.js.map