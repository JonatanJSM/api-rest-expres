import DB from './db.json' assert { type: "json" };

export const getAlumnos = () => {
    return DB.alumnos;
}
