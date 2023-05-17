INSERT INTO users (id, username, password, first_name, last_name, email, is_admin)
VALUES 
  (1, 'testuser', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'Test', 'User', 'joel@joelburton.com', FALSE),
  (2, 'testadmin', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'Test', 'Admin!', 'joel@joelburton.com', TRUE);

INSERT INTO products (title, img_url, description, color, size, price, category)
VALUES
  ('Aviator Sunglasses', 'https://i.imgur.com/qBbyCNU.png', '
Introducing our iconic Aviator Sunglasses, the epitome of timeless style and unparalleled sophistication. Inspired by the classic aviator design that originated in the 1930s, these sunglasses have since become an enduring fashion statement.', 'white', '', 129.99, 'Accessories'),
  ('Retro Shades', 'https://i.imgur.com/fHdbYyj.png', 'With their bold and oversized frames, our Retro Shades make a bold statement wherever you go. The chunky acetate frames not only exude retro vibes but also provide durability and a comfortable fit for all-day wear.', 'white', '', 99.99, 'Accessories'),
  ('Heart Necklace', 'https://i.imgur.com/BlgKILG.png', 'At the center of our Heart Necklace rests a beautiful heart-shaped pendant, exquisitely crafted to perfection. It represents love in its purest form, making it a cherished gift for a special someone or a meaningful self-purchase.', 'white', '', 89.99, 'Accessories'),
  ('Urban Blues', 'https://i.imgur.com/x0kkIMm.png', 'Our jeans are made from high-quality denim fabric, carefully selected for its softness, stretch, and durability. The fabric provides a comfortable fit that hugs your curves while allowing freedom of movement, ensuring that you feel confident and at ease throughout the day.', 'blue', '', 59.99, 'Men'),
  ('Noir Jeans', 'https://i.imgur.com/eA9gFkQ.png', 'Introducing our exceptional Noir Jeans collection, where style meets comfort and versatility intertwines with durability. Crafted with precision and attention to detail, our black jeans are designed to be your go-to choice for both casual and fashionable occasions.', 'black', '', 69.99, 'Men'),
  ('Pullover Hoodie', 'https://i.imgur.com/PY7Ncwb.png', 'Introducing our exclusive line of hoodies, where fashion meets unparalleled comfort and versatility. Each hoodie in our collection is meticulously crafted with meticulous attention to detail, ensuring a product that exceeds your expectations in terms of quality, style, and functionality.', 'gray', '', 79.99, 'Men'),
  ('Round Aviator', 'https://i.imgur.com/iv7GgVt.png', 'Introducing our Round Aviator Sunglasses, the perfect fusion of timeless elegance and modern style. These sunglasses effortlessly combine the iconic aviator design with a classic round shape, creating a captivating look that complements any outfit', 'gold', '', 129.99, 'Accessories'),
  ('T-Shirt', 'https://i.imgur.com/yiRySbk.png', 'Our T-shirts are made from the finest, high-quality fabrics, carefully selected for their softness, breathability, and longevity. We believe that comfort is paramount, so we have sourced materials that provide a luxurious feel against your skin, allowing you to stay comfortable all day long.', 'white', '', 39.99, 'Men'),
  ('Crew Neck Shirt', 'https://i.imgur.com/OCleraW.png', 'A crew neck shirt is a versatile and essential addition to any wardrobe. It features a round neckline that provides a clean and classic look. This style is perfect for casual occasions and can be easily paired with various outfits.', 'black', '', 39.99, 'Men'),






  ('Button Down Shirt', 'https://i.imgur.com/1HgF0tF.png', 'The button-down design adds a touch of refinement and classic appeal to these shirts. With a collared neckline and a row of buttons down the front, they exude a polished and put-together look. You can choose from a variety of styles, including different sleeve lengths, patterns, and colors, allowing you to express your personal taste and style effortlessly.', 'Black', '', 49.99, 'Women'),


  ('Urban Women Jeans', 'https://i.imgur.com/1wQxQts.png', 'Crafted from high-quality denim material, our Urban Woman Jeans offer durability and flexibility without compromising on comfort. The fabric has been carefully selected for its softness and stretch, ensuring a comfortable and unrestricted movement throughout the day.', 'Blue', '', 59.99, 'Women'),






('Joggers', 'https://i.imgur.com/gULxs9N.png', 'With their relaxed yet tapered leg design, our Women Joggers effortlessly combine modern aesthetics with a comfortable fit. The elastic waistband and adjustable drawstring allow for a personalized and secure fit that stays in place during your active lifestyle. Whether you are hitting the gym, running errands, or simply lounging around, these joggers are a versatile wardrobe essential.', 'Black', '', 39.99, 'Women'),

  ('Knit Shirt', 'https://i.imgur.com/Sr3Grjr.png', 'Crafted from high-quality fabrics, our Knit shirts provide a luxurious feel against your skin. We have carefully selected materials known for their softness, breathability, and durability, ensuring long-lasting comfort throughout the day', 'white', '', 39.99, 'Women'),

  ('Cargo Pants', 'https://i.imgur.com/LBddYvZ.png', 'Versatility is key with our Cargo Woman Pants. They can be effortlessly styled for a casual, everyday look by pairing them with a simple t-shirt and sneakers. Alternatively, dress them up with a blouse and heels for a more sophisticated and polished ensemble. The possibilities are endless, making these pants a versatile addition to your wardrobe.', 'white', '', 49.99, 'Women'),

  ('Sweater', 'https://i.imgur.com/iYWfZ0f.png', 'The Knit Sweater is crafted with utmost care and attention to detail, using premium materials that ensure both durability and softness against your skin. The intricate knit pattern adds a touch of texture and visual interest to the sweater, making it a fashionable choice for any occasion.', 'white', '', 49.99, 'Men'),

  ('Classic Steel Band', 'https://i.imgur.com/KjuZOt2.png', 'Crafted from high-quality stainless steel, our Classic Steel Band showcases a smooth and polished surface, radiating a sophisticated shine. The steel material not only ensures durability but also provides a sleek and modern aesthetic that stands the test of time.', 'black', '', 59.99, 'Accessories'),
   ('Bangle Bracelet', 'https://i.imgur.com/ZVPZZYh.png', 'Our bangle bracelets feature a solid circular design that effortlessly slides onto your wrist, showcasing a seamless and sleek silhouette. They are available in a variety of widths, allowing you to choose a delicate and dainty bangle or a bold and substantial piece, depending on your personal style and preference.', 'black', '', 49.99, 'Accessories');

INSERT INTO wishlist (id, user_id, product_id)
VALUES
  (1, 1, 1),
  (2, 1, 3),
  (3, 2, 2);

INSERT INTO cart (id, user_id, product_id, quantity, size, color)
VALUES
  (1, 1, 4, 2, 'M', 'blue'),
  (2, 2, 5, 1, 'L', 'black');
