import { SQL_ESTUDIANTE_CRUD } from "../repositorio/estudianteRepository";
import crearEstuDao from "../dao/crearDao/crearEstuDAO";

import { Request,Response } from "express";

class crearEstuControlador extends crearEstuDao {

    public postAlcaldia(req:Request, res:Response,): void{
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const {nombre, direccion, fecha_creacion, cantidad_oficinas, id_ciudad} = req.body;
        const datos = [nombre, direccion, fecha_creacion, cantidad_oficinas, id_ciudad];
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
