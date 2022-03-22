DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
departmentName VARCHAR(30),
PRIMARY KEY (id) 
);

CREATE TABLE employeeRole (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL(10,2),
department_id INTEGER(11),
PRIMARY KEY (id) 
);

CREATE TABLE employee (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER(11),
manager_id INTEGER(11),
PRIMARY KEY (id) 
);