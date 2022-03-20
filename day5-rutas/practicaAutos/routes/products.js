const express = require('express');
const router = express.Router()
const autos = require('../db/index')

router.get('/:id?', function(req,res) {
    console.log(req.params.id);
    return res.send(autos.lista)
})

module.exports = router;