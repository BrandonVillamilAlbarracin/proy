import { Response } from "express";
import pool from "../../../../src/config/connection/conexion"



class actualizarEstuDAO {
  
  protected static async actualizarPorId(
    sqlActualizar: string,
    sqlValidar: string,
    params: any,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (objConsulta) => {
        const validacion = await objConsulta.one(sqlValidar, params);
        if (validacion.cantidad == 0) {
          return await objConsulta.one(sqlActualizar, params);
        } else {
          return { documento: 0 };
        }
      })
      .then((dato) => {
        if (dato.id_alcaldia != 0) {
          res.status(200).json({
            mensaje: "Estudiante Actualizado",
            id: dato.id_alcaldia,
          });
        } else {
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
  }
}
export default actualizarEstuDAO;
