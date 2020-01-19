-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2019 at 01:02 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `education`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `AdminID` int(11) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`AdminID`, `UserName`, `Password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `Id` int(11) NOT NULL,
  `CochingId` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Month` varchar(255) DEFAULT NULL,
  `PaymentDate` date DEFAULT NULL,
  `Type` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `StudentID` int(11) NOT NULL,
  `CochingId` varchar(255) DEFAULT NULL,
  `StudentName` varchar(255) DEFAULT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Image` blob DEFAULT NULL,
  `InstitutionName` varchar(255) DEFAULT NULL,
  `Class` varchar(255) DEFAULT NULL,
  `AdmissionDate` date DEFAULT NULL,
  `GuardianName` varchar(255) DEFAULT NULL,
  `GuardianOccupation` varchar(255) DEFAULT NULL,
  `Relation` varchar(255) DEFAULT NULL,
  `GuardianPhoneNumber` varchar(255) DEFAULT NULL,
  `GuardianAddress` varchar(255) DEFAULT NULL,
  `MonthlyPayment` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`StudentID`, `CochingId`, `StudentName`, `PhoneNumber`, `Gender`, `Address`, `Image`, `InstitutionName`, `Class`, `AdmissionDate`, `GuardianName`, `GuardianOccupation`, `Relation`, `GuardianPhoneNumber`, `GuardianAddress`, `MonthlyPayment`) VALUES
(1, '', 'Shakil', '+880 1717124584', 'Male', 'road#5, house#29', 0x756e646566696e6564, 'Dhaka high school', 'Three', '2019-11-17', 'agsa', 'undefined', 'undefined', '3545312', 'ahes', 5000),
(2, '', 'mishu', '6455555555', 'Other', 'road#5, house#29', 0x756e646566696e6564, 'Others high school', 'Four', '2019-11-18', 'agsa', 'undefined', 'undefined', '3545312', 'ahes', 5000),
(3, '', 'ukgjj', '6455555555', 'Male', 'road#5, house#29', 0x73746166662e706e67, 'hgcn', 'Four', '2019-11-13', 'agsa', 'undefined', 'undefined', '3545312', 'ahes', 5000),
(4, '', 'fdga', '6455555555', 'Male', 'road#5, house#29', 0x494f542d696e7465726e65742d6f662d7468696e67732d747261696e696e672d696e2d4a616c616e6468617232312e6a7067, 'hgcn', 'Five', '2019-11-07', 'dSFG', 'undefined', 'undefined', '6333333333', 'ahes', 5000),
(5, '', 'Dhrbo Ahmed', '+880 1717124584', 'Male', 'Dhaka, Bangladesh', 0x73747564656e742d496d6167652e6a7067, 'Dhaka School', 'Five', '2019-11-18', 'S A Shakil', 'undefined', 'undefined', '+880 1717124584', 'Dhaka, Bangladesh', 4000),
(6, '', 'Dhrubo Ahmed', '+880 1717124584', 'Male', 'Dhaka, Bangladesh', 0x73747564656e742d496d6167652e6a7067, 'Dhaka School', 'Five', '2019-11-18', 'S A Shakil', 'undefined', 'undefined', '+880 1717124584', 'Dhaka, Bangladesh', 4000),
(7, '', 'sadggg', '6455555555', 'Female', 'Dhaka, Bangladesh', 0x73747564656e742d496d6167652e6a7067, 'Dhaka high school', 'Seven', '2019-11-17', 'dSFG', 'undefined', 'undefined', '3545312', 'egqh', 4000),
(8, '', 'sadggg', '6455555555', 'Female', 'Dhaka, Bangladesh', 0x73747564656e742d496d6167652e6a7067, 'Dhaka high school', 'Seven', '2019-11-17', 'dSFG', 'undefined', 'undefined', '3545312', 'egqh', 4000),
(9, '', 'sn', '6455555555', 'Female', 'jfhar', 0x73747564656e742d496d6167652e6a7067, 'a', 'Four', '2019-11-19', 'agsa', 'undefined', 'undefined', '6333333333', 'egqh', 4000),
(10, '', 'sn', '6455555555', 'Female', 'jfhar', 0x73747564656e742d496d6167652e6a7067, 'a', 'Four', '2019-11-19', 'agsa', 'undefined', 'undefined', '6333333333', 'egqh', 4000),
(11, '', 'WGRH', 'AE', 'Male', 'EHA', 0x73747564656e742d496d6167652e6a7067, 'gr', 'Five', '2019-11-04', 'RGr', 'undefined', 'undefined', 'reg', 'r', 44),
(12, '', 'WGRH', 'AE', 'Male', 'EHA', 0x73747564656e742d496d6167652e6a7067, 'gr', 'Five', '2019-11-04', 'RGr', 'undefined', 'undefined', 'reg', 'r', 44),
(13, '', 'ff', 'ff', 'Male', 'ff', 0x766563746f726c6f676f2e706e67, 'ff', 'Five', '2019-11-14', 'ff', 'undefined', 'undefined', 'ff', 'ff', 20),
(14, '', 'ff', 'ff', 'Male', 'ff', 0x766563746f726c6f676f2e706e67, 'ff', 'Five', '2019-11-14', 'ff', 'undefined', 'undefined', 'ff', 'ff', 20),
(15, '', 'ff', 'ff', 'Female', 'ff', 0x73747564656e742d496d6167652e6a7067, 'ff', 'Four', '2019-11-07', 'ff', 'undefined', 'undefined', 'ff', 'ff', 200),
(16, '1910001', 'tuhin', '01758964456', 'Male', 'Dhaka, Bangladesh', 0x73746166662e706e67, 'Dhaka high school', 'Seven', '2019-11-06', 'rqhhhhhh', 'undefined', 'undefined', '6666666666666', 'Dhaka, Bangladesh', 4000);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `TeacherID` int(11) NOT NULL,
  `CochingId` varchar(255) DEFAULT NULL,
  `TeacherName` varchar(255) DEFAULT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Image` blob DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `UniversityName` varchar(255) DEFAULT NULL,
  `UniversityDegree` varchar(255) DEFAULT NULL,
  `CollegeName` varchar(255) DEFAULT NULL,
  `CollegeGroup` varchar(255) DEFAULT NULL,
  `JoiningDate` date DEFAULT NULL,
  `Salary` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`TeacherID`, `CochingId`, `TeacherName`, `PhoneNumber`, `Gender`, `Address`, `Image`, `Email`, `UniversityName`, `UniversityDegree`, `CollegeName`, `CollegeGroup`, `JoiningDate`, `Salary`) VALUES
(1, '', 'hfjrhf', 'rhh', 'Male', 'gfsfs', 0x756e646566696e6564, 'hhhfhf', 'sfdsfds', 'dss', 'dfgdg', 'Others', '2019-11-21', 200),
(2, '', 'Shakil', '+880 1717124584', 'Male', 'road#5, house#29', 0x756e646566696e6564, 'something@example.com', 'sfdsfds', 'dss', 'dfgdg', 'Science', '2019-11-06', 2000),
(3, '', 'sb', 'bs', 'Female', 'bfsb', 0x73747564656e742d496d6167652e6a7067, 'sbbs', 'sfdsfds', 'aajej', 'jeaeajajaj', 'Science', '2019-11-17', 2000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`AdminID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`StudentID`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`TeacherID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `AdminID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `StudentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `TeacherID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
