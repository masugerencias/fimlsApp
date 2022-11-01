const Sequelize = require('sequelize');

const sequelize = new Sequelize ('filmsApp', 'root', 'root', {
    host: 'local',
    dialect: 'mysql' //el motor de la BD
})

