const UserService = require('./users.service');
const ProductService = require('./products.service');
const AuthServices = require('./auth.service');
const CartService = require('./cart.service');
const OrderService = require('./order.service')

module.exports = {
    AuthServices,
    CartService,
    UserService,
    OrderService,
    ProductService,

}