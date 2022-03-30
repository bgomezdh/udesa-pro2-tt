const express = require ('express');
const router = express.Router ();

const autoController = require('../controllers/autoController')

router.get('/',autoController.index );

router.get('/color/:color', autoController.buscarPorColor)

module.exports = router