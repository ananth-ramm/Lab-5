const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/add", controller.addNumbers);
router.get("/subtract", controller.subtractNumbers);
router.get("/multiply", controller.multiplyNumbers);
router.get("/divide", controller.divideNumbers);

router.get("/products", controller.fetchProducts);

module.exports = router;
