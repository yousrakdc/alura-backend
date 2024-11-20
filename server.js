import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Inicializando o servidor express
const app = express();
routes(app);

// Iniciando o servidor para escutar na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando ...");
});
