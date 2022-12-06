const {
  getAllProducts,
  createProduct,
  deleteProduct,
} = require("../controllers");
const { Router } = require("express");

const router = Router();

router.get("/products", getAllProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
