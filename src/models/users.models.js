const db = require('../utils/database') //xq estos modelos van a trabajar sobre nuestra base de datos
const { DataTypes } = require('sequelize');

//antes definiamos  el nombre de la columna con el tipo de datos, eso es lo q vamos a hacer ahora

// escriimos los medelos con la inical en mayusculas
const Users = db.define('users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // q no sea nulo
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',// en la base de datos aparecera así
        allowNull: false
    }, //para saber cuando se creo el usuario
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
    }
})//hacemo uso de la isntacncia db y definimos los modelos

module.exports = Users;

//ahora vamos a crear nuestro archivo init models