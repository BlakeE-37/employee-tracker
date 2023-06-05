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
    FOREIGN KEY(department_id)
    REFERENCES department(id)
)