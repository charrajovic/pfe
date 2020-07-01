-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 17 juin 2020 à 17:52
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
(1, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 1),
(2, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 1),
(3, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 0),
(4, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 1),
(5, 'alamie', 'bchaiker', 'bchaiker@gmail.com', 'achref@gmail.com', 1),
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

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `destinataire`
--
ALTER TABLE `destinataire`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `destinataire`
--
ALTER TABLE `destinataire`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
