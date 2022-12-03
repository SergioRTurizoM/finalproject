const {getAllProducts, createProduct} = require('../controllers')
const {Router} = require('express');

const router = Router();

router.get('/products', getAllProducts);
router.post('/products', createProduct);

module.exports = router