const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.index)

router.get('/aprobados',alumnoController.aprobados)



module.exports = router;
