"use strict";

const jsonschema = require("jsonschema");

const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Product = require("../models/product");
const { createToken } = require("../helpers/tokens");
const Wishlist = require("../models/wishlist");

const router = express.Router();

// get wishlist

router.get(
  "/:username",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const wishlistItems = await Wishlist.getAllItems(req.params.username);
      return res.json({ wishlistItems });
    } catch (err) {
      return next(err);
    }
  }
);

router.post(
  "/:username",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const { itemId } = req.body;

      const user = req.params.username;
      await Wishlist.addItem(user, itemId);
      return res
        .status(201)
        .json({ message: `Item with ID: ${itemId}added to wishlist` });
    } catch (err) {
      return next(err);
    }
  }
);

router.delete(
  "/:username",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const { wishlistId } = req.body;

      const username = req.params.username;
      await Wishlist.removeItem(username, wishlistId);
      return res
        .status(201)
        .json({ message: `Item ${wishlistId} Removed From wishlist` });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
