"use strict";

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const { NotFoundError } = require("./expressError");

const { authenticateJWT } = require("./middleware/auth");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const wishlistRoutes = require("./routes/wishlist");
const categoryRoutes = require("./routes/category");
const paymentRoutes = require("./routes/payment");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(authenticateJWT);

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/users", usersRoutes);
app.use("/cart", cartRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/category", categoryRoutes);
app.use("/payment", paymentRoutes);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
