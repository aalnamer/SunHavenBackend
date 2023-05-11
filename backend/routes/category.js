"use strict";

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const { createToken } = require("../helpers/tokens");
const Category = require("../models/category");

const router = express.Router();

router.get("/:category", async function (req, res, next) {
  try {
    const products = await Category.getCategory(req.params.category);
    return res.json({ products });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
