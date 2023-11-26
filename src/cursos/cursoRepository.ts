export const SQL_CURSO_CRUD = {
    CREAR_SALON: "INSERT INTO cursos (id_curso) VALUES ($1);",
    LISTAR_SALONES:"SELECT * FROM cursos",
    ELIMINAR: "DELETE FROM cursos cur where cur.id_curso = $1"

  };
  