const db = require("../database/models");
const user = db.User;

/* Requerir mi modulo instalado */
const bcrypt = require('bcryptjs');

const userController = {
    login : (req, res) => {
        return res.render("login")
    },
    procesarLogin : (req, res) => {
        let info = req.body;
        let filtro = {where : [ { email : info.email}]};
        let errors = {};

        if (info.email == "") {
            errors.message = "El email esta vacio";
            res.locals.errors = errors;
            return res.render('login');
            
        }else if(info.password == ""){
            errors.message = "El password esta vacio";
            res.locals.errors = errors;
            return res.render('login'); 
        } else {
             /* debe ir en el else */
        user.findOne(filtro)
        .then((result) => {
            
            if (result != null) {

                let passEncriptada = bcrypt.compareSync(info.password , result.password)
                if (passEncriptada) {

                    /* Poniendo en session al usuario */
                    req.session.user = result.dataValues;

                    if (req.body.remember != undefined) {
                        res.cookie('userId', result.dataValues.id, {maxAge : 1000 * 60 *10 } )
                    }

                    return res.redirect("/movies/all")
                } else {
                    errors.message = "El mail existe pero la password es incorrecta";
                    res.locals.errors = errors;
                    return res.render('login');
                }
               
            } else {
                errors.message = "El mail no existe";
                res.locals.errors = errors;
                return res.render('login');
            }




        }).catch((err) => {
            
        });
        }



       




    },
    register : (req, res) => {
        return res.render("registerUser")
    },
    procesarRegister : (req, res) => {
        let info = req.body;
        let imgPerfil = req.file.filename;
        /* Crear un obj literal vacio */
        let errors = {};

        if (info.name == "") {
            errors.message = "El nombre esta vacio";
            res.locals.errors = errors;
            return res.render('registerUser')
        }else if(info.email == ""){
            errors.message = "El email esta vacio";
            res.locals.errors = errors;
            return res.render('registerUser')
        } else {
             /* Todo este codigo deberia ir en el else */
            let usuario = {
                name : info.name,
                email : info.email,
                password : bcrypt.hashSync(info.password, 10),
                remember_token : "false",
                created_at : new Date(),
                updated_at :  new Date(),
                img : imgPerfil
            }
    
            user.create(usuario)
            .then((result) => {
                return res.redirect("/users/login")
            }).catch((err) => {
                
            });
        }

    },
    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        return res.render("login")
    },

}

module.exports = userController;