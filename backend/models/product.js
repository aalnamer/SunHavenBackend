const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Product {
  static async get(id) {
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
WHERE id = $1`,
      [id]
    );
    const product = productRes.rows[0];

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

module.exports = Product;
