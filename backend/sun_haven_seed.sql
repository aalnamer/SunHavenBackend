INSERT INTO users (id, username, password, first_name, last_name, email, is_admin)
VALUES 
  (1, 'testuser', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'Test', 'User', 'joel@joelburton.com', FALSE),
  (2, 'testadmin', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'Test', 'Admin!', 'joel@joelburton.com', TRUE);

INSERT INTO products (id, title, img_url, description, color, size, price, category)
VALUES
  (1, 'Aviator Sunglasses', 'https://i.imgur.com/BACvHw1.png', 'Discover fashion-forward pieces at affordable prices.', 'white', '', 129.99, 'Accessories'),
  (2, 'Retro Shades', 'https://i.imgur.com/nVOVUJw.png', 'Shop the latest trends in fashion', 'white', '', 99.99, 'Accessories'),
  (3, 'Seamless Design', 'https://i.imgur.com/UIc8K63.png', 'Make a bold statement', 'white', '', 89.99, 'Accessories'),
  (4, 'Pants Image 1', 'https://i.imgur.com/x0kkIMm.png', 'Fashionable pants for any occasion', 'blue', '', 59.99, 'Pants'),
  (5, 'Pants Image 2', 'https://i.imgur.com/eA9gFkQ.png', 'Stylish and comfortable pants', 'black', '', 69.99, 'Pants'),
  (6, 'Hoodie Image', 'https://i.imgur.com/PY7Ncwb.png', 'Stay warm with this trendy hoodie', 'gray', '', 79.99, 'Hoodies'),
  (7, 'Accessory Image', 'https://i.imgur.com/iv7GgVt.png', 'Complete your look with this accessory', 'gold', '', 19.99, 'Accessories'),
  (8, 'Shirt Image 1', 'https://i.imgur.com/yiRySbk.png', 'Classic shirt for any occasion', 'white', '', 39.99, 'Shirts'),
  (9, 'Shirt Image 2', 'https://i.imgur.com/OCleraW.png', 'Comfortable and stylish shirt', 'black', '', 49.99, 'Shirts');

INSERT INTO wishlist (id, user_id, product_id)
VALUES
  (1, 1, 1),
  (2, 1, 3),
  (3, 2, 2);

INSERT INTO cart (id, user_id, product_id, quantity, size, color)
VALUES
  (1, 1, 4, 2, 'M', 'blue'),
  (2, 2, 5, 1, 'L', 'black');
