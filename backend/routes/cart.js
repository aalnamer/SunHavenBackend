"use strict";

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Product = require("../models/product");
const { createToken } = require("../helpers/tokens");
const Cart = require("../models/cart");

const router = express.Router();

// getting cart

router.get(
  "/:username/:id",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      console.log(req.params.id);
      const products = await Cart.get(req.params.id);
      return res.json({ products });
    } catch (err) {
      return next(err);
    }
  }
);

// adding item to cart

router.post(
  "/:username/:id",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const quantity = req.body.quantity;
      const size = req.body.size;
      const color = req.body.color;
      const productId = +req.params.id;
      await Product.addToCart(
        req.params.username,
        productId,
        quantity,
        size,
        color
      );
      return res.json({ added: productId });
    } catch (err) {
      return next(err);
    }
  }
);

// updating quantity,color or size in cart

router.patch(
  "/:username/:id",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const cartId = req.params.id;
      const updates = req.body;
      await Cart.updateCartItem(cartId, updates);
      return res.json({ message: "Item updated in cart" });
    } catch (err) {
      return next(err);
    }
  }
);

// deleting an item from the cart

router.delete(
  "/:username/:id",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const cartId = req.params.id;
      await Cart.removeFromCart(cartId);
      return res.json({ message: "Item removed from cart" });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
