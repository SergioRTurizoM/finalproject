const {userSingUp, getAllUsers, deleteUser} = require('./users.controller');
const {getAllProducts, createProduct, deleteProduct} = require('./products.controllers');
const {userLogin} = require('./auth.controllers');

module.exports = {
    userSingUp,
    userLogin,
    getAllUsers,
    deleteUser,
    getAllProducts,
    createProduct,
    deleteProduct,
}