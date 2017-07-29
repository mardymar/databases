CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int,
  words varchar(255),
  room varchar(255),
  user varchar(255),
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

