"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const OpcionConexion_1 = require("./OpcionConexion");
const varDB_1 = __importDefault(require("../logs/domains/varDB"));
const pgp = (0, pg_promise_1.default)(OpcionConexion_1.opcionesPG);
const pool = pgp(varDB_1.default);
const dbname = varDB_1.default.database;
pool
    .connect()
    .then((conn) => {
    console.log("Conexion exitosa ", dbname);
    conn.done();
})
    .catch((mierror) => {
    console.log(mierror);
});
exports.default = pool;
//# sourceMappingURL=conexion.js.map