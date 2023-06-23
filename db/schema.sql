DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
    id INT,
    department_id INT,
    role_name VARCHAR(30),
    salary INT,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);

CREATE TABLE employees(
    id int NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    role_id INT,
    FOREIGN KEY(role_id)
    REFERENCES roles(id)
)

CREATE TABLE managers(
    id int NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(30)
    department_id INT,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
)