import pgPromise from "pg-promise";
import {camelizeColumns,Iclient} from "./FuncionConexion"

export const opcionesPG: pgPromise.IInitOptions<Iclient> = {
    receive(data){
        camelizeColumns(data);

    },
};