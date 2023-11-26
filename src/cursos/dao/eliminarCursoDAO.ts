import { Response } from "express";
import pool from "../../../src/config/connection/conexion"




class eliminarCursoDAO{
    protected static async borrarPorId(
        sqlBorrar: string,
        params: any,
        res: Response
    ): Promise<any>{
        await pool
        .result(sqlBorrar,params)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({
                mensaje: "Curso borrado",
                resultado: dato.rowCount
            })  
        }).catch((mierror)=>{
            console.log(mierror);
            res.status(200).json({
                mensaje: "Error en el curso borrado"
            })
        })
    }
}
export default eliminarCursoDAO;