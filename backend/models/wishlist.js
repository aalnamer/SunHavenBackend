const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Wishlist {
  static async getAllItems(username) {
    const wishlistRes = await db.query(
      `SELECT w.id AS wishlist_id, w.user_id, w.product_id,
                p.title, p.description, p.price, p.img_url,
                p.color, p.size, p.category
         FROM wishlist AS w
         JOIN products AS p ON w.product_id = p.id
         JOIN users AS u ON w.user_id = u.id
         WHERE u.username = $1`,
      [username]
    );
    const wishlistItems = wishlistRes.rows;

    return wishlistItems;
  }

  static async addItem(username, itemId) {
    const preCheck = await db.query(
      `SELECT id
         FROM products
         WHERE id = $1`,
      [itemId]
    );
    const product = preCheck.rows[0];

    if (!product) {
      throw new NotFoundError(`No product: ${itemId}`);
    }

    const userRes = await db.query(
      `SELECT id
         FROM users
         WHERE username = $1`,
      [username]
    );
    const user = userRes.rows[0];

    if (!user) {
      throw new NotFoundError(`No username: ${username}`);
    }

    await db.query(
      `INSERT INTO wishlist (user_id, product_id)
         VALUES ($1, $2)`,
      [user.id, itemId]
    );
  }

  static async removeItem(username, wishlistId) {
    const user = await db.query(`SELECT id FROM users WHERE username = $1`, [
      username,
    ]);

    if (user.rows.length === 0) {
      throw new NotFoundError(`No user found with username: ${username}`);
    }

    const userId = user.rows[0].id;

    await db.query(
      `DELETE FROM wishlist
       WHERE id = $1 AND user_id = $2`,
      [wishlistId, userId]
    );
  }
}

module.exports = Wishlist;
