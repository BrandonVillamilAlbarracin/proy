export const SQL_ESTUDIANTE_CRUD = {
    VOTO_ESTUDIANTE: "INSERT INTO estudiantes (documento, nombre, apellidos, voto_p, voto_r, id_curso) VALUES ($1, $2, $3, $4, $5, $6);",
    LISTAR_VOTANTES:"SELECT documento, nombre, apellidos, id_curso FROM estudiantes",
    ELIMINAR: "DELETE FROM cursos cur where cur.id_curso = $1",
    RESULTADO_PERSONERO: "SELECT COUNT(CASE WHEN voto_p = '1' THEN 1 END) AS PERSONERO_1, COUNT(CASE WHEN voto_p = '2' THEN 1 END) AS PERSONERO_2, COUNT(CASE WHEN voto_p = '3' THEN 1 END) AS blanco FROM Estudiantes",
    RESULTADO_REPRESENTANTE: "SELECT CASE WHEN voto_r = '1' THEN 'Brandon' WHEN voto_r = '2' THEN 'Fernando' WHEN voto_r = '3' THEN 'Blanco' ELSE 'Otro' END AS nombre_voto, COUNT(*) AS total_votos FROM Estudiantes WHERE id_curso LIKE '11%' GROUP BY voto_r ORDER BY voto_r ASC"
  };
  