const alumnos ={
    lista:[
        {nombre:"Oliver",
        apellido:"Andersen",
        puntos:7
    },
    {nombre:"Lola",
        apellido:"Bellini",
        puntos:9
    },{nombre:"Segundo",
    apellido:"Benito",
    puntos:4
},{nombre:"Lucila",
apellido:"Cabello",
puntos:3
},{nombre:"María",
apellido:"Calliera",
puntos:9
},{nombre:"Micaela",
apellido:"Chandía",
puntos:6
},{nombre:"Franco",
apellido:"Ferrero",
puntos:3
},{nombre:"Bruno",
apellido:"Gallo",
puntos:5
},{nombre:"Thomas",
apellido:"Mendez",
puntos:4
}
    ],
    aprobados:lista=>{
        let alumnosAprobados= [];
        for(let i = 0; i < lista.length; i++){
            if(lista[i].puntos >= 6){
                alumnosAprobados.push(lista[i])
            }
        }
        return alumnosAprobados;
    }
}
module.exports = alumnos;