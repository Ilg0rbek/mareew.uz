-- insert to users
insert into users(user_telegram_id, user_first_name, user_last_name, user_password, user_role, user_phone) values 
('705804907', 'Shohruh', 'Mannonov', '2ee014f27c2ca33da498a63aa42ea8d1', 'admin', '998333365777');

-- insert to categories
insert into categories(category_name) values
('Phones'),
('Notebooks');

-- insert to brands
insert into brands(brand_name) values 
('Apple'),
('Samsung'),
('HyperPC'),
('Ryzer');

-- insert to colors
insert into colors(color_name) values
('White'),
('Black'),
('Red'),
('Silver'),
('Green');

-- insert to products
insert into products(product_name, product_category_id, product_brand_id, product_price, product_images, product_colors, product_details, product_description, product_stock, product_status_new, product_status_sale, product_safe_price,product_shipping_price) values 
('Macbook Pro 13 M1', 2, 1, 14000000, '["macbook-pro-m1-13-1.jpeg", "macbook-pro-m1-13-2.jpeg", "macbook-pro-m1-13-3.jpeg"]', '["black", "white", "silver"]', '{"RAM": "8", "Storage":"256GB", "CPU": "M1"}', 'This is best Noutbook in the year', 5, 1, 0, 13000000, 50000);

-- insert to orders
insert into orders(order_user_id, order_content, order_status, order_address, order_phone_number) values 
(1, '[{"order_product_id":1,"order_product_quantity":1}]', 'pending', 'Chilonzor 9 kvartal', '998992312433');

-- insert to comments
insert into comments(comment_user_id, comment_product_id, comment_content) values 
(1, 1, 'Yaxshi mahsulot ekan!');

-- insert to carts
insert into carts(cart_user_id, cart_product_id, cart_quantity) values 
(1, 1, 1);

-- insert to wishlist
insert into wishlists(wishlist_user_id, wishlist_product_id) values
(1, 1);
