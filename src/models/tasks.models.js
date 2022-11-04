const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Tasks = db.define('tasks', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // q no sea nulo
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        default: false,
        field: 'is_completed',
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
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

module.exports = Tasks;