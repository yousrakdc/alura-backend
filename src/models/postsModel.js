import conectarAoBanco from "../config/dbConfig.js"

// Conectando ao banco de dados MongoDB usando a URI armazenada nas variáveis de ambiente
const conexao = await conectarAoBanco(process.env.MONGO_URI)

// Função assíncrona para buscar todos os posts no banco de dados MongoDB
export default async function getTodosPosts() {
    // Acessando o banco de dados 'imersao-instabytes' após a conexão ser estabelecida
    const db = conexao.db("imersao-instabytes")
    // Acessando a coleção 'posts' no banco de dados
    const colecao = db.collection("posts")
    // Retornando todos os posts da coleção como um array
    return colecao.find().toArray()
}