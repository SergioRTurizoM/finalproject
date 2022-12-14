const {
    getAllCarts,
    createCart,
    deleteCart,
  } = require("../controllers");
  const { Router } = require("express");
  
  const router = Router();
  
  router.get("/carts", getAllCarts);
  router.post("/carts", createCart);
  router.delete("/carts/:id", deleteCart);
  
  module.exports = router;
  