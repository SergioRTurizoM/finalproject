const { UserService } = require("../services");
const welcomeTemplate = require('../templates/welcome')
const transporter = require('../utils/mailer');

const userSingUp = async (req, res, next) => {
  try {
    const dataUser = req.body;
    const result = await UserService.create(dataUser);
    res.status(201).json(result);

    transporter.sendMail({
      from: "<tsergior@gmail.com.com>",
      to: result.email,
      subject: "Bienvenido a tu E-commerce favorito (TESTING)",
      text: `Bienvenido a la mejor aplicación E-commerce de Colombia`,
      html: welcomeTemplate(),
    });

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos para registrarse",
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error obteniendo lista de usuarios",
    });
  }
};

const deleteUser = async (req, res, next) =>{
    try {
        const id = req.params.id;
        console.log(id);
        const deleting = await UserService.deleteUser(id)
            res.json(`El usuario con id ${id} ha sido eliminado exitosamente`)

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Hubo un error eliminando usuarios",
          });
    }
}



module.exports = {
  userSingUp,
  getAllUsers,
  deleteUser
};
