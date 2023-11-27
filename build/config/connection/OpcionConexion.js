"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionesPG = void 0;
const FuncionConexion_1 = require("./FuncionConexion");
exports.opcionesPG = {
    receive(data) {
        (0, FuncionConexion_1.camelizeColumns)(data);
    }
};
//# sourceMappingURL=OpcionConexion.js.map