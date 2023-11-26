import { SQL_JURADO_CRUD } from "../repositorio/juradoRepository";
import eliminarEstuDao from "../dao/eliminarJuraDAO";

import { Request,Response } from "express";

class eliminarEstuControlador extends eliminarEstuDao{
    
    public borrarJurado(req: Request,res: Response):void{
        const codigo = req.params.idecita;
        const parametro = [codigo];
        eliminarEstuControlador.borrarPorId(
            SQL_JURADO_CRUD.ELIMINAR_JURADO,
            parametro,
            res
        );
    }
}

const ctrlEliminarEstu = new eliminarEstuControlador;
export default ctrlEliminarEstu;