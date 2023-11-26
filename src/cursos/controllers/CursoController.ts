import { Request, Response } from "express";
import { SQL_CURSO_CRUD } from "../repositorio/cursoRepository";
import listarCursoDAO from "../dao/listarCursoDAO";

class Controlador extends listarCursoDAO {

  public listarTodos(req: Request, res: Response): void {
    const sqllistall = SQL_CURSO_CRUD.LISTAR_SALONES;
    Controlador.listartodos(sqllistall, [], res)
  }
}
const controlador = new Controlador();
export default controlador;