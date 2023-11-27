"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursoRepository_1 = require("../repositorio/cursoRepository");
const crearCursoDAO_1 = __importDefault(require("../dao/crearCursoDAO"));
class crearCursoControlador extends crearCursoDAO_1.default {
    postCurso(req, res) {
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const { id_curso } = req.body;
        const datos = [id_curso];
        crearCursoControlador.crearCurso(cursoRepository_1.SQL_CURSO_CRUD.VERIFICAR, cursoRepository_1.SQL_CURSO_CRUD.CREAR_SALON, datos, res);
        /** */
    }
}
const ctrlCursoControlador = new crearCursoControlador();
exports.default = ctrlCursoControlador;
//# sourceMappingURL=crearCursoController.js.map