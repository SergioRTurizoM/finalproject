const { Cart } = require("../models");

class CartService {
  static async create(cart) {
    try {
      const result = await Cart.create(cart);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllCarts() {
    try {
      const result = await Cart.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCart(id){
    try {
        const result = await Cart.destroy({
            where: { id}
        })
        return result
    } catch (error) {
        throw error
    }
  }
}

module.exports = CartService;
