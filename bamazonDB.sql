DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mario Bros Hat', 'Apparel', '8.99', '5');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('', '', '.99', '5');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Duck Hunt Zapper', 'Accessories', '10.99', '1');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Link Sword', 'Accessories', '19.99', '2');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Captain N the Game Master (TV Series', 'Video', '99.99', '1');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mega Man (TV Series)', 'Video', '29.99', '2');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mega Man (TV Series)', 'Video', '29.99', '2');

