import app from "./app.js";

async function startServer() {
  await app.listen(3000);
  console.log('Server on port 3000');
}

startServer();