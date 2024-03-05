import { getAllAlumnos, postAlumnosService } from '../services/alumnoService.js';

export const getAlumnos = (req, res) => {

    const allAlumnos = getAllAlumnos();
    res.status(200).send(allAlumnos);

}

export const postAlumnos = (req, res) => {

    const {body} = req;
    if(!body.nombre || !body.matricula){

        return;

    }
    const alumno = {
        nombre: body.nombre,
        matricula: body.matricula
    }
    const newAlumno = postAlumnosService(alumno);
    res.status(201).send(newAlumno);

}

export const putAlumnos = (req, res) => {

    res.send('PUT Alumnos');

}

export const deletAlumnos = (req, res) => {

    res.send('DELETE Alumnos');

}

