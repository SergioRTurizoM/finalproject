const User = require('./user.models');
const Order = require('./order.models')
const Product = require('./product.models');
const ProductInCart = require('./productInCart.models');
const ProductInOrder = require('./productInOrder.models')
const Cart = require('./cart.models')


module.exports = {
    Cart,
    Order,
    Product,
    ProductInCart,
    ProductInOrder,
    User,
}