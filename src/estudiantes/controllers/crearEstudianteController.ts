import { SQL_ESTUDIANTE_CRUD } from "../repositorio/estudianteRepository";
import crearEstuDao from "../dao/crearDao/crearEstuDAO";

import { Request,Response } from "express";

class crearEstuControlador extends crearEstuDao {

    public postEstudiante(req:Request, res:Response,): void{
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const {documento, nombre, apellidos, voto_p, voto_r, id_curso} = req.body;
        const datos = [documento, nombre, apellidos, voto_p, voto_r, id_curso];
        crearEstuDao.crearEstudiante(
            SQL_ESTUDIANTE_CRUD.VERIFICAR,
            SQL_ESTUDIANTE_CRUD.VOTO_ESTUDIANTE,
            datos,
            res
        )
        /** */
    }
}
const ctrlEstuControlador = new crearEstuControlador();
export default ctrlEstuControlador;
