import fs from 'fs';

export const getAlumnos = () => {

    const data = fs.readFileSync('./src/database/db.json', { encoding: 'utf-8' });
    const allAlumnos = JSON.parse(data);
    return allAlumnos;
    
}
