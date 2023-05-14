"use strict";

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Product = require("../models/product");
const { createToken } = require("../helpers/tokens");

const router = express.Router();

router.get("/:id", async function (req, res, next) {
  try {
    const products = await Product.get(req.params.id);
    return res.json({ products });
  } catch (err) {
    return next(err);
  }
});
router.get("/", async function (req, res, next) {
  try {
    const products = await Product.getAll();
    return res.json({ products });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
