"use strict";

const jsonschema = require("jsonschema");
const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Payment = require("../models/payment");
const { createToken } = require("../helpers/tokens");

const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_API_KEY);

router.post(
  "/:username",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      // Extract necessary data from the request body
      const { username } = req.params;
      const items = req.body;

      // Iterate over the items and add them to the cart

      const successUrl = "https://sun-haven.web.app/success";
      const cancelUrl = "https://sun-haven.web.app/cart";
      const lineItems = items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            unit_amount: Math.round(item.price * 100), // Convert to integer and round
            product_data: {
              name: item.title,
              description: item.color,
              images: [item.img_url],
            },
          },
          quantity: item.quantity,
        };
      });
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: successUrl,
        cancel_url: cancelUrl,
        line_items: lineItems,
      });

      res.json({ url: session.url });
    } catch (err) {
      return next(err);
    }
  }
);

router.post("/order/:username", async (req, res, next) => {
  const { products } = req.body;

  const { username } = req.params;
  try {
    for (const item of products) {
      const { product_id, quantity, size, color } = item;

      await Payment.addToOrders(username, product_id, quantity, size, color);
    }

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/cart/:username",
  ensureCorrectUserOrAdmin,
  async (req, res, next) => {
    try {
      const { username } = req.params;

      await Payment.clearCart(username);

      res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
