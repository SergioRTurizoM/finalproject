const { User } = require("../models");

class UserService {
  static async create(user) {
    try {
      const result = await User.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    try {
      const result = await User.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id){
    try {
        const result = await User.destroy({
            where: { id}
        })
        return result
    } catch (error) {
        throw error
    }
  }
}

module.exports = UserService;
