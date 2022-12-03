const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
  static async authenticate(credentials) {
    try {
      const { email, password } = credentials;
      const result = await User.findOne({
        where: { email },
      });

      console.log(
        "Este es el result en el authservice en metodo Autheticate",
        result
      );

      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? { isValid, result } : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  static genToken(data) {
    console.log("Esta es la data en gentoken", data);
    try {
      const token = jwt.sign(data, process.env.SECRET, {
        expiresIn: "10m",
        algorithm: "HS512",
      });

      console.log("Este es el token", token);
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
