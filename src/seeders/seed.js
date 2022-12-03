const db = require('../utils/database');
const { User, Cart, Product, Order } = require("../models/index");
const initModel = require('../models/initModels.models');

initModel();

const users = [
    {
        username: 'SergioT',
        email: 'tsergior@gmail.com',
        password: 'abc123'
    },
    {
        username: 'MarlonT',
        email: 'marlont@gmail.com',
        password: 'abc456'
    },
    {
        username: 'VictorT',
        email: 'victort@gmail.com',
        password: 'abc789'
    },

]


db.sync({force:true}).then(()=>{
    console.log("Sincronizando el seeder");
    users.forEach(async (user)=> await User.create(user));
})