//vamos a crear nuestro serv de expres y vamos a conectar nuestra DB

const express = require('express');
const initModels = require('./models/initModels');

// impotamos la instancia
const db = require('./utils/database');

const app = express();

const PORT = 8000;

//abajo de port

db.authenticate() //metodo para autenticar con la base de datos creada. devuelve una promesa
        .then(() => console.log('autenticacion exitosa'))//manejamos la promesa
            .catch((error) => conosle.log(error)); 

//una vez autenticados, vamos a sincronizarnos a nuestra base de datos
db.sync() // sirve para sincronizar la base de datos     //devuelve una promesa
    .then(() => console.log('Base sincronizada'))
    .catch((error) => console.log(error))

//esto es equivalente a conectarnos desde DBeaver con el enchufe


initModels(); // se va a autoimportar, comom es una function si la ejecuto ()
//matamos el servidor y volvemos a ejecutarlo con npm run dev y luego nos vvamos a dbveaer donde tenemos la database todo, vaoa s a tabala y tendremos las tablas con nuestro campos creados



// app.get('/', (req, res)  => {
//     res.status(200).json('todo bien');
// })

app.listen(PORT, () => console.log('servidor corriendo'));

