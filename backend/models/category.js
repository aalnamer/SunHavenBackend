const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Category {
  static async getCategory(category) {
    const productRes = await db.query(
      `SELECT id,
          title,
          description,
          img_url AS "imgUrl",
          color,
          size,
          price,
          category
    FROM products
    WHERE category ILIKE $1`,
      [category]
    );
    console.log(productRes.rows);
    const product = productRes.rows;

    if (!product) throw new NotFoundError(`No product: ${id}`);

    return product;
  }
  static async getAll() {
    const productRes = await db.query(
      `SELECT *
    FROM products
    `
    );
    const product = productRes.rows;

    if (!product) throw new NotFoundError(`No products`);

    return product;
  }
}

module.exports = Category;
