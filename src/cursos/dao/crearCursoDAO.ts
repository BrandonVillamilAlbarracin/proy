import { Response } from "express";
import pool from "../../config/connection/conexion"



class crearCursoDao {
  protected static async crearCurso(
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
            mensaje: "Curso Creado",
            nuevoCodigo:  rtaTask.id_alcaldia
          })
        }else{
          res.status(400).json({
            respuesta: "El curso puede estar repetido",
          })
        }
      })
      .catch((mierror)=>{
        console.log("Error",mierror);
        res.status(400).json({
          respuesta: "Curso no creado" 
        })
      }) 
    }

}
export default crearCursoDao;
