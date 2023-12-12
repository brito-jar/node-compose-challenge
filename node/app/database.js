const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "desafio",
});

connection.connect(error => {
    if (error) throw error;

    console.log('Conectado ao banco de dados MySQL!');

    const sql = `CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )`;

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;

        console.log('Tabela criada com sucesso!');
    });
});

module.exports = connection;
