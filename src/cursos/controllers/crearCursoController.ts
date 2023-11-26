import { SQL_CURSO_CRUD } from "../repositorio/cursoRepository";
import crearCursoDao from "../dao/crearCursoDAO";

import { Request,Response } from "express";

class crearCursoControlador extends crearCursoDao {

    public postAlcaldia(req:Request, res:Response,): void{
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const {nombre, direccion, fecha_creacion, cantidad_oficinas, id_ciudad} = req.body;
        const datos = [nombre, direccion, fecha_creacion, cantidad_oficinas, id_ciudad];
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
