import { SQL_CURSO_CRUD } from "../repositorio/cursoRepository";
import crearCursoDao from "../dao/crearCursoDAO";

import { Request,Response } from "express";

class crearCursoControlador extends crearCursoDao {

    public postCurso(req:Request, res:Response,): void{
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const {id_curso} = req.body;
        const datos = [id_curso];
        crearCursoControlador.crearCurso(
            SQL_CURSO_CRUD.VERIFICAR,
            SQL_CURSO_CRUD.CREAR_SALON,
            datos,
            res
        )
        /** */
    }
}
const ctrlCursoControlador = new crearCursoControlador();
export default ctrlCursoControlador;
