const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const ProductInCart = db.define('productincart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cartId"
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "productId"
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    freezeTableName: true
})

module.exports = ProductInCart