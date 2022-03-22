const express = require('express');
const router = express.Router();
const alumnos = require('../db/alumnos')

router.get('/todos',function(req,res){
    return res.send(alumnos.lista)
})

router.get('/aprobados',function(req,res){
     let alumnosAprobados = [];
    for (let i = 0; i < alumnos.lista.length; i++) {
        if(alumnos.lista[i].calificacion >= 6){
            alumnosAprobados.push(alumnos.lista[i]);
        }
    }
    return res.send(alumnosAprobados); 
})

router.get('/apellido/:apellido',function(req,res){
    let apellidoBuscado = req.params.apellido;
    let alumnosPorApellido = [];
    for (let i = 0; i < alumnos.lista.length; i++) {
         if(alumnos.lista[i].apellido.toLowerCase() == apellidoBuscado){
            alumnosPorApellido.push(alumnos.lista[i]);
        } 
    } 
    return res.send(alumnosPorApellido);
})

module.exports = router;
