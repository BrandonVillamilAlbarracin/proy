export const SQL_JURADO_CRUD = {
    REGISTRO_JURADO: "INSERT INTO estudiantes (documento, nombre, apellidos, id_curso) VALUES ($1, $2, $3, $4);",
    MESAS_JURADOS:"SELECT jurados.nombre AS nombre_jurado, cursos.id_curso FROM jurados JOIN cursos ON jurados.id_curso = cursos.id_curso;",
    ELIMINAR_JURADO: "DELETE FROM cursos cur where cur.id_curso = $1",
    VERIFICAR: "SELECT COUNT(documento) AS cantidad FROM jurados a WHERE lower(a.nombre) = lower($1)"
  };