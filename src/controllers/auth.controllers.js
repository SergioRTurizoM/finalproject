const {AuthServices} = require('../services');

const userLogin = async( req, res, next)=> {
    try {
        const credentials = req.body;
        console.log("Estas son las credenciales recibidas en userlogin en Controlador",credentials);
        const result = await AuthServices.authenticate(credentials);
        console.log("Este es el result en userlogin en Controlador",result);
        if (result) {
            const {username, email, password} = result.result;
            const user = {username, email, password};
            console.log( user);
            const token = AuthServices.genToken(user);
            user.token = token;
            res.json({...user})
        } else {
            res.status(400).json({
                message: 'Verifique, información errada'
            })
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Verifique los datos ingresados, usuario o contraseña errada"
        })
    }
}

module.exports = {
    userLogin
}