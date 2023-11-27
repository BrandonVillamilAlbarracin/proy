"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexion_1 = __importDefault(require("../../../src/config/connection/conexion"));
class eliminarCursoDAO {
    static borrarPorId(sqlBorrar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .result(sqlBorrar, params)
                .then((dato) => {
                console.log(dato);
                return res.status(200).json({
                    mensaje: "Curso borrado",
                    resultado: dato.rowCount
                });
            }).catch((mierror) => {
                console.log(mierror);
                res.status(200).json({
                    mensaje: "Error en el curso borrado"
                });
            });
        });
    }
}
exports.default = eliminarCursoDAO;
//# sourceMappingURL=eliminarCursoDAO.js.map