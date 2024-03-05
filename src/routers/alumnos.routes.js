import { Router } from "express";
import { getAlumnos, postAlumnos, putAlumnos, deletAlumnos } from "../controllers/alumnos.controller.js";

const router = Router();   

/**
 * @openapi
 * /alumnos:
 *   get:
 *     description: Devuelve todos los alumnos
 *     tags:
 *       - Get alumnos
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *   
 *   post:
 *     description: Agrega un nuevo alumno
 *     tags:
 *       - Add alumno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: int
 *                 example: "6"
 *               matricula:
 *                 type: string
 *                 example: "2024001"
 *               nombre:
 *                 type: string
 *                 example: "Juan Perez"
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Created
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: int
 *                       example: "6"
 *                     matricula:
 *                       type: string
 *                       example: "2024001"
 *                     nombre:
 *                       type: string
 *                       example: "Juan Perez"
 *  @openapi
 *   /alumnos/{id}:
 *   put:
 *     description: Actualiza un alumno existente
 *     tags:
 *       - Update alumno
 *     parameters:
 *       - name: id
 *         in: path
 *         required: false
 *         description: ID del alumno a actualizar
 *         schema:
 *           type: int
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *                 example: "2024002"
 *               nombre:
 *                 type: string
 *                 example: "Maria Lopez"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Alumno actualizado correctamente
 *   
 *   delete:
 *     description: Elimina un alumno existente
 *     tags:
 *       - Delete alumno
 *     parameters:
 *       - name: id
 *         in: path
 *         required: false
 *         description: ID del alumno a eliminar
 *         schema:
 *           type: int
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: Alumno eliminado correctamente
 */

router.get('/alumnos', getAlumnos);

router.post('/alumnos', postAlumnos);

router.put('/alumnos/:id', putAlumnos);

router.delete('/alumnos/:id', deletAlumnos);

export default router;