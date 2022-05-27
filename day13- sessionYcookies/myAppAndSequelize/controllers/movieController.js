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

        /* .. */
        let counter = req.session.contador;
        if (counter != undefined) {
          counter += 1;
        } else {
          counter = 1;
        }

        req.session.contador = counter;
        
         return res.render("movies", { 
            listaPeliculas: result,
            contador: req.session.contador 
          });   
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
  },
  create : (req,res) => {
    return res.render("register")
  },
  store : (req,res) => {
    let info = req.body;
    let pelicula = {
      title: info.titulo,
      rating: info.calificacion,
      awards: info.premios,
      release_date: info.fecha,
      length: info.duracion,
      genre_id: info.genero,
    }

  movie.create(pelicula)
  .then((result) => {
    return res.redirect("/movies/all")
  }).catch((err) => {
    return res.send("Hay un error" + err)
  });
  
    
  },
  edit : (req,res) => {
    let id = req.params.id;

    movie.findByPk(id)
    .then((result) =>{

      let date = result.release_date;
      let fechaFormateada = new Date(date).toISOString().slice(0,10);

      let pelicula = {
        id : result.id,
        title : result.title,
        rating : result.rating,
        awards : result.awards,
        release_date : fechaFormateada,
        length : result.length,
        genre_id : result.genre_id
      }
      
      return res.render("movieEdit", {
          movie : pelicula
      })
    })
    
  },
  update : (req,res) => {
    let info = req.body;
    let idParaEditar = req.params.id;

    let pelicula = {
      title: info.titulo,
      rating: info.calificacion,
      awards: info.premios,
      release_date: info.fecha,
      length: info.duracion,
      genre_id: info.genero,
    }
    let filtro = {
      where : {
        id : idParaEditar
      }
    }

    movie.update(pelicula, filtro)
    .then((result) => {
      return res.redirect("/movies/all");
    }).catch((err) => {
      return res.send(err)
    });
  },
  destroy : (req,res) => {
    return res.send("Ruta para el destroy")
  }


}; 

module.exports = movieController;

