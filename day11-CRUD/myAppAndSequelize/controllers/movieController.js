const db = require("../database/models");
const movie = db.Movie; /* El alias que le pondre a mi modelo */
const op = db.Sequelize.Op;

const movieController = {
  findAll: (req, res) => {
    movie
      .findAll({
          /* where : [{ awards : 1 }, { length : 120}] */
         /*  order : [["title", "ASC"]] */
         /* limit : 5,
         offset : 3 */
      })
      .then((result) => {
        
         return res.render("movies", { listaPeliculas: result });   
      });
  },
  show : (req, res) => {
    let id = req.params.id;
    movie.findByPk(id).then((result) =>{

      let date = result.release_date;
      let fechaFormateada = new Date(date).toISOString().slice(0,10);

      let movie = {
        title : result.title,
        rating : result.rating,
        awards : result.awards,
        release_date : fechaFormateada,
        length : result.length,
        genre_id : result.genre_id
      }
      
      return res.render("moviesDetails", {
          movie : movie
      })
    })
  },
  showOne : (req,res) => {
    let buscada = req.query.pelicula;
    movie.findOne({
      where : 
      /* { title : buscada} */
      { title : {[op.like] : "%" + buscada
      }}

    }).then((result) => {
      res.send(result)
    })
  }

}; 

module.exports = movieController;

