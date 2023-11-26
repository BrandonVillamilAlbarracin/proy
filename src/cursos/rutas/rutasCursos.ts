import { Router } from "express";
import ctrl_listar from "../controllers/CursoController";
import ctrl_crear from "../controllers/crearCursoController";
import ctrl_act from "../../ciudades/controllers/Controller_Actualizar";
import ctrl_elim from "../../ciudades/controllers/Controller_Eliminar";

class RutasCiudades {
  public rutasApi: Router;
  constructor() {
    this.rutasApi = Router();
    this.config();
  }
  public config() {
    //Método para manejo de los errores
    this.rutas();
  }
  public rutas() {
    
    this.rutasApi.get("/listarTodos", ctrl_listar.listarTodo);
    this.rutasApi.post("/crear",ctrl_crear.crear);
    this.rutasApi.put("/actualizar/:ide",ctrl_act.actualizar);
    this.rutasApi.delete("/eliminar/:ide",ctrl_elim.eliminar);

    
    
  }
}
const misRutas = new RutasCiudades();
export default misRutas.rutasApi;
