import { SQL_CURSO_CRUD } from "../repositorio/cursoRepository";
import eliminarCursoDao from "../dao/eliminarCursoDAO";

import { Request,Response } from "express";

class eliminarCursoControlador extends eliminarCursoDao{
    
    public borrarCurso(req: Request,res: Response):void{
        const codigo = req.params.idecita;
        const parametro = [codigo];
        eliminarCursoControlador.borrarPorId(
            SQL_CURSO_CRUD.ELIMINAR,
            parametro,
            res
        );
    }
}

const ctrlEliminarCurso = new eliminarCursoControlador;
export default ctrlEliminarCurso;