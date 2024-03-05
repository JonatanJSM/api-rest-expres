import { getAllAlumnos, postAlumnosService, putAlumnosService, deletAlumnosService } from '../services/alumnoService.js';

export const getAlumnos = (req, res) => {

    const allAlumnos = getAllAlumnos();
    res.status(200).json(allAlumnos);

}

export const postAlumnos = (req, res) => {

    const {body} = req;    
    if(!body.nombre || !body.matricula || !body.id){

        res.status(400).json({ error: 'error' });

    }

    const alumno = {
        id: body.id,
        nombre: body.nombre,
        matricula: body.matricula
    }

    const newAlumno = postAlumnosService(alumno);
    if (newAlumno === null) {

        res.status(409).json({ error: 'El alumno ya existe' });
        return;

    }
    
    res.status(201).json({ alumno: newAlumno });

}

export const putAlumnos = (req, res) => {

    const { body } = req;
    const { id } = req.params;
    if(!id){

        res.status(400).json({ error: 'error' });

    }

    const alumno = {
        nombre: body.nombre,
        matricula: body.matricula
    }

    const updatedAlumno = putAlumnosService(id, alumno);
    if(updatedAlumno){

        res.status(200).json({ alumno: updatedAlumno });
        return;

    }
    res.status(404).json({ error: 'El alumno no puedo ser modificado' });

}

export const deletAlumnos = (req, res) => {

    const { id } = req.params;
    if(!id){

        res.status(400).json({ error: 'error' });;

    }

    const deletedAlumno = deletAlumnosService(id);
    if(deletedAlumno){

        res.status(200).json({ alumno: deletedAlumno });

    }
    res.status(404).json({ error: 'error' });;

}

