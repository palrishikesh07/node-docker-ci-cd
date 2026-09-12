const express = require("express");
const controller  = require("./../controllers/product.controller");
const validateProduct = require("../validators/product.validator");

const router = express.Router();

router.post("/", validateProduct , controller.create);

router.get("/",controller.getAll);

router.get("/:id",controller.getById);

router.put("/:id",controller.update);

router.delete("/:id",controller.remove);

module.exports = router;
