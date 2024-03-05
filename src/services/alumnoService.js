import {getAlumnos} from '../database/alumnosdb.js';
import fs from 'fs';


export const getAllAlumnos = () => {

    const allAlumnos = getAlumnos();
    return allAlumnos;

}

export const postAlumnosService = (alumno) => {

    const allAlumnos = getAlumnos();
    allAlumnos.push(alumno);
    fs.writeFileSync('./src/database/db.json', JSON.stringify(allAlumnos,null,2),{
        encoding: 'utf-8'
    });
    
}

export const putAlumnos = () => {
    
}

export const deletAlumnos = () => {
    
}
