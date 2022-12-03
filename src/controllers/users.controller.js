const { UserService } = require("../services");

const userSingUp = async (req, res, next) => {
  try {
    const dataUser = req.body;
    const result = await UserService.create(dataUser);
    res.status(201).json(result);
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
