import { SQL_ESTUDIANTE_CRUD } from "../repositorio/estudianteRepository";
import eliminarEstuDao from "../dao/eliminarDao/eliminarEstuDAO";

import { Request,Response } from "express";

class eliminarEstuControlador extends eliminarEstuDao{
    
    public borrarEstudiante(req: Request,res: Response):void{
        const codigo = req.params.idecita;
        const parametro = [codigo];
        eliminarEstuControlador.borrarPorId(
            SQL_ESTUDIANTE_CRUD.ELIMINAR,
            parametro,
            res
        );
    }
}

const ctrlEliminarEstu = new eliminarEstuControlador;
export default ctrlEliminarEstu;