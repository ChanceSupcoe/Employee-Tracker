DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL,
departmentName VARCHAR(30),
PRIMARY KEY (id) 
);

CREATE TABLE employeeRole (
id IN AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL(19,4),
department_id INT,
PRIMARY KEY (id) 
);

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY KEY (id) 
);