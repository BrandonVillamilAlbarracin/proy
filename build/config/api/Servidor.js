"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = require("dotenv");
const rutasCursos_1 = __importDefault(require("../../cursos/rutas/rutasCursos"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        (0, dotenv_1.config)({ path: "./.env" });
        this.port = process.env.SERVER_PORT || "8082";
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set("PORT", this.port);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        this.app.use("/api/cursos", rutasCursos_1.default);
    }
    start() {
        const puerto = this.app.get("PORT");
        this.app.listen(puerto, () => {
            console.log("servidor corriendo en ", puerto);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Servidor.js.map