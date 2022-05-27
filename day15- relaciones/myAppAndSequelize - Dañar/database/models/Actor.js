module.exports = function (sequelize, dataTypes){

    let alias = 'Actor'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER
        }

    }

    let config = {
        // tableName : "movies"
         timestamps:false, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        // underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Actor = sequelize.define(alias, cols, config);
    
    /* Excluir               */
    Actor.associate = function(models){
       Actor.belongsToMany(models.Movie, {
           as:'movies',
           through:'actor_movie',
           foreignKey: 'actor_id',
           otherKey:'movie_id',
           timestamps: false,           
       })
   }

    return Actor;

}