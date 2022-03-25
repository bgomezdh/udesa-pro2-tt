const alumnos = require('../db/alumnos')

const alumnoController = {
    index: ( req, res) => {
        return res.send (alumnos.lista)
    },

    aprobados: function (req,res) {
    
        let alumnosAprobados = [];
    
        for (let i = 0; i < alumnos.lista.length; i++) {
            if (alumnos.lista[i].calificacion >= 4) {
                alumnosAprobados.push(alumnos.lista[i])
            }
            
        }
    
        return res.send(alumnosAprobados)
    }
}

module.exports = alumnoController