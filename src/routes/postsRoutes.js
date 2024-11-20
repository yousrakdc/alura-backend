import express from "express";
import listarPosts from "../controllers/postsController.js";

const routes = (app) => {
    // Middleware para que o servidor entenda JSON no corpo das requisições
    app.use(express.json())
    // Rota GET para listar todos os posts
    app.get('/posts', listarPosts);
}

export default routes;