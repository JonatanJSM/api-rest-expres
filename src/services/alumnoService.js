import {getAlumnos} from '../database/alumnosdb.js';
import fs from 'fs';

let cachedAlumnos = null;

export const getAllAlumnos = () => {

    if (!cachedAlumnos) {

        cachedAlumnos = getAlumnos();
        
    }
    return cachedAlumnos;

}

export const postAlumnosService = (alumno) => {

    let allAlumnos = getAllAlumnos();
    let allAlumnosArray = JSON.parse(JSON.stringify(allAlumnos));

    const exists = allAlumnosArray.alumnos.some(existingAlumno => existingAlumno.id === alumno.id);
    if (exists) {

        return null;

    } 
    allAlumnosArray.alumnos.push(alumno);
    fs.writeFileSync('./src/database/db.json', JSON.stringify(allAlumnosArray, null, 2), {
        encoding: 'utf-8'
    });
    return alumno;
    
}

export const putAlumnosService = (id, updatedAlumno) => {

    let allAlumnos = getAllAlumnos();
    let allAlumnosArray = JSON.parse(JSON.stringify(allAlumnos));

    const index = allAlumnosArray.alumnos.findIndex(alumno => parseInt(alumno.id) === parseInt(id));
    console.log(index);
    if (index !== -1) {

        allAlumnosArray.alumnos[index] = { ...allAlumnosArray.alumnos[index], ...updatedAlumno };
        fs.writeFileSync('./src/database/db.json', JSON.stringify(allAlumnosArray, null, 2), {
            encoding: 'utf-8'
        });
        return allAlumnosArray.alumnos[index];

    } else {

        return null;

    }

}

export const deletAlumnosService = (id) => {

    let allAlumnos = getAllAlumnos();
    let allAlumnosArray = JSON.parse(JSON.stringify(allAlumnos));

    const index = allAlumnosArray.alumnos.findIndex(alumno => parseInt(alumno.id) === parseInt(id));

    if (index !== -1) {

        const deletedAlumno = allAlumnosArray.alumnos.splice(index, 1)[0];
        fs.writeFileSync('./src/database/db.json', JSON.stringify(allAlumnosArray, null, 2), {
            encoding: 'utf-8'
        });
        return deletedAlumno;

    } else {
        
        return null;

    }
    
}
