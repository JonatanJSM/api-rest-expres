import { Router } from "express";
import { getAlumnos, postAlumnos, putAlumnos, deletAlumnos } from "../controllers/alumnos.controller.js";

const router = Router();   
// https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
// GET para obtener una lista de alumnos. El alumno tendra 2 propiedades, nombre y matricula.
router.get('/alumnos', getAlumnos);

// POST para crear un alumno con las mismas propiedades.
router.post('/alumnos', postAlumnos);

// PUT para editar el alumno
router.put('/alumnos/:id', putAlumnos);

// DELETE para eliminar el alumno
router.delete('/alumnos/:id', deletAlumnos);

export default router;