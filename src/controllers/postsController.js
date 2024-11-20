import getTodosPosts from "../models/postsModel.js";

async function listarPosts(req, res) {
    // Obtendo todos os posts do banco de dados
    const posts = await getTodosPosts()
    // Respondendo com os posts no formato JSON e código de status 200 (sucesso)
    res.status(200).json(posts);
}

export default listarPosts;