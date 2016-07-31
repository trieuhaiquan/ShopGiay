-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2016 at 03:21 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `shopgiay`
--

-- --------------------------------------------------------

--
-- Table structure for table `loaigiay`
--

CREATE TABLE IF NOT EXISTS `loaigiay` (
  `idloai` int(11) NOT NULL AUTO_INCREMENT,
  `tenloai` varchar(255) NOT NULL,
  `gioitinh` tinyint(4) NOT NULL,
  `anhien` tinyint(4) NOT NULL,
  PRIMARY KEY (`idloai`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `loaigiay`
--

INSERT INTO `loaigiay` (`idloai`, `tenloai`, `gioitinh`, `anhien`) VALUES
(1, 'Running', 0, 1),
(2, 'Basketball', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE IF NOT EXISTS `sanpham` (
  `idsp` int(11) NOT NULL AUTO_INCREMENT,
  `idloai` int(11) NOT NULL,
  `tensp` varchar(255) NOT NULL,
  `gia` bigint(20) NOT NULL,
  `urlhinh` varchar(255) NOT NULL,
  `soluong` int(11) NOT NULL,
  `danhgia` int(11) NOT NULL,
  `anhien` int(11) NOT NULL,
  `mota` text NOT NULL,
  `kichthuoc` tinyint(4) NOT NULL,
  `mausac` varchar(50) NOT NULL,
  PRIMARY KEY (`idsp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
