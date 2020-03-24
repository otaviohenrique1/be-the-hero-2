const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
    Rota/Recurso
*/
/*
    Métodos HTTP:
    -GET: Buscar/listar uma informação no back-end
    -POST: Criar uma informação no back-end
    -PUT: Alterar uma informação no back-end
    -DELETE: Deletar uma informação no back-end
*/
/*
    Tipos de parâmetros:
    -Query Params: Parâmetros nomedados enviados na rota após "?" (Filtros, Paginação)
    -Route Params: Parâmetros utilizados para indentificar recursos
    -Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CounchDB, etc
*/

/*
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/


app.listen(3333); // 3333 -> porta de acesso
// Link de acesso -> localhost:3333