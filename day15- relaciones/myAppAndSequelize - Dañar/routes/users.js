var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')


/* GET users listing. */
router.get('/register', userController.register);

router.post('/register', userController.procesarRegister);

router.get('/login', userController.login);

router.post('/login', userController.procesarLogin); 



module.exports = router;
