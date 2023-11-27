"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estudianteRepository_1 = require("../repositorio/estudianteRepository");
const crearEstuDAO_1 = __importDefault(require("../dao/crearDao/crearEstuDAO"));
class crearEstuControlador extends crearEstuDAO_1.default {
    postEstudiante(req, res) {
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const { documento, nombre, apellidos, voto_p, voto_r, id_curso } = req.body;
        const datos = [documento, nombre, apellidos, voto_p, voto_r, id_curso];
        crearEstuDAO_1.default.crearEstudiante(estudianteRepository_1.SQL_ESTUDIANTE_CRUD.VERIFICAR, estudianteRepository_1.SQL_ESTUDIANTE_CRUD.VOTO_ESTUDIANTE, datos, res);
        /** */
    }
}
const ctrlEstuControlador = new crearEstuControlador();
exports.default = ctrlEstuControlador;
//# sourceMappingURL=crearEstudianteController.js.map