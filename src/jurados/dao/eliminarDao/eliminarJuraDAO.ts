import { Response } from "express";
import pool from "../../../config/connection/conexion"



class eliminarJurDAO{
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
                mensaje: "Jurado borrado",
                resultado: dato.rowCount
            })  
        }).catch((mierror)=>{
            console.log(mierror);
            res.status(200).json({
                mensaje: "Eror en el jurado borrado"
            })
        })
    }
}
export default eliminarJurDAO;