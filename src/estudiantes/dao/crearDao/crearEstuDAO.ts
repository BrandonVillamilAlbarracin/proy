import { Response } from "express";
import pool from "../../../../src/config/connection/conexion"


class crearEstuDao {
  protected static async crearEstudiante(
    sqlConfirmar: string,
    sqlCrear: string,
    params: any,
    res: Response
  ):Promise<any>{
    await pool
      .task(async(consulta)=>{
        const dato = await consulta.one(sqlConfirmar, params)
        if (dato.cantidad == 0) {
          return await consulta.one(sqlCrear,params);
        } else {
          return{documento : 0};
        }
      }).then((rtaTask)=>{
        if(rtaTask.id_alcaldia != 0){
          res.status(200).json({
            mensaje: "Estudiante Creado",
            nuevoCodigo:  rtaTask.id_alcaldia
          })
        }else{
          res.status(400).json({
            respuesta: "El estudiante puede estar repetido",
          })
        }
      })
      .catch((mierror)=>{
        console.log("Error",mierror);
        res.status(400).json({
          respuesta: "Estudiante no creado" 
        })
      }) 
    }

}
export default crearEstuDao;
