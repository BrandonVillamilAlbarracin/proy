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
const conexion_1 = __importDefault(require("../../../../src/config/connection/conexion"));
class actualizarEstuDAO {
    static actualizarPorId(sqlActualizar, sqlValidar, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexion_1.default
                .task((objConsulta) => __awaiter(this, void 0, void 0, function* () {
                const validacion = yield objConsulta.one(sqlValidar, params);
                if (validacion.cantidad == 0) {
                    return yield objConsulta.one(sqlActualizar, params);
                }
                else {
                    return { documento: 0 };
                }
            }))
                .then((dato) => {
                if (dato.id_alcaldia != 0) {
                    res.status(200).json({
                        mensaje: "Estudiante Actualizado",
                        id: dato.id_alcaldia,
                    });
                }
                else {
                    res.status(418).json({
                        respuesta: "El estudiante no se pudo actualizar",
                    });
                }
            })
                .catch((mierror) => {
                console.log(mierror);
                res.status(200).json({
                    mensaje: "Error no existe ese estudiante",
                });
            });
        });
    }
}
exports.default = actualizarEstuDAO;
//# sourceMappingURL=actualizarEstuDAO.js.map