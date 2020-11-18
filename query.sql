-- show databases 
show databases 
-- create database

create database tuong_test

-- use database 
use tuong_test;

show tables 

create tables

create table users (
    id int primary key auto_increment not null,
    username varchar(100) not null,
    email varchar(100) not null,
    password varchar(200) not null,
    avatar varchar(200)
);

create table products (
    id int primary key auto_increment not null,
    name varchar(100) not null,
    slug varchar(100) not null,
    price int not null,
    category_id int not null,
    description text,
    image varchar(200),
    status int default(1)
);

alter table products add column list_price int after price;

create table categories (
    id int primary key auto_increment not null,
    name varchar(100) not null,
    slug varchar(100) not null,
    parent_id int not null,
    description text,
    image varchar(200),
    status int default(1)
);

insert into users (username, email, password) values ('letoan', 'letoan@gmail.com', '123456');

-- select data from tables 
select * from users;
select username, email, password from users;

create table suppliers (
    id int primary key auto_increment not null,
    name varchar(100) not null,
    country_id int not null,
    description text,
    image varchar(200),
    status int default(1)
);

create table countries (
    id int primary key auto_increment not null,
    name varchar(100) not null,
    description text,
    image varchar(200),
    status int default(1)
);

INSERT INTO products (name, slug, price, list_price, category_id) VALUES ('Iphone 6s', 'iphone-6s', 1600, 1800, 1);
INSERT INTO products (name, slug, price, list_price, category_id) VALUES ('Iphone 8s', 'iphone-8s', 1800, 2000, 1);
INSERT INTO products (name, slug, price, list_price, supplier_id, category_id) VALUES ('Iphone 8', 'iphone-8', 1600, 2800, 1, 1);
INSERT INTO products (name, slug, price, list_price, supplier_id, category_id) VALUES ('Sasung galaxy', 'ss-galaxy', 1600, 2800, 2, 1);
INSERT INTO products (name, slug, price, list_price, supplier_id, category_id) VALUES ('Opplo s3', 'Opple-s3', 600, 800, 3, 1);
INSERT INTO products (name, slug, price, list_price, supplier_id, category_id) VALUES ('Macbook Pro', 'mackbook-pro', 2600, 2900, 1, 2);


--  name varchar(100) not null,
--     slug varchar(100) not null,
--     price int not null,
--     category_id int not null,
--     description text,
--     image varchar(200),

INSERT INTO categories (name, slug, parent_id) VALUES ('Mobile', 'mobile', 0);
INSERT INTO categories (name, slug, parent_id) VALUES ('Laptop', 'laptop', 0);
INSERT INTO categories (name, slug, parent_id) VALUES ('Personal Computer', 'personal-computer', 0);

alter table products add column supplier_id int after category_id;

-- update always with WHERE
UPDATE products SET supplier_id = 1 WHERE id = 1;
INSERT INTO suppliers (name, country_id) VALUES ('Apple', 1);
INSERT INTO suppliers (name, country_id) VALUES ('Samsung', 2);
INSERT INTO suppliers (name, country_id) VALUES ('Opple', 3);
INSERT INTO countries (name, description) VALUES ('USA', 'United state of American');
INSERT INTO countries (name, description) VALUES ('KOREA', 'South Korea');
INSERT INTO countries (name, description) VALUES ('China', 'Public of People');

 select * from products where supplier_id = 1 or supplier_id = 2;
  select * from products where supplier_id in (1, 2);
--   alias for field
select min(price) as 'Min Price' from products;
select min(price) as min_price from products;   

-- nested seletct 
select * from products where id = (
    select id from products where price = (
        select min(price) from products
    )
);

-- min, max, distinct, round, seil, flow,...
select * from products where name like '%n%';
select * from products order by id desc; -- asc by default
select * from products order by price limit 1;
select * from products order by price limit 1 offset 2

select * from products group by supplier_id having status = 1; -- group by go with having, not where

alter table products add column stock int;
select *, price*stock as 'In Stock' from products;

select *, if(stock > 0, 'Con Hang', 'Het Hang') as 'Stock Status' from products;
 
--  join table 
select categories.*, products.name as product_name from categories left join products on categories.id = products.category_id where categories.id = 1;
select categories.id as cate_id, categories.name as cate_name, products.id as product_id, products.name as product_name from categories left join products on categories.id = products.category_id where categories.id = 1;
select c.id as cate_id, c.name as cate_name, p.id as product_id, p.name as product_name from categories as c left join products as p on c.id = p.category_id where c.id = 1;

select c.id as cate_id, c.name as cate_name, p.id as product_id, p.name as product_name from products as p left join categories as c on c.id = p.category_id;

select products.*, countries.*, suppliers.* from countries
    left join suppliers on suppliers.country_id = countries.id 
    left join products on suppliers.id = products.supplier_id
 where countries.id = 1;

 select p.id as product_id, p.name as product_name, c.id as country_id, c.name as country_name, s.id as supplier_id, s.name as supplier_name from countries as c
    left join suppliers as s on s.country_id = c.id 
    left join products as p on s.id = p.supplier_id
 where c.id = 1;

 self join, 

 users , 
 roles--> userid=1,3, 6, giam doc
 useiid, 9.10.80,23-->ke toan

 // 1 admin
 //2 giam doc
 3. acount
 4. sales 

 select u1.id as admin_id, u1.username as admin_name, u2.username as manager_name, u3.username as accountant_name, u4.username as sale_name 
 from users as u1
 left join users as u2 on u2.id = 2
 left join users as u3 on u3.id = 3
 left join users as u4 on u4.id = 4 where u1.id=1;

--  vertical scale, /// cac database mongodb
-- horizotal scale  mo rong cac bang trong database