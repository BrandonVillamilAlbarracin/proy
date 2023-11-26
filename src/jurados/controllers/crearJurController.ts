import { SQL_JURADO_CRUD } from "../repositorio/juradoRepository";
import crearJurDao from "../dao/crearJuraDAO";

import { Request,Response } from "express";

class crearJuradoControlador extends crearJurDao {

    public postAlcaldia(req:Request, res:Response,): void{
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const {documento,nombre,apellidos,id_curso} = req.body;
        const datos = [documento,nombre,apellidos,id_curso];
        crearJuradoControlador.crearJurado(
            SQL_JURADO_CRUD.VERIFICAR,
            SQL_JURADO_CRUD.REGISTRO_JURADO,
            datos,
            res
        )
        /** */
    }
}
const ctrlJurControlador = new crearJuradoControlador();
export default ctrlJurControlador;
