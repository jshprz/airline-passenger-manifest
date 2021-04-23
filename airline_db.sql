/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.4.17-MariaDB : Database - airline_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`airline_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `airline_db`;

/*Table structure for table `aircraft_details_tbl` */

DROP TABLE IF EXISTS `aircraft_details_tbl`;

CREATE TABLE `aircraft_details_tbl` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `engine_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `aircrafts_tbl` */

DROP TABLE IF EXISTS `aircrafts_tbl`;

CREATE TABLE `aircrafts_tbl` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `aircraft_details_id` int(10) unsigned DEFAULT NULL,
  `airline_company_id` int(10) unsigned DEFAULT NULL,
  `first_class_seat_quantity` int(10) unsigned DEFAULT NULL,
  `business_seat_quantity` int(10) unsigned DEFAULT NULL,
  `premium_seat_quantity` int(10) unsigned DEFAULT NULL,
  `economy_seat_quantity` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `aircraft_details_id` (`aircraft_details_id`),
  KEY `airline_company_id` (`airline_company_id`),
  CONSTRAINT `aircrafts_tbl_ibfk_1` FOREIGN KEY (`aircraft_details_id`) REFERENCES `aircraft_details_tbl` (`id`),
  CONSTRAINT `aircrafts_tbl_ibfk_2` FOREIGN KEY (`airline_company_id`) REFERENCES `airline_companies_tbl` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `airline_companies_tbl` */

DROP TABLE IF EXISTS `airline_companies_tbl`;

CREATE TABLE `airline_companies_tbl` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `company_name` varchar(50) DEFAULT NULL,
  `headquarters` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `flights_tbl` */

DROP TABLE IF EXISTS `flights_tbl`;

CREATE TABLE `flights_tbl` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `aircraft_id` int(10) unsigned DEFAULT NULL,
  `flight_number` int(10) unsigned DEFAULT NULL,
  `destination` varchar(50) DEFAULT NULL,
  `terminal` varchar(20) DEFAULT NULL,
  `gate` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `flight_number` (`flight_number`),
  KEY `aircraft_id` (`aircraft_id`),
  CONSTRAINT `flights_tbl_ibfk_1` FOREIGN KEY (`aircraft_id`) REFERENCES `aircrafts_tbl` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `passengers_booking_tbl` */

DROP TABLE IF EXISTS `passengers_booking_tbl`;

CREATE TABLE `passengers_booking_tbl` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `flight_id` int(10) unsigned DEFAULT NULL,
  `seat_type` int(10) unsigned DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `age` int(10) unsigned DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `flight_id` (`flight_id`),
  CONSTRAINT `passengers_booking_tbl_ibfk_1` FOREIGN KEY (`flight_id`) REFERENCES `flights_tbl` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
