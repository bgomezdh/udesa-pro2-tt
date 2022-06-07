const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/* GET users listing. */

/* RUTAS CLASE ANTERIOR */
router.get('/all', movieController.findAll);

router.get('/id/:id', movieController.show);

router.get('/busqueda/', movieController.showOne); 

                                                    /* RUTAS CLASE DE HOY */

/* MUESTRA EL FORM DE CREAR UNA PELICULA */
router.get('/register/', movieController.create);

/* PROCESA EL FORMULARIO DE CREAR UNA PELICULA   */
router.post('/register/', movieController.store);

/* MUESTRA EL FORM DE EDITAR UNA PELICULA */
router.get('/editMovie/:id',movieController.edit);

/* PROCESA EL FORMULARIO DE EDITAR UNA PELICULA   */
router.post('/editMovie/:id',movieController.update);

/* ELIMINAR UN REGISTRO */
router.get('/deleteMovie/:id', movieController.destroy);

module.exports = router;