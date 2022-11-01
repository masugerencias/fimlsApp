module.exports = (sequelize, type) => {

        return sequelize.define('film', {
            id:{
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titles: type.STRING,
            description: type.STRING,
            score: type.INTEGER,
            director: type.STRING
        })

}