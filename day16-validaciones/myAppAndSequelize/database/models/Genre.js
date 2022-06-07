module.exports = function(sequelize, dataTypes){
    let alias = 'Genre';
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name:{
            type: dataTypes.INTEGER,
        },
        ranking:{
            type: dataTypes.DATE,
        },
        active:{
            type: dataTypes.INTEGER,
        },
    }
    let config = {
        table:'genres',
        timestamps: false,
        underscore: true,
    }
    const Genre = sequelize.define(alias,cols,config);

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }

    return Genre;
}