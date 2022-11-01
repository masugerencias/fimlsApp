const Sequelize = require('sequelize');

//Tengo que requerir el modelo
const FilmModel = require('./models/films')


const sequelize = new Sequelize('filmsApp','root','root',{
    host: 'localhost',
    dialect: 'mysql' //el motor de la BD
})

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force : false})
.then(() => {
    console.log('modelo Film sincronizado en tu BBDD')
});




module.exports = {
    Film
}