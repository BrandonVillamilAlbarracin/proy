import { Response } from "express";
import pool from "../../../config/connection/conexion"

class listarEstuDAO {
    protected static async listartodos(
        sqllistall: string,
        params: any,
        res: Response
      ): Promise<any> {
        await pool
          .result(sqllistall, params)
          .then((respuesta) => {
            console.log("=======>", respuesta.rowCount);
            return res
              .status(200)
              .json({ mensaje: "si funciona", responde: respuesta.rows });
          })
          .catch((errorcito) => {
            console.log("====>", errorcito);
            res.status(400).json({ mensaje: "totioooooo" });
          });
      }
}
export default listarEstuDAO;