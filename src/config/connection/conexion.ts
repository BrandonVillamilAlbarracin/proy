import pgPromise from "pg-promise";
import { opcionesPG } from "./OpcionConexion";
import variablesConexion from "../logs/domains/varDB";

const pgp = pgPromise(opcionesPG);
const pool = pgp(variablesConexion);
const dbname = variablesConexion.database;

pool
  .connect()
  .then((conn) => {
    console.log("Conexion exitosa", dbname);

    conn.done();
  })

  .catch((mierror: any) => {
    console.log(">>>", mierror);
  });
export default pool;
