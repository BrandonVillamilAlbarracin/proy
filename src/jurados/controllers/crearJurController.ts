import { SQL_JURADO_CRUD } from "../repositorio/juradoRepository";
import crearJurDao from "../dao/crearJuraDAO";

import { Request,Response } from "express";

class crearJuradoControlador extends crearJurDao {

    public postAlcaldia(req:Request, res:Response,): void{
        //const sqlCrear = SQLESTUDIANTE.CREAR;
        const {nombre, direccion, fecha_creacion, cantidad_oficinas, id_ciudad} = req.body;
        const datos = [nombre, direccion, fecha_creacion, cantidad_oficinas, id_ciudad];
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
