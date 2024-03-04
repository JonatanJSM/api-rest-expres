import express  from "express";
import alumnosRouter from "./routers/alumnos.routes.js";

const app = express();
app.use(express.json());
app.use(alumnosRouter);

export default app;