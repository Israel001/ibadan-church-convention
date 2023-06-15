-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2023 at 09:29 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cbt-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `churches`
--

CREATE TABLE `churches` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(55) NOT NULL,
  `state` varchar(55) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `churches`
--

INSERT INTO `churches` (`id`, `name`, `address`, `city`, `state`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(2, 'Anchor Faith Tabernacle, Lagos', 'Lagos, ', 'Lagos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(3, 'ENDTIME MESSAGE TABERNACLE BENIN, EDO STATE', 'Benin, ', 'Benin', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(4, 'Bible Way Tabernacle, Oworonsoki', 'Lagos, ', 'Lagos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(5, 'Bible Word Tabernacle', 'Ile-Ife, ', 'Ile-Ife', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(6, 'Bible Believers\' Tabernacle, Lagos', 'Lagos, ', 'Lagos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(7, 'Harvest Time Message Tabernacle', 'Ibadan, ', 'Ibadan', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(8, 'Bible Believers Tabernacle,Sabongida-Ora', 'Benin, ', 'Benin', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(9, 'Calvary', 'Onitsha, ', 'Onitsha', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(10, 'Calvary  Tabernacle', 'Iree, ', 'Iree', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(11, 'Calvary Tabernacle, Lokoja', 'Lokoja, ', 'Lokoja', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(12, 'Capstone Tabernacle, Ilaro', 'Ilaro, ', 'Ilaro', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(13, 'Christ Life Tabernacle, Port-Harcourt', 'Port-Harcourt, ', 'Port-Harcourt', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(14, 'Christ \'s Bride Tabernacle, Eleyele', 'Ibadan, ', 'Ibadan', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(15, 'AMAZING GRACE CHRISTIAN TABERNACLE Kaduna', 'Kaduna, ', 'Kaduna', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(16, 'THE WORD-REDEEMED BRIDE TABERNACLE', 'IDI-AYUNRE, ', 'IDI-AYUNRE', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(17, 'Deeper Life Bible Church', 'Ifon, ', 'Ifon', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(18, 'Eagle Message Tabernacle, Dutse', 'Abuja, ', 'Abuja', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(19, 'Earth Deliverance Tabernacle, Ogara', 'Ogara, ', 'Ogara', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(20, 'End Time Tabernacle', 'Onitsha, ', 'Onitsha', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(21, 'Endtime Message Tabernacle, Ekati', 'Ekati, ', 'Ekati', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(22, 'Evening Light Message Tabernacle, Agugu', 'Ibadan, ', 'Ibadan', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(23, 'Evening Light Tabernacle', 'Ekiti, ', 'Ekiti', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(24, 'Evening Light Tabernacle', 'Port-Harcourt, ', 'Port-Harcourt', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(25, 'Faith Tabernacle Church Benin Republic', 'Mapa, ', 'Mapa', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(26, 'God\'s Eagle Tabernacle,Mowe', 'Mowe, ', 'Mowe', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(27, 'God\'s Word Truth Tabernacle, Minna', 'Minna, ', 'Minna', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(28, 'Golden Grain Tabernacle', 'Port-Harcourt, ', 'Port-Harcourt', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(29, 'Igbogidi Church', 'Igbogidi, ', 'Igbogidi', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(30, 'Kaduna Church', 'Kaduna, ', 'Kaduna', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(31, 'Life Tabernacle , Osogbo', 'Osogbo, ', 'Osogbo', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(32, 'Life Tabernacle, Kabba', 'Kogi State, ', 'Kogi State', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(33, 'Light Tabernacle - Onitsha', 'Onitsha, ', 'Onitsha', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(34, 'Living Word Tabernacle, Ilorin', 'Ilorin, ', 'Ilorin', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(35, 'Living Word Tabernacle, Warri', 'Warri, ', 'Warri', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(36, 'Love of Christi Tabernacle, Aiyetoro', 'Aiyetoro, ', 'Aiyetoro', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(37, 'Malachi 4 Tabernacle', 'Ilaro, ', 'Ilaro', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(38, 'Malachi 4 Tabernacle, Oke-Ela', 'Oke-Ela, ', 'Oke-Ela', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(39, 'Messiah Headstone Ministry, Sawmill', 'Ibadan, ', 'Ibadan', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(40, 'Open Door Tabernacle', 'Patiji, ', 'Patiji', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(41, 'Revelation of New Birth Tabernacle', 'Ijebu-Ode, ', 'Ijebu-Ode', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(42, 'Perfect Faith Tabernacle, Ilesha', 'Ilesha, ', 'Ilesha', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(43, 'Redeemed Christian Church Of God', 'Abeokuta, ', 'Abeokuta', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(44, 'Restoration Tabernacle ,Ibillo', 'Ibillo, ', 'Ibillo', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(45, 'Saints Tabernacle Kaduna', 'Kaduna, ', 'Kaduna', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(46, 'Solid Rock Tabernacle, Abeokuta', 'Abeokuta, ', 'Abeokuta', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(47, 'Spoken Word Bible Church, Osogbo', 'Osogbo, ', 'Osogbo', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(48, 'Endtime Message Tabernacle, Benin', 'Benin, ', 'Benin', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(49, 'Spoken word Tabernacle, Kaduna', 'Kaduna, ', 'Kaduna', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(50, 'Spoken Word Tabernacle,Epe', 'Epe, ', 'Epe', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(51, 'The Apostolic Church', 'Kaduna, ', 'Kaduna', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(52, 'The Church by Christ', 'Ibadan, ', 'Ibadan', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(53, 'The Revealed Word Tabernacle, Okene', 'Okene, ', 'Okene', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(54, 'The Spoken Word Fellowship, Osogbo', 'Osogbo, ', 'Osogbo', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(55, 'True Word Gospel Tabernacle', 'Ijebu-Ode, ', 'Ijebu-Ode', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(56, 'KINDRED SEED GOSPEL TABERNACLE, JOS', 'Jos, ', 'Jos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(57, 'Truth & Narrow Way Tabernacle, Oke-Afa', 'Lagos, ', 'Lagos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(58, 'Victory Centre', 'Ibadan, ', 'Ibadan', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(59, 'Voice of God Tabernacle, Bida', 'Bida, ', 'Bida', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(60, 'KINDRED SEED GOSPEL TABERNACLE', 'Jos, ', 'Jos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(61, 'ROYAL SEED TABERNACLE', 'ABEOKUTA, ', 'ABEOKUTA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(62, 'SPOKEN WORD MANIFESTED TABERNACLE', 'SANGO-OTA, ', 'SANGO-OTA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(63, 'SPOKEN WORD CHRISTIAN ASSEMBLY', 'UROMI, ', 'UROMI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(64, 'BIBLE BELEIVER TABERNACLE', 'ABUJA, ', 'ABUJA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(65, 'WILLIAM BRAHAM TABERNACLE', 'ILORIN, ', 'ILORIN', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(66, 'ERUWA CHURCH', 'IBADAN, ', 'IBADAN', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(67, 'Evening Light Tabernacle', 'AJAOKUTA, ', 'AJAOKUTA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(68, 'LIFE TABERNACLE', 'EKPOMA, ', 'EKPOMA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(69, 'RAPTURING FAITH TABERNACLE AUCHI', 'AUCHI, ', 'AUCHI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(70, 'CHARITY TABERNACLE, ONITSHA', 'ONITSHA, ', 'ONITSHA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(71, 'SPOKEN  WORD TABERNACLE SAPELE', 'SAPELE, ', 'SAPELE', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(72, 'BRIDE OF CHRIST TABERNACLE WARRI', 'WARRI, ', 'WARRI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(73, 'HOUSEHOLD FELLOWSHIP', 'WARRI, ', 'WARRI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(74, 'LOVE AND GRACE TABERNACLE', 'OKEODAN, ', 'OKEODAN', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(75, 'BIBLE BELIVERS CHURCH UROMI', 'UROMI, ', 'UROMI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(76, 'CHRÌST CHOSEN ONES TABERNACLE', 'ADO EKITI, ', 'ADO EKITI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(77, 'End Time Tab, Urue', 'Urue, Edo State, ', 'Urue, Edo State', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(78, 'SOLID ROCK BIBLE TABERNACLE DUTSE', 'ABUJA, ', 'ABUJA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(79, 'MOUNTAIN OF FIRE CHURCH RING ROAD', 'IBADAN, ', 'IBADAN', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(80, 'ABSOLUTE TABERNACLE ILARO', 'ILARO, ', 'ILARO', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(81, 'Eagles Food Tabernacle', 'Abuja, ', 'Abuja', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(82, 'Ensign Tabernacle', 'Abuja, ', 'Abuja', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(83, 'CHRIST LIFE TABERNACLE, OMI-ADIO', 'Ibadan, ', 'Ibadan', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(84, 'GRACE AND GLORY TABERNACLE', 'OWODE-YEWA, ', 'OWODE-YEWA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(85, 'TRUTH AND LIFE GOSPEL ASSEMBLY', 'IDO, ', 'IDO', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(86, 'Gospel Restoration', 'Isanlu Kogi State, ', 'Isanlu Kogi State', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(87, 'Seven Seals Tab', 'Ile Ife, ', 'Ile Ife', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(88, 'Sunset Tabernacle', 'Lagos, ', 'Lagos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(89, 'Keystone Tabernacle', 'Sango-Otta, ', 'Sango-Otta', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(90, 'IN-CHRIST CHRISTIAN ASSEMBLY', 'LAGOS, ', 'LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(91, 'Path to Glory Tabernacle', 'Port-Harcourt, ', 'Port-Harcourt', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(92, 'Bible Believers Tabernacle Abeokuta', 'ABEOKUTA, ', 'ABEOKUTA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(93, 'SPOKEN WORD TABERNACLE, ABUJA', 'ABUJA, ', 'ABUJA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(94, 'LIFE TABERNACLE, SAGAMU', 'SAGAMU, ', 'SAGAMU', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(95, 'Bride of Christ Tabernacle', 'Ajaokuta, Kogi State, ', 'Ajaokuta, Kogi State', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(96, 'BETHEL TABERNACLE', 'AKURE, ', 'AKURE', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(97, 'THE PERFECT MAN IN CHRIST MINISTRY', 'ABUJA, ', 'ABUJA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(98, 'LOCAL CHRISTIAN ASSEMBLY', 'LAGOS, ', 'LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(99, 'FULL GOSPEL RESTORATION TABERNACLE', 'LOKOJA, ', 'LOKOJA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(100, 'LIFE ASSEMBLY', 'Ilaro, ', 'Ilaro', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(101, 'END-TIME CHRISTIAN FELLOWSHIP', 'ENUGU, ', 'ENUGU', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(102, 'Only Believe Christian Bible Church', 'Eruwa, ', 'Eruwa', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(103, 'BIBLE BELIEVER TABERNACLE CHURCH', 'IWAYA LAGOS, ', 'IWAYA LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(104, 'END TIME MESSAGE TABERNACLE', 'ALAGBON-KOSO, ', 'ALAGBON-KOSO', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(105, 'Amazing Grace Tabernacle Osun State', 'Osun State, ', 'Osun State', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(106, 'Gloryland Tabernacle,', 'IBADAN, ', 'IBADAN', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(107, 'LIFE ASSURANCE TABERNACLE', 'IGANDO ISHERI ROAD LAGOS, ', 'IGANDO ISHERI ROAD LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(108, 'RESTORED TRUTH TABERNACLE', 'OSOGBO, ', 'OSOGBO', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(109, 'Restored Word Bride Tabernacle', 'Jos, ', 'Jos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(110, 'SPOKEN WORD CHRISTIAN FELLOWSHIP', 'EDO STATE, ', 'EDO STATE', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(111, 'ORIGINAL SEED TABERNACLE', 'CALABER, ', 'CALABER', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(112, 'ENDTIME MESSAGE', 'IKERE, ', 'IKERE', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(113, 'Bible Beleivers Fellowship', 'Nassarawa, ', 'Nassarawa', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(114, 'Faith and Life Tabernacle', 'Auchi, ', 'Auchi', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(115, 'SPOKEN WORD MINISTRY', 'BENIN, ', 'BENIN', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(116, 'LIVING WORD TABERNACLE', 'WARRI, ', 'WARRI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(117, 'THE TRUTH AND CHRISTIAN LIFE TABERNACLE', 'LAGOS, ', 'LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(118, 'BIBLE BELIEVERS TABERNACLE', 'IMO STATE, ', 'IMO STATE', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(119, 'END TIME MESSAGE TABERNACLE', 'ABA-ASAMU, ', 'ABA-ASAMU', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(120, 'END TIME MESSAGE BELIEVERS TABERNACLE', 'ALAGBEDE, ', 'ALAGBEDE', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(121, 'CHRIST LIBERTY TABERNACLE , EKITI', 'EKITI, ', 'EKITI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(122, 'THE WORD BRIDE TABERNACLE', 'ILESA, ', 'ILESA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(123, 'AMAZING LOVE TABERNACLE', 'IGBOORA, ', 'IGBOORA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(124, 'CAPSTONE WORD TABERNACLE', 'PORT HARCOURT, ', 'PORT HARCOURT', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(125, 'HIGHER WAY TABERNACLE', 'EKITI, ', 'EKITI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(126, 'ENDTIME MESSAGE TABERNACLE', 'GHANA, ', 'GHANA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(127, 'UNIQUE CHRISTIAN FELLOWSHIP', 'GHANA, ', 'GHANA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(128, 'Holiness Truth Tabernacle', 'Oshogbo, ', 'Oshogbo', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(129, 'LIVING WORD TABERNACLE', 'USA, ', 'USA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(130, 'Christian Fellowship Tabernacle, Maryland, USA', 'USA, ', 'USA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(131, 'BIBLE BELIEVER TABERNACLE CHURCH IWAYA LAGOS', 'Lagos, ', 'Lagos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(132, 'LIVING GOD TABERNACLE, KUMASI', 'GHANA, ', 'GHANA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(133, 'ONLY BELIEVE TABERNACLE', 'AGATU, BENUE., ', 'AGATU, BENUE.', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(134, 'CAPSTONE TABERNACLE, AGATU', 'AGATU, ', 'AGATU', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(135, 'BRIDE ASSEMBLY CHURCH', 'LAGOS, ', 'LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(136, 'LIVIN SEED WORD TABERNACLE', 'NASARAWA, ', 'NASARAWA', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(137, 'SEED OF GOD ASSEMBLY', 'LAGOS, ', 'LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(138, 'HOUR OF SALVATION EKITI', 'EKITI, ', 'EKITI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(139, 'Amazing Grace Tabernacle,Sapele Delta State', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(140, 'Bride Assembly church Lagos', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(141, 'Christ bride Tabernacle, onitsha', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(142, 'Christain Ministry of Reconciliation', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(143, 'Christ\'s heritage tabernacle, Ekpoma.', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(144, 'Eagle time tarbanacle obagaji agatu,benue state', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(145, 'Eaglenest Tabernacle Church New Karu Nasarawa', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(146, 'Elijah\'s Message Tabernacle Lokoja', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(147, 'Faith Of The Apostle Tabernacle.  Ifo Ogun State', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(148, 'God\'s Eagle Tabernacle,Mowe Mowe', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(149, 'Golden grain Tabernacle Port Harcourt', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(150, 'Malachi 4 Bible Believers Fellowship.', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(151, 'Shekinah Tabernacle Igbeti Oyo state', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(152, 'Spoken Word Tabernacle, Epe, Lagos state', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(153, 'The Faith Of The Apostle Tabernacle. Ifo Ogun State', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(154, 'The Lord\'s Tabernacle', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(155, 'The Spoken Word Assembly Oghara', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(156, 'Third exodus revival center sagamu ogun state', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(157, 'Word Oriented Bride Tabernacle, Ughelli,Delta State', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(158, 'Zion Hill Christian Assembly Asaba Delta State Nigeria', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(159, 'GOD\'S WILL FOR THIS AGE TABERNACLE', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(160, 'LOCAL CHRISTIAN ASSEMBLY LAGOS', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(161, 'Bride fellowship church okota lagos', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(162, 'GOLDEN BRIDE TABERNACLE Ede Osun State', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(163, 'New life Tabernacle Ibadan', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(164, 'Omega bride', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(165, 'Peace Valley Tabernacle Nasarawa', ', ', '', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(166, 'NEW CONVENANT CHURCH', 'IBADAN, ', 'IBADAN', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(167, 'LIGHT HOUSE OF GOD TABERNACLE', 'LAGOS, ', 'LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(168, 'ijede church', 'lagos, ', 'lagos', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(169, 'The voice of God Tabernacle', 'niger state, ', 'niger state', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(170, 'RAPTURING FAITH TABERNACLE', 'EKITI, ', 'EKITI', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40'),
(171, 'RCCG LIVINGSTONE ASSEMBLY LAGOS PROVINCE 54', 'LAGOS, ', 'LAGOS', '', NULL, '', '2023-05-13 07:27:40', '2023-05-13 07:27:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `churches`
--
ALTER TABLE `churches`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `churches`
--
ALTER TABLE `churches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
