const { userSingUp, getAllUsers, deleteUser } = require("./users.controller");
const {
  getAllProducts,
  createProduct,
  deleteProduct,
} = require("./products.controllers");
const { userLogin } = require("./auth.controllers");
const { createCart, getAllCarts, deleteCart } = require("./cart.controllers");

module.exports = {
  userSingUp,
  userLogin,
  getAllUsers,
  deleteUser,
  getAllProducts,
  createProduct,
  deleteProduct,
  createCart,
  getAllCarts,
  deleteCart,
};
