//vamos a inicar nuestros modelos

const Users = require('./users.models');
const Tasks = require('./tasks.models');

const initModels = () => {
    Users;
    Tasks; 
}

module.exports = initModels;

//vamos a ejecutarlo en app.js