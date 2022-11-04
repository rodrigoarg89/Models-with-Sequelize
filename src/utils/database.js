//es para gestionar la conexion a la base de datos
//sequelize init -> config // a este archvio lo vamos a crear manuealmente

const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'todo',
    username: 'postgres',
    host: 'localhost',
    port: '5432',
    password: 'root',
    dialect: 'postgres'
});

module.exports = db;

// ahora no vamos a src