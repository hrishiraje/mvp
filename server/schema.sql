CREATE DATABASE imagerepo;

USE imagerepo;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `password` varchar(200) NOT NULL,
   PRIMARY KEY (`id`),
   UNIQUE KEY `id` (`id`)
);

CREATE TABLE `images` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `category` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
);

