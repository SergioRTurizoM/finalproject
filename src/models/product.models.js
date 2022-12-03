const db = require('../utils/database');
const {DataTypes} = require('sequelize');


const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    availableQty: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },/* 
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    } */
})

module.exports = Product