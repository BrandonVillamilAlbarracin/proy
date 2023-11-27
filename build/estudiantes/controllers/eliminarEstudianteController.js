"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estudianteRepository_1 = require("../repositorio/estudianteRepository");
const eliminarEstuDAO_1 = __importDefault(require("../dao/eliminarDao/eliminarEstuDAO"));
class eliminarEstuControlador extends eliminarEstuDAO_1.default {
    borrarEstudiante(req, res) {
        const codigo = req.params.idecita;
        const parametro = [codigo];
        eliminarEstuControlador.borrarPorId(estudianteRepository_1.SQL_ESTUDIANTE_CRUD.ELIMINAR, parametro, res);
    }
}
const ctrlEliminarEstu = new eliminarEstuControlador;
exports.default = ctrlEliminarEstu;
//# sourceMappingURL=eliminarEstudianteController.js.map