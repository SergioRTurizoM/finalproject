const db = require("../utils/database");
const { User, Cart, Product, Order, ProductInCart, ProductInOrder } = require("../models/index");
const initModel = require("../models/initModels.models");

initModel();

const users = [
  {
    username: "SergioT",
    email: "tsergior@gmail.com",
    password: "abc123",
  },
  {
    username: "MarlonT",
    email: "marlont@gmail.com",
    password: "abc456",
  },
  {
    username: "VictorT",
    email: "victort@gmail.com",
    password: "abc789",
  },
];

const products = [
  {
    name: "Creatina",
    price: 100000,
    availableQty: 2000,
    status: false,
  },
  {
    name: "Proteina",
    price: 140000,
    availableQty: 2000,
    status: false,
  },
  {
    name: "Aminoacido",
    price: 150000,
    availableQty: 2000,
    status: false,
  },
];

const cart = [
  {
    user_id: 1,
    totalPrice: 300000,
  },
];

const productincart = [
  {
    cart_id: 1,
    product_id: 1,
    quantity: 3,
    price: 3000,
    status: true,
  },
];

const order = [
  {
    totalPrice: 300000,
    status: true,
    user_id: 1,
  },
];

const productinorder = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 3,
    price: 300000,
    status: true,
  },
];

db.sync({ force: true }).then(() => {
  console.log("Sincronizando el seeder");
  users.forEach(async (user) => await User.create(user));

    setTimeout(()=>{
        products.forEach(async(product)=> await Product.create(product))
    }, 100);

    setTimeout(()=>{
        cart.forEach(async(cart)=> await Cart.create(cart))
    }, 200);
     
    setTimeout(()=>{
        productincart.forEach(async(product)=> await ProductInCart.create(product))
    }, 300);

    setTimeout(()=>{
        order.forEach(async(order)=> await Order.create(order))
    }, 400);

    setTimeout(()=>{
        productinorder.forEach(async(product)=> await ProductInOrder.create(product))
    }, 500);

});
