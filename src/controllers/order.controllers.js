const { OrderService } = require("../services");

const createOrder = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await OrderService.create(body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error creando este Order, verifique",
    });
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const result = await OrderService.getAllOrders();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error obteniendo lista de Orders",
    });
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const deleting = await OrderService.deleteOrder(id)
        res.json(`El Order con id ${id} ha sido eliminado exitosamente`)

} catch (error) {
    next({
        status: 400,
        errorContent: error,
        message: "Hubo un error eliminando Order",
      });
}
};

module.exports = {
  createOrder,
  deleteOrder,
  getAllOrders,
};
