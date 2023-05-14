const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Payment {
  static async addToOrders(username, productId, quantity, size, color) {
    const preCheck = await db.query(
      `SELECT id
               FROM products
               WHERE id = $1`,
      [productId]
    );
    const product = preCheck.rows[0];

    if (!product) throw new NotFoundError(`No product: ${productId}`);

    const preCheck2 = await db.query(
      `SELECT id
               FROM users
               WHERE username = $1`,
      [username]
    );
    const user = preCheck2.rows[0];

    if (!user) throw new NotFoundError(`No username: ${username}`);
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new BadRequestError(
        "Invalid quantity. Quantity should be a positive integer."
      );
    }

    await db.query(
      `INSERT INTO orders (user_id, product_id, quantity, size, color)
         VALUES ($1, $2, $3, $4, $5)`,
      [user.id, productId, quantity, size, color]
    );
  }
  static async clearCart(username) {
    const preCheck = await db.query(
      `SELECT id
       FROM users
       WHERE username = $1`,
      [username]
    );
    const user = preCheck.rows[0];

    if (!user) throw new NotFoundError(`No username: ${username}`);

    await db.query(
      `DELETE FROM cart
       WHERE user_id = $1`,
      [user.id]
    );
  }
}

module.exports = Payment;
