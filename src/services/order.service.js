const { Order } = require("../models");

class OrderService {
  static async create(order) {
    try {
      const result = await Order.create(order);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllOrders() {
    try {
      const result = await Order.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOrder(id){
    try {
        const result = await Order.destroy({
            where: { id}
        })
        return result
    } catch (error) {
        throw error
    }
  }
}

module.exports = OrderService;
