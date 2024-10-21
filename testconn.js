const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

async function run() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log("Conectado com sucesso ao MongoDB!");
        // Aqui você pode fazer alguma operação para verificar se tudo está funcionando
        await client.close();
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

run();
