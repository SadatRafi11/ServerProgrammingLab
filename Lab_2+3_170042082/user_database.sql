DROP DATABASE user_base;
CREATE DATABASE user_base;
USE user_base;

CREATE TABLE users (
	username VARCHAR(20) PRIMARY KEY,
	user_email VARCHAR(20) NOT NULL,
	user_password VARCHAR(20) NOT NULL
);