const express = require('express');
const app = express();
const logger = require('./middlewares/logs');
const aulas = require('./routes/aula');
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

//Rutas
// Si queremos utilizar un middleware en esta sección lo poedmos colocar como segundo argumento así toda la ruta aulas tendrá el middleware, 
app.use('/aulas', aulas);


//Punto de ejecucion del servidor
app.listen(3000, () => {
    // Pueden personalizar su mensaje de consola
    console.log('Servidor ejecutandose !!!');
})