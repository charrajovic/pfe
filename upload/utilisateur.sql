-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 16 juin 2020 à 22:21
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `utilisateur`
--

-- --------------------------------------------------------

--
-- Structure de la table `conversation`
--

CREATE TABLE `conversation` (
  `id_message` int(100) NOT NULL,
  `sujet` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `file` text NOT NULL,
  `datep` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `conversation`
--

INSERT INTO `conversation` (`id_message`, `sujet`, `message`, `file`, `datep`) VALUES
(1, 'test1', 'hi&nbsp;', 'ZONE2.txt', '2020-06-15 16:17:28.000000'),
(2, 'amine', 'amine', 'ZONE2 (6).txt', '2020-06-15 16:20:16.000000'),
(3, '123456', 'salam', 'ZONE1.txt', '2020-06-15 16:26:37.000000'),
(4, 'salam', 'salam', 'ZONE2 (4).txt', '2020-06-15 16:27:14.000000'),
(5, 'salam2', 'salam', 'ZONE1.txt', '2020-06-15 16:28:48.000000'),
(6, 'ana ayoube ', 'salam', 'ZONE2 (6).txt', '2020-06-15 16:32:53.000000'),
(7, 'test tra', 'trvil', 'ZONE2 (6).txt', '2020-06-15 16:44:50.000000'),
(8, 'test tra', 'trvil', 'ZONE2 (6).txt', '2020-06-15 16:45:05.000000'),
(9, '123456', 'hi', 'ZONE2 (6).txt', '2020-06-15 17:03:08.000000'),
(10, 'hi', 'hi', 'ZONE2 (5).txt', '2020-06-15 17:03:23.000000'),
(11, 'hello ', 'hu', 'ZONE2 (6).txt', '2020-06-15 17:17:52.000000'),
(12, '123456', 'amine&nbsp;', 'ZONE2 (6).txt', '2020-06-15 17:19:31.000000'),
(13, 'salam', 'aedfezfze', 'ZONE2 (6).txt', '2020-06-15 17:21:39.000000'),
(14, 'salam2', 'aedfezfze', 'ZONE2 (6).txt', '2020-06-15 17:23:02.000000'),
(15, 'salam5', 'aedfezfze', 'ZONE1.txt', '2020-06-15 17:23:15.000000'),
(16, 'haytem', 'aedfezfze', 'ZONE2 (6).txt', '2020-06-15 17:23:42.000000'),
(17, 'haytem1', 'aedfezfze', 'ZONE1.txt', '2020-06-15 17:24:14.000000'),
(18, 'mouad', 'aedfezfze', 'ZONE2 (6).txt', '2020-06-15 17:24:41.000000'),
(19, 'salam ana achref ', 'propsition d\'amelioration', 'ZONE2 (3).txt', '2020-06-16 14:10:45.000000'),
(20, 'salam ana maine reni chaft dek propostion ', '', 'ZONE1.txt', '2020-06-16 14:13:57.000000'),
(21, 'wa7ed mola7ada dertha lk fi chad fichier ', '', 'ZONE1.txt', '2020-06-16 14:15:56.000000'),
(22, 'wa7ed mola7ada dertha lk fi chad fichier ', '', 'ZONE1.txt', '2020-06-16 15:30:19.000000');

-- --------------------------------------------------------

--
-- Structure de la table `destinataire`
--

CREATE TABLE `destinataire` (
  `id` int(100) NOT NULL,
  `nom_expediteur` varchar(255) NOT NULL,
  `nom_destinataire` varchar(255) NOT NULL,
  `email_dest` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `email_expe` varchar(225) NOT NULL,
  `etat` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `destinataire`
--

INSERT INTO `destinataire` (`id`, `nom_expediteur`, `nom_destinataire`, `email_dest`, `email_expe`, `etat`) VALUES
(1, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 0),
(2, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 0),
(3, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 0),
(4, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 0),
(5, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 0),
(6, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(7, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(8, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(9, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 1),
(10, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 1),
(11, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(12, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(13, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(14, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(15, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(16, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(17, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(18, 'kahlaoui', 'bchaiker', 'bchaiker@gmail.com', 'ayoub@gmail.com', 1),
(19, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 1),
(20, 'bchaiker', 'alamie', 'achref@gmail.com', 'bchaiker@gmail.com', 1),
(21, 'bchaiker', 'alamie', 'achref@gmail.com', 'bchaiker@gmail.com', 1),
(22, 'bchaiker', 'alamie', 'achref@gmail.com', 'bchaiker@gmail.com', 0);

-- --------------------------------------------------------

--
-- Structure de la table `utilisator`
--

CREATE TABLE `utilisator` (
  `id` int(100) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `travail` varchar(100) NOT NULL,
  `profil` varchar(200) NOT NULL,
  `confirmation` int(100) NOT NULL,
  `admine` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisator`
--

INSERT INTO `utilisator` (`id`, `nom`, `prenom`, `password`, `email`, `travail`, `profil`, `confirmation`, `admine`) VALUES
(1, 'bchaiker', 'amine', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'bchaiker@gmail.com', 'expert', '16996803502.PNG', 1, 0),
(2, 'kahlaoui', 'ayoub', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'ayoub@gmail.com', 'expert', '28410927723.jpg', 1, 0),
(3, 'alamie', 'laila', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'laila@gmail.com', 'expert', '36931362767.jpg', 1, 0),
(4, 'alamie', 'achref', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'achref@gmail.com', 'archithec', '41578738384.jpg', 1, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `conversation`
--
ALTER TABLE `conversation`
  ADD PRIMARY KEY (`id_message`);

--
-- Index pour la table `destinataire`
--
ALTER TABLE `destinataire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisator`
--
ALTER TABLE `utilisator`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `conversation`
--
ALTER TABLE `conversation`
  MODIFY `id_message` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `destinataire`
--
ALTER TABLE `destinataire`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `utilisator`
--
ALTER TABLE `utilisator`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
