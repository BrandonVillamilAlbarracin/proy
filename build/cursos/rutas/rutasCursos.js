"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CursoController_1 = __importDefault(require("../controllers/CursoController"));
const crearCursoController_1 = __importDefault(require("../controllers/crearCursoController"));
const eliminarCursoController_1 = __importDefault(require("../controllers/eliminarCursoController"));
class RutasCiudades {
    constructor() {
        this.rutasApi = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Método para manejo de los errores
        this.rutas();
    }
    rutas() {
        this.rutasApi.get("/listarTodos", CursoController_1.default.listarTodos);
        this.rutasApi.post("/crear", crearCursoController_1.default.postCurso);
        this.rutasApi.delete("/eliminar/:ide", eliminarCursoController_1.default.borrarCurso);
    }
}
const misRutas = new RutasCiudades();
exports.default = misRutas.rutasApi;
//# sourceMappingURL=rutasCursos.js.map