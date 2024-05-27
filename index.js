const express = require('express');
const app = express();
const logger = require('./middlewares/logs');
const aulas = require('./routes/aula');
const auth = require('./routes/auth');
dotenv = require('dotenv');
dotenv.config();
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

//Rutas
// Si queremos utilizar un middleware en esta sección lo poedmos colocar como segundo argumento así toda la ruta aulas tendrá el middleware, 
app.use('/aulas', aulas);
app.use('/auth', auth)


//Punto de ejecucion del servidor
app.listen(process.env.SERVER_PORT, () => {
    // Pueden personalizar su mensaje de consola
    console.log(`Servidor corriendo en ${process.env.SERVER}:${process.env.SERVER_PORT}`);
})