/*
1111111111111111111111111111
 Lo primero de todo es requerir express
La inicializamos const app... */


const express = require ('express');
const app = express();

/* REquiero mi tabla de base de datos */

require('./db')

/* BODY PARSER */
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


/* 22222222222222222222222222222222
Levantamos el servidor en el port 3000, con una 
funcion anonima: app.listen
*/
app.listen(3000, () => {
    console.log('server running on port 3000')
}) ;


/*3333333333333333333333333333
Ya podemos provbar nuestra primera ruta */

app.get('/', (req, res) => {

    res.send ('primera ruta get')
});

/* 
444444444444444444444444444444444
Ya volvemos a bodyparser , 
Básicamente, lo que body-parser es lo que permite
 a Express leer el cuerpo y luego analizarlo en un 
 objeto Json que podamos entender.*/
 /* Despues de requerir body parser hay que hacer algunas configuariocnes:
 lanzar un middleware con la funcion json:
 app.use(bodyParser.json()) esta por arriba esto.
 
 Tambien hay que poner con eso la codifuicacion de URL:
 app.use(bodyParser.urlencoded({ extended: true }))*/

