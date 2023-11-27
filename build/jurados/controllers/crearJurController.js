"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const juradoRepository_1 = require("../repositorio/juradoRepository");
const crearJuraDAO_1 = __importDefault(require("../dao/crearJuraDAO"));
class crearJuradoControlador extends crearJuraDAO_1.default {
    postAlcaldia(req, res) {
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const { documento, nombre, apellidos, id_curso } = req.body;
        const datos = [documento, nombre, apellidos, id_curso];
        crearJuradoControlador.crearJurado(juradoRepository_1.SQL_JURADO_CRUD.VERIFICAR, juradoRepository_1.SQL_JURADO_CRUD.REGISTRO_JURADO, datos, res);
        /** */
    }
}
const ctrlJurControlador = new crearJuradoControlador();
exports.default = ctrlJurControlador;
//# sourceMappingURL=crearJurController.js.map