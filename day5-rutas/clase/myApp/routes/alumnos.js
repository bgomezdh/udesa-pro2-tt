const express = require('express');
const router =express.Router();
const alumnos = require('../db/alumnos')

router.get('/all',function(req,res){
    return res.send(alumnos.lista)
})
router.get('/aprobados',function(req,res){
    return res.send(alumnos.aprobados(alumnos.lista))
})
router.get('/buscar/:dni?',function(req,res){
    let dni = req.params.dni;
    if(dni == "undefined"){
        return res.send("DNI no identificado")
    }else return res.send(`este es el alumno con el dni:   ${dni}`)
})

module.exports = router;