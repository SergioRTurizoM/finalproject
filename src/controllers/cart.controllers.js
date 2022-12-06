const { CartService } = require("../services");

const createCart = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await CartService.create(body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error creando este cart, verifique",
    });
  }
};

const getAllCarts = async (req, res, next) => {
  try {
    const result = await CartService.getAllCarts();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error obteniendo lista de carts",
    });
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const deleting = await CartService.deleteCart(id)
        res.json(`El cart con id ${id} ha sido eliminado exitosamente`)

} catch (error) {
    next({
        status: 400,
        errorContent: error,
        message: "Hubo un error eliminando cart",
      });
}
};

module.exports = {
  createCart,
  deleteCart,
  getAllCarts,
};
