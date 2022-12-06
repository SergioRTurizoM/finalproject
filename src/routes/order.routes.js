const {createOrder, getAllOrders, deleteOrder} = require('../controllers')
const {Router} =require('express');

const router = Router()

router.get('/orders', getAllOrders);
router.post('/orders', createOrder);
router.delete('/orders/:id', deleteOrder)


module.exports = router