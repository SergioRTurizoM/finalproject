const {Product} = require('../models')

class ProductService {
    static async create(product){
        try {
            const result = await Product.create(product);
            return result
        } catch (error) {
            throw error
        }
    }

    static async getAllProducts(){
        try {
            const result = await Product.findAll();
            return result
        } catch (error) {
            throw error
        }
    }

}



module.exports = ProductService;