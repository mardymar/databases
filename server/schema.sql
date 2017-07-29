CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int NOT NULL AUTO_INCREMENT,
  text varchar(255),
  roomname varchar(255),
  username varchar(255),
  objectId int,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  ID int,
  name varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  ID int,
  name varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE friends (
  ID int,
  name varchar(255),
  PRIMARY KEY (ID)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

