const {userSingUp, getAllUsers, deleteUser} = require('./users.controller');
const {getAllProducts, createProduct} = require('./products.controllers');
const {userLogin} = require('./auth.controllers');

module.exports = {
    userSingUp,
    getAllUsers,
    deleteUser,
    getAllProducts,
    createProduct,
    userLogin
}