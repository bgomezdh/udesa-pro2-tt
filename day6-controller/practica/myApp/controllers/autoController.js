const autos = require('../db/autos');

const autoController = {
    index:function(req, res) {
        return res.send(autos.lista);
      },
      buscarPorColor: function(req,res){
        let autosPorColor = [];
        let colorBuscado = req.params.color;
        
        for (let i = 0; i < autos.lista.length; i++) {
            if (colorBuscado == autos.lista[i].color) {
            autosPorColor.push(autos.lista[i])  
            }
        }
        if (autosPorColor.length > 0 ) {
            return res.send(autosPorColor)
        } else {
            return res.send('No se encontraron autos del color ' + colorBuscado)
        }
        
    }
}

module.exports = autoController;