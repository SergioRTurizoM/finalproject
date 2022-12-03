const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const ProductInOrder = db.define('productinorder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'orderId'
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'productId'
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
}
)

module.exports = ProductInOrder