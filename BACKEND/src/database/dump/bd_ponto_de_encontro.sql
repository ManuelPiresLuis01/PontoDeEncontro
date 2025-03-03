-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Mar-2025 às 17:54
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_ponto_de_encontro`
--
CREATE DATABASE IF NOT EXISTS `bd_ponto_de_encontro` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bd_ponto_de_encontro`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ativity`
--

DROP TABLE IF EXISTS `ativity`;
CREATE TABLE IF NOT EXISTS `ativity` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TITLE` varchar(100) NOT NULL,
  `DESCRIPTION` text DEFAULT NULL,
  `PHOTO` varchar(500) DEFAULT NULL,
  `BEGIN_DATE` datetime NOT NULL,
  `END_DATE` datetime NOT NULL,
  `USER_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `USER_ID` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ativity_participants`
--

DROP TABLE IF EXISTS `ativity_participants`;
CREATE TABLE IF NOT EXISTS `ativity_participants` (
  `ID_ATIVITY` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID_ATIVITY`,`USER_ID`),
  KEY `USER_ID` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `interests`
--

DROP TABLE IF EXISTS `interests`;
CREATE TABLE IF NOT EXISTS `interests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `interest` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `interests`
--

INSERT INTO `interests` (`id`, `user_id`, `interest`) VALUES
(1, 10, 'brincar'),
(2, 10, 'cagar'),
(3, 10, 'mijar'),
(4, 10, 'namorar');

-- --------------------------------------------------------

--
-- Estrutura da tabela `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `EMISSOR_ID` int(11) NOT NULL,
  `RECEPTOR_ID` int(11) NOT NULL,
  `CONTENT` text NOT NULL,
  `SENT_DATE` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`),
  KEY `EMISSOR_ID` (`EMISSOR_ID`),
  KEY `RECEPTOR_ID` (`RECEPTOR_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `birth_date` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` enum('male','female','other') NOT NULL,
  `photo` text DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `activationCode` varchar(10) NOT NULL,
  `profile_photo` text DEFAULT NULL,
  `status` enum('single','dating','married','widowed','divorced') DEFAULT 'single',
  `activated` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `birth_date`, `email`, `gender`, `photo`, `description`, `password`, `activationCode`, `profile_photo`, `status`, `activated`, `created_at`, `updated_at`) VALUES
(7, 'teste', '2001-05-30', 'wertyu@sdff', 'male', NULL, NULL, '$2b$10$/ndJKvDyk77TOCQF.d6.HOAUHLaD5PuSwOFVCm.DMTFSXIPAk7Eaq', '', NULL, 'single', 1, '2025-03-02 22:19:55', '2025-03-02 22:20:34'),
(9, 'teste', '2001-05-30', 'wertyu@sdf', 'male', NULL, NULL, '$2b$10$4MOZe5O966fRTNPHMbpZmumrVdSgUnx6CVl8ElazXtIQWb0zjxmAa', '', NULL, 'single', 1, '2025-03-02 22:23:08', '2025-03-02 22:25:40'),
(10, 'Manuel', '2001-05-30', 'pires@sdff', 'male', NULL, 'Rei dos piratas', '$2b$10$JsyhxSo6DapsHvq3a2SgGOoUYoy3llAk1DdJD4QNIawmtac4SKZ3i', '', NULL, 'single', 1, '2025-03-02 22:41:01', '2025-03-02 23:45:40'),
(11, 'Manuel Pires Luis', '2001-05-30', 'pierx@sdff', 'male', NULL, NULL, '$2b$10$oFMKzqN5RQeQT7N.TjVAkeHJT/V8O7LaVGr4cLfFqGmIiBY46wpbC', '', NULL, 'single', 1, '2025-03-03 00:10:08', '2025-03-03 00:10:59'),
(12, 'Pires', '2001-05-30', 'teste@teste', 'male', NULL, NULL, '$2b$10$oTFSjkCXfpDJlSyO9ymiiuQ/ErH6q5K15W0/j3jaUB8lfePvxT3gm', '', NULL, 'single', 1, '2025-03-03 12:52:35', '2025-03-03 12:53:37'),
(13, 'Manuel Pires Luis', '2001-05-30', 'mpl31052001@gmail.com', 'male', NULL, NULL, '$2b$10$zvmkEO70.Stynymk/QPx6eKWrhpIiWxD0tv7zaE8XSGFYHDIqopce', '292690', NULL, 'single', 0, '2025-03-03 15:36:03', '2025-03-03 15:51:43');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `ativity`
--
ALTER TABLE `ativity`
  ADD CONSTRAINT `ativity_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `ativity_participants`
--
ALTER TABLE `ativity_participants`
  ADD CONSTRAINT `ativity_participants_ibfk_1` FOREIGN KEY (`ID_ATIVITY`) REFERENCES `ativity` (`ID`),
  ADD CONSTRAINT `ativity_participants_ibfk_2` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `interests`
--
ALTER TABLE `interests`
  ADD CONSTRAINT `interests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`EMISSOR_ID`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`RECEPTOR_ID`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
