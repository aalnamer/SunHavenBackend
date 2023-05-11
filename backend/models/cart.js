const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Cart {
  static async get(username) {
    const cartRes = await db.query(
      `SELECT c.id AS cart_id, c.quantity, c.size, c.color,
              p.id AS product_id, p.title, p.img_url, p.description, p.color AS product_color, p.size AS product_size, p.price,
              u.id AS user_id, u.username, u.first_name, u.last_name, u.email, u.is_admin
       FROM cart AS c
       JOIN products AS p ON c.product_id = p.id
       JOIN users AS u ON c.user_id = u.id
       WHERE u.username = $1`,
      [username]
    );
    const cart = cartRes.rows;

    if (!cart) throw new NotFoundError(`No Cart`);

    return cart;
  }
  static async addToCart(username, productId, quantity, size, color) {
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
      `INSERT INTO cart (user_id, product_id, quantity, size, color)
     VALUES ($1, $2, $3, $4, $5)`,
      [user.id, productId, quantity, size, color]
    );
  }
  static async removeFromCart({ cartId }) {
    await db.query(
      `DELETE FROM cart
      WHERE id = $1`,
      [cartId]
    );
  }
  static async updateCartItem(cartId, updates) {
    const { quantity, size, color } = updates;
    let updateQuery = `UPDATE cart SET`;

    const updateParams = [];
    const updateFields = [];

    if (quantity) {
      updateFields.push("quantity");
      updateParams.push(quantity);
    }
    if (size) {
      updateFields.push("size");
      updateParams.push(size);
    }
    if (color) {
      updateFields.push("color");
      updateParams.push(color);
    }

    updateQuery += updateFields
      .map((field, index) => `${field} = $${index + 1}`)
      .join(", ");
    updateQuery += ` WHERE id = $${updateParams.length + 1}`;

    updateParams.push(cartId);

    await db.query(updateQuery, updateParams);
  }
}

module.exports = Cart;
