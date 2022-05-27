module.exports = function (sequelize, dataTypes) {
    
    /* Alias que le asigne */
    let alias = "Movie";

    /* Configuraciones de las columnas de la tabla */
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type: dataTypes.STRING,
        },
        rating:{
            type: dataTypes.DECIMAL,
        },
        awards:{
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATE,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        genre_id:{
            type: dataTypes.INTEGER,
        }

    }

    let config = {
        tableName: 'movies', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    }

    const Movie = sequelize.define(alias, cols, config);

    /* Excluir               */
    Movie.associate = function(models){
        Movie.belongsTo(models.Genre,{
            as:'genre', //Como voy a llamar a la relación dentro del controlador
            foreignKey: 'genre_id'
        }),
        Movie.belongsToMany(models.Actor, {
            as:'actors',
            through:'actor_movie',
            foreignKey: 'movie_id',
            otherKey:'actor_id',
            timestamps: false,           
        })
    }

    return Movie;
}

