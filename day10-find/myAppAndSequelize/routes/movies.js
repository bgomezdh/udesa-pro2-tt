const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/* GET users listing. */
router.get('/all', movieController.findAll);

 router.get('/id/:id', movieController.show);

 router.get('/busqueda/', movieController.showOne); 

 












/* router.get('/register/', movieController.create);

router.post('/register/', movieController.store);

router.get('/editMovie/:id',movieController.edit);

router.post('/editMovie/:id',movieController.update);

router.get('/deleteMovie/:id', movieController.destroy);
 */


module.exports = router;