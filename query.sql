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