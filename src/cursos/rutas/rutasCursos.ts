import { Router } from "express";
import ctrl_listar from "../controllers/CursoController";
import ctrl_crear from "../controllers/crearCursoController";
import ctrl_elim from "../controllers/eliminarCursoController";

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
    
    this.rutasApi.get("/listarTodos", ctrl_listar.listarTodos);
    this.rutasApi.post("/crear",ctrl_crear.postCurso);
    this.rutasApi.delete("/eliminar/:ide",ctrl_elim.borrarCurso);

    
    
  }
}
const misRutas = new RutasCiudades();
export default misRutas.rutasApi;
