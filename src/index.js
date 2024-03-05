import app from "./app.js";
import {swaggerdoc} from "./routers/swagger.js";

async function startServer () {
  await app.listen(3000);
  swaggerdoc(app,3000);
  console.log('Server on port 3000');

}

startServer();