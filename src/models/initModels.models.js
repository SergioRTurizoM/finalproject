const { User, Cart, Product, Order } = require("./index");

const initModel = () => {


  Order.belongsTo(User, { as: "user", foreignKey: "user_id" });

/*   User.hasMany(Product, { foreignKey: "user_id" }); */

  Cart.belongsTo(User, { foreignKey: "user_id" });

  Product.belongsToMany(Cart, { through: "productincart" });

  Product.belongsToMany(Order, { through: "productinorder" });

};

module.exports = initModel;
