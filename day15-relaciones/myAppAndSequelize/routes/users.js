var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* Importaciones */
let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usuarios'));
    },
    filename : function(req, file, cb) {
            //      fotoPerfil-243534534534.png
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage : storage})


/* GET users listing. */
router.get('/register', userController.register);

router.post('/register', upload.single('imgPerfil') ,userController.procesarRegister);

router.get('/login', userController.login);

router.post('/login', userController.procesarLogin); 



module.exports = router;
