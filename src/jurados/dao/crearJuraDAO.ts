import { Response } from "express";
import pool from "../../../src/config/connection/conexion"


class crearJurDao {
  protected static async crearJurado(
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
            mensaje: "Jurado Creado",
            nuevoCodigo:  rtaTask.id_alcaldia
          })
        }else{
          res.status(400).json({
            respuesta: "El jurado puede estar repetido",
          })
        }
      })
      .catch((mierror)=>{
        console.log("Error",mierror);
        res.status(400).json({
          respuesta: "Jurado no creado" 
        })
      }) 
    }

}
export default crearJurDao;
