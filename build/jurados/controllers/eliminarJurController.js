"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const juradoRepository_1 = require("../repositorio/juradoRepository");
const eliminarJuraDAO_1 = __importDefault(require("../dao/eliminarJuraDAO"));
class eliminarEstuControlador extends eliminarJuraDAO_1.default {
    borrarJurado(req, res) {
        const codigo = req.params.idecita;
        const parametro = [codigo];
        eliminarEstuControlador.borrarPorId(juradoRepository_1.SQL_JURADO_CRUD.ELIMINAR_JURADO, parametro, res);
    }
}
const ctrlEliminarEstu = new eliminarEstuControlador;
exports.default = ctrlEliminarEstu;
//# sourceMappingURL=eliminarJurController.js.map