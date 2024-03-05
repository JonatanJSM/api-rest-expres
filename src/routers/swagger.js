import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
        title: "API",
        version: "1.0.0",
        description: "API for my application"
        }
    },
    apis:["./src/routers/*.js"]
}

const swaggerSpec = swaggerJSDoc(options);

export const swaggerdoc = (app) => {
    
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

}