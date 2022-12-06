const { ProductService } = require("../services");

const createProduct = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await ProductService.create(body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error creando este producto, verifique",
    });
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const result = await ProductService.getAllProducts();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Hubo un error obteniendo lista de productos",
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const deleting = await ProductService.deleteProduct(id)
        res.json(`El producto con id ${id} ha sido eliminado exitosamente`)

} catch (error) {
    next({
        status: 400,
        errorContent: error,
        message: "Hubo un error eliminando producto",
      });
}
};

module.exports = {
  createProduct,
  deleteProduct,
  getAllProducts,
};
