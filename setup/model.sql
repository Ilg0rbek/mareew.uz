-- Initialization (just copy and paste)

-- connect to another database 
\c postgres;

-- drop database if exists 
drop database if exists saadia;

-- create database 
create database saadia;

-- connect to databse look
\c saadia;

-------------------------------------------------------------------------------------------
-- E-commerce app model

-- users table 
drop table if exists users cascade;
create table users(
	id int generated always as identity primary key,
	telegram_id varchar(50),
	first_name varchar(50) not null,
	last_name varchar(50),
	phone varchar(50) not null,
    password character varying(255) not null,
	role varchar(50) default 'user' 'admin' 'superadmin' 'dispatcher' 'curier',
);


-- categories table for products
drop table if exists categories cascade;
create table categories(
	id int generated always as identity primary key,
	name varchar(50) not null,
	discreption
	images varchar(50) not null,
	is_hide
);

-- colors table for products
drop table if exists colors cascade;
create table colors(
	id int generated always as identity primary key,
	name varchar(50) not null
);


-- brands table for products
drop table if exists brands cascade;
create table brands(
	id int generated always as identity primary key,
	name varchar(50) not null,
	description
	images json ['image'],
	is_hide
);

-- products table
drop table if exists products cascade;
create table products(
	id int generated always as identity primary key,
	name varchar(50) not null,
	category_id int references categories(id),
	brand_id int references brands(brand_id),
	price int not null,
	net_price int default 0,
	images json not null ['image']
	colors json, [ 'red', 'black' ]
	details json not null
	description text,
	stock int default 1,
	shipping_price int default 0,
	status_new boolean,
	status_sale boolean,
);

-- orders table
drop table if exists orders cascade;
create table orders(
	id int generated always as identity primary key,
	user_id int references users(id) not null,
	status varchar(50) default 'pending',
	method: 'card' | 'cash'
	address varchar(50) not null
	phone_number varchar(50) not null,
	created_at timestamp default current_timestamp,
	updated_at timestamp null,
	deleted_at timestamp null
	courier_id
);

order_item {
	product_id: 
	order_id
	quantity: 10
}

-- carts table
drop table if exists carts cascade;
create table carts(
	id int generated always as identity primary key,
	user_id int references users(id),
	product_id int references products(id),
	quantity int not null
);

-- comments table
drop table if exists comments cascade;
create table comments(
	id int generated always as identity primary key,
	user_id int references users(id),
	product_id int references products(id),
	status varchar(50) default 'pending',
	content varchar(255) not null,
	stars int default 5,
	created_at timestamp default current_timestamp
);


-- wishlists table
drop table if exists wishlists cascade;
create table wishlists(
	id int generated always as identity primary key,
	user_id int references users(id),
	product_id int references products(id),
);

