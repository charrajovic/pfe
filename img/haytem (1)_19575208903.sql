-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 04 mai 2020 à 18:33
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
-- Base de données : `haytem`
--

-- --------------------------------------------------------

--
-- Structure de la table `composant urbain`
--

CREATE TABLE `composant urbain` (
  `Indice` int(11) DEFAULT NULL,
  `Nom` varchar(255) NOT NULL,
  `Rôle` text NOT NULL,
  `Catégorie` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `composant urbain`
--

INSERT INTO `composant urbain` (`Indice`, `Nom`, `Rôle`, `Catégorie`) VALUES
(1, 'ZS\r\nZones urbaines \r\n', 'La zone ZS correspond aux projets intégrés réalisés par des opérateurs publics.', 'Zones urbaines'),
(2, 'IN \r\nzone d’activité économique\r\n', 'La Zone IN est une zone d’activité économique complément indispensable des zones d’habitation.', 'zone d’activité économique'),
(3, 'IN2\r\nZones industrielles \r\n', 'Le secteur IN2 est réservé aux activités industrielles de 2ème catégorie grande consommatrice d’espaces, pouvant recevoir également l’hôtellerie, l’enseignement et les établissements de formation et de recherche ', 'zone d’activité économique'),
(4, 'IN3\r\nZones industrielles et d’activités\r\n', 'Le secteur IN3 est réservé aux activités artisanales et commerciales, où l’habitat est autorisé à l’étage. Ce secteur voué à la création d’entrepôts et d’ateliers formant des poches d’emplois et d’attractions des populations.', 'zone d’activité économique'),
(5, 'IN4\r\nZones industrielles et d’activités\r\n', 'Le secteur IN4 est réservé aux activités industrielles de 2ème catégorie, aux dépôts et aux pépinières d’entreprises', 'zone d’activité économique'),
(6, 'INS\r\nZones industrielles et d’activités\r\n', 'La zone INS « Show-Room » est réservée exclusivement aux halls, pavillons parcs d’expositions et aires commerciales nécessaires au secteur de l’investissement, qui donneront une image renouvelée des pénétrantes de la Commune, et permettront une meilleure orientation de l’épargne vers les investissements créateurs d’emplois qualifiés et à forte valeur ajoutée.', 'Zones industrielles et d’activités'),
(7, 'INL\r\nZones industrielles et d’activités\r\n', 'La zone INL est une zone destinée à la réalisation de plateformes logistiques au profit de la grande distribution, visant une meilleure articulation entre les fonctions de production, de distribution et de commercialisation', 'Zones industrielles et d’activités'),
(8, 'RA\r\nZone Rurale\r\n', 'La zone rurale englobe l\'ensemble de la population, du territoire et des autres ressources des campagnes, c\'est à dire les zones situées en dehors des grands centres urbanisés.', 'Zone Rurale'),
(9, 'RB\r\nZone de protection\r\n', 'Une zone protégée est une zone créée par arrêté des ministres compétents et faisant l\'objet d\'une interdiction de pénétration sans autorisation, sanctionnée pénalement en cas d\'infraction.', 'Zone de protection'),
(10, 'A\r\nLes services administratifs\r\n', 'Un service administratif est un service qui est presque entièrement soumis aux règles du droit public', 'Les équipements publics'),
(11, 'P\r\n Les services publics culturels, sociaux et commerciaux', 'Un service public est une administration régie et financée par l’Etat, et dont le fruit de l’activité est disponible pour tous', 'Les équipements publics'),
(12, 'E\r\nLes établissements d’enseignement\r\n', 'Les établissements d’enseignement est un établissement où l\'on accueille des individus appelés « écoliers » ou élèves afin que des professeurs leur dispensent un enseignement de façon collective', 'Les équipements publics'),
(13, 'S\r\nLes établissements de la santé publique\r\n', 'Les établissements de la santé publique est un établissement public qui assure des services traditionnellement inclus sous l\'expression de service public hospitalier', 'Les équipements publics'),
(14, 'M\r\nLes mosquées\r\n', 'Une mosquée est un lieu de culte où se rassemblent les musulmans pour les prières communes.', 'Les équipements publics'),
(15, 'C\r\nLes cimetières\r\n', 'Le cimetière est un lieu où l\'on enterre les personnes mortes.', 'Les équipements publics'),
(16, 'SP\r\nLes équipements sportifs\r\n', 'Un équipement sportif est un aménagement spatial ou une construction permettant la pratique d\'un ou plusieurs sports.', 'Les équipements publics'),
(17, 'G\r\nLes équipements d’intérêt général\r\n', 'L’intérêt général désigne la finalité d\'actions ou d\'institutions censées intéresser et servir une population considérée dans son ensemble', 'Les équipements publics'),
(17, 'B\r\nZone urbaine\r\n', 'La zone B est une zone urbaine d’immeubles d’habitat collectif ou individuel alignés dans laquelle les constructions constituent, de mitoyen à mitoyen, des continuités bâties de 60m linéaire au maximum, que ce soit à l’alignement sur voies ou sur les marges de recul indiquées sur le plan d’aménagement', '\r\nzone d\'immeubles d\'habitat \r\n'),
(18, 'B2\r\nZone d\'activités de commerce et d\'artisanat non polluantes\r\n', 'Zone désigne de manière générale un espace conçu et/ou réservé (par les politiques publiques) d\'aménagement du territoire pour différentes activités commerciales.', 'zone d’activité économique'),
(19, 'B3\r\nZone d\'activités de commerce et d\'artisanat non polluantes\r\n', 'une zone industrielle ou encore un technopôle. Il est imaginé dans l’objectif de créer une croissance et d’inciter de nouvelles entreprises à venir s’installer dans cette zone, mais aussi d’élaborer un partenariat entre collectivités, entreprises et pouvoirs publics. Dorénavant, ils tendent à s’adapter à une véritable cohérence urbanistique et à respecter les dernières normes de développement durable.', 'zone d’activité économique'),
(20, 'B4\r\nZone d\'hôtellerie\r\n', 'groupe hôtelier quel que soit leur statut juridique', 'zone d\'immeubles d\'habitat'),
(21, 'SB4\r\nZone de services et d\'équipements publics\r\n', 'est destinée aux activités d\'utilité publique ou d\'intérêt général.', 'Les équipements publics'),
(22, 'Zone D', 'la zone D est une zone eésidentielle / ou d\'hébergement de vacances destinées à des logements individuels ', 'zone résidentielle'),
(23, 'DS1\r\nsecteur de la zone D ', 'la réalisation de lotissements de villas et la réalisation de résidences fermées de villas ou de chalets en villégiature', 'zone de lottissements de villas');

-- --------------------------------------------------------

--
-- Structure de la table `invitations`
--

CREATE TABLE `invitations` (
  `id` int(100) NOT NULL,
  `idp` int(100) NOT NULL,
  `idm` int(100) NOT NULL,
  `etat` int(100) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `invitations`
--

INSERT INTO `invitations` (`id`, `idp`, `idm`, `etat`) VALUES
(1, 2, 1, 1),
(2, 2, 3, 1),
(3, 2, 4, 1),
(7, 1, 4, 1),
(8, 1, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(100) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `date` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `etat` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `contenu`, `date`, `etat`) VALUES
(1, 'wa fen a sat', '2020-04-22 14:16:32.151707', 1),
(2, 'hmd et toi?', '2020-04-22 14:16:32.151707', 1),
(3, 'mzyan', '2020-04-22 14:16:32.151707', 1),
(4, 'fen a lkhawa dyali', '2020-04-22 14:16:32.151707', 1),
(5, 'cc', '2020-04-22 14:16:32.151707', 1),
(6, 'nice work', '2020-04-22 14:16:32.151707', 1),
(7, 'yes bro', '2020-04-22 14:16:32.151707', 1),
(8, 'yes bro', '2020-04-22 14:16:32.151707', 1),
(9, 'zzzzz', '2020-04-22 14:16:32.151707', 1),
(10, 'nice', '2020-04-22 14:16:32.151707', 1),
(11, 'poop', '2020-04-22 14:16:32.151707', 1),
(12, 'aaaaa', '2020-04-22 14:16:32.151707', 1),
(13, 'ccs', '2020-04-22 14:16:32.151707', 1),
(14, 'aa', '2020-04-22 14:16:32.151707', 1),
(15, 'salam cv?', '2020-04-22 14:16:32.151707', 1),
(16, 'bien', '2020-04-22 14:16:32.151707', 1),
(17, 'kidayr hani mhani 9ader tghani', '2020-04-22 14:16:32.151707', 1),
(18, 'oui hmd et toi?', '2020-04-22 14:16:32.151707', 1),
(19, 'mzyan a sat', '2020-04-22 14:16:32.151707', 1),
(20, 'fen a akhi', '2020-04-22 14:16:32.151707', 1),
(21, 'fen', '2020-04-22 14:16:32.151707', 1),
(22, 'ta fen a 3chiri', '2020-04-22 14:16:32.151707', 1),
(23, 'hmd a sat', '2020-04-22 14:16:32.151707', 1),
(24, 'nice bro', '2020-04-22 14:16:32.151707', 1),
(25, 'cc', '2020-04-22 14:16:32.151707', 1),
(26, 'nice work', '2020-04-22 14:16:32.151707', 1),
(27, 'zzz', '2020-04-22 14:16:32.151707', 1),
(28, 'ccc', '2020-04-22 14:16:32.151707', 1),
(29, 'yeah bro', '2020-04-22 14:16:32.151707', 1),
(30, 'fen', '2020-04-22 14:16:32.151707', 1),
(31, 'fen a akhi ach had l8bour ', '2020-04-22 14:16:32.151707', 1),
(32, 'nta li ghaber', '2020-04-22 14:16:32.151707', 1),
(33, 'hhhhh arak mssatti a haytem katdwi m3a rassek ms hanya pas de soucis 8a binatna lmhm lprojet yttla3 mzyan', '2020-04-22 14:16:32.151707', 1),
(34, 'cc', '2020-04-22 14:16:32.151707', 1),
(35, 'zz', '2020-04-22 14:16:32.151707', 1),
(36, 'hhhhh', '2020-04-22 14:16:32.151707', 1),
(37, 'cc', '2020-04-22 14:16:32.151707', 1),
(38, 'fen', '2020-04-22 14:16:32.151707', 1),
(39, 'mzyan a sat', '2020-04-22 14:16:32.151707', 1),
(40, 'hello', '2020-04-22 14:27:42.954887', 0),
(41, 'cc', '2020-04-22 14:58:52.401235', 1),
(42, 'fen', '2020-04-22 14:58:52.401235', 1),
(43, 'grgr', '2020-04-22 15:47:50.490598', 1),
(44, 'aa', '2020-04-22 15:45:34.098409', 1),
(45, 'cc', '2020-04-22 15:45:34.098409', 1),
(46, 'fen', '2020-04-22 15:45:34.098409', 1),
(47, 'cc', '2020-04-22 15:45:34.098409', 1),
(48, 'to', '2020-04-22 15:47:25.941690', 1),
(49, 'yy', '2020-04-22 15:47:31.751825', 1),
(50, 'tt', '2020-04-22 15:48:10.463802', 1),
(51, 'yy', '2020-04-22 15:47:57.907473', 0),
(52, 'yy', '2020-04-22 15:48:33.241550', 1),
(53, 'pp', '2020-04-22 15:48:45.741064', 1),
(54, 'u', '2020-04-22 15:49:03.344773', 1),
(55, 'zz', '2020-04-22 15:50:34.757144', 1),
(56, 'tt', '2020-04-22 15:50:37.319890', 1),
(57, 'hello', '2020-04-22 15:54:23.497066', 0),
(58, 'pp', '2020-04-22 15:55:11.229453', 0),
(59, 'vv', '2020-04-22 15:55:24.268474', 1),
(60, 'totto', '2020-04-22 15:55:38.278049', 1),
(61, 'fen a khona', '2020-04-22 15:58:45.858378', 1),
(62, 'ff', '2020-04-22 15:58:45.858378', 1),
(63, 'vvv', '2020-04-22 15:58:45.858378', 1),
(64, 'fen', '2020-04-23 13:38:00.426669', 1),
(65, 'fen a khona', '2020-04-23 13:44:02.176613', 1),
(66, 'cc', '2020-04-23 13:44:18.423018', 1),
(67, 'tt', '2020-04-23 13:46:10.699015', 1),
(68, 'yy', '2020-04-23 13:48:51.269397', 1),
(69, 'bb', '2020-04-23 14:19:42.673704', 1),
(70, 'pp', '2020-04-23 14:19:51.847139', 1),
(71, 'a', '2020-04-23 14:23:52.058122', 1),
(72, 'yes', '2020-04-23 14:29:11.379817', 1),
(73, 'zzz', '2020-04-23 14:29:20.073809', 1),
(74, 'tt', '2020-04-23 14:29:38.537135', 1),
(75, 'cc', '2020-04-23 14:33:19.504298', 1),
(76, 'mablanch', '2020-04-23 14:33:19.504298', 1),
(77, 'hanya a sat', '2020-04-23 14:48:06.582591', 1),
(78, 'rt', '2020-04-23 14:54:30.140448', 1),
(79, 'yy', '2020-04-23 14:54:54.767999', 1),
(80, 'fen a sat', '2020-04-23 15:18:07.164204', 1),
(81, 'fen a akhi', '2020-04-23 15:18:27.165429', 1),
(82, 'fen a sat', '2020-04-23 15:26:32.094353', 1),
(83, 'fen a khona hani mhani', '2020-04-23 15:26:43.538239', 1),
(84, 'fin chadha a sat ta mn lbare7 mabenti hhh tssattit kandwi m3a rassi', '2020-04-23 15:27:23.026588', 1),
(85, 'mablanch a sat ana haytem o 7ta nta ssmitek haytem', '2020-04-26 15:46:12.380016', 1),
(86, 'cc', '2020-04-26 15:47:52.508265', 1),
(87, 'lmhm ylh thala a sat walakin matmchich', '2020-05-01 14:29:06.141801', 1),
(88, 'cc', '2020-05-01 14:31:28.661046', 1),
(89, 'pp', '2020-05-01 14:39:04.281922', 1),
(90, 'cc', '2020-05-01 14:39:09.892316', 1),
(91, 'hhhhh', '2020-05-01 14:39:17.224380', 1),
(92, 'tt', '2020-05-01 14:44:30.339190', 1),
(93, 'pp', '2020-05-01 14:45:19.945280', 1),
(94, 'n', '2020-05-01 14:45:55.454553', 1),
(95, 'cc', '2020-05-01 14:47:05.435333', 1),
(96, 'y', '2020-05-01 14:58:53.575180', 1),
(97, 'u', '2020-05-01 14:51:43.254930', 1),
(98, 'o', '2020-05-01 14:53:23.618097', 1),
(99, 'uuuu', '2020-05-01 14:53:28.888346', 1),
(100, 'aa', '2020-05-01 14:57:23.726289', 1),
(101, 'aa', '2020-05-01 14:58:45.921077', 1),
(102, 'cc', '2020-05-01 14:59:00.305363', 1),
(103, '^pp', '2020-05-01 15:00:41.968252', 1),
(104, 'y', '2020-05-01 15:01:00.366242', 1),
(105, 'ttt', '2020-05-01 15:01:08.731155', 1),
(106, 'a', '2020-05-01 15:02:28.216672', 1),
(107, 'aa', '2020-05-01 15:03:41.747544', 1),
(108, 'lol', '2020-05-01 15:03:50.543127', 1),
(109, 'yes', '2020-05-01 15:04:05.643108', 1),
(110, 'a', '2020-05-01 17:10:48.231061', 1),
(111, 'yy', '2020-05-01 17:12:21.713858', 1),
(112, 'a', '2020-05-01 17:13:51.661209', 1),
(113, 'oui a sat', '2020-05-01 17:13:59.552564', 1),
(114, 'aaaa', '2020-05-01 17:14:36.895762', 1),
(115, 'pp', '2020-05-01 17:14:41.642326', 1),
(116, 'fen a sat', '2020-05-01 17:17:20.105046', 1),
(117, 'fen a sat', '2020-05-03 16:16:39.866366', 1),
(118, 'hola', '2020-05-04 14:13:26.674519', 1),
(119, 'fen a khona', '2020-05-04 14:13:38.849764', 1),
(120, 'fen a 3chiri ach had l8bour', '2020-05-04 14:14:09.314603', 1),
(121, 'oo', '2020-05-04 14:14:35.176692', 1),
(122, 'hello', '2020-05-04 16:00:36.225505', 1),
(123, 'holla bl esâgnole', '2020-05-04 16:00:36.225505', 1),
(124, 'cc', '2020-05-04 16:00:36.225505', 1),
(125, 'tt', '2020-05-04 16:00:36.225505', 1),
(126, 'zadzfzefze', '2020-05-04 16:00:36.225505', 1),
(127, 'ccccc', '2020-05-04 16:01:11.572574', 1),
(128, 'hhhhhh', '2020-05-04 16:01:58.477440', 1),
(129, 'cccccc', '2020-05-04 16:03:42.751550', 1),
(130, 'fen a 3chiri ha,i mhani', '2020-05-04 16:04:00.873158', 1),
(131, 'fen a khona', '2020-05-04 16:05:00.246509', 1),
(132, 'hani a khoya', '2020-05-04 16:05:11.419379', 1),
(133, 'chokran bro rak top', '2020-05-04 16:05:22.831945', 1),
(134, 'hhhhh nice a sat', '2020-05-04 16:05:34.540153', 1),
(135, 'fen a khona', '2020-05-04 16:12:14.748561', 1),
(136, 'hola mi hermano', '2020-05-04 16:12:36.566082', 1),
(137, 'ccccc', '2020-05-04 16:12:45.683645', 1),
(138, 'mablanch', '2020-05-04 16:13:01.107791', 1),
(141, 'hola mi hermano', '2020-05-04 16:21:57.322000', 1);

-- --------------------------------------------------------

--
-- Structure de la table `réglementation`
--

CREATE TABLE `réglementation` (
  `N° Article` int(11) NOT NULL,
  `Titre` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Affecter à` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `réglementation`
--

INSERT INTO `réglementation` (`N° Article`, `Titre`, `Description`, `Affecter à`, `id`) VALUES
(2, 'utilisation interdits', 'Les établissements industriels et les dépôts ;\r\nLes constructions à caractère provisoire, les campings et les caravanings ;\r\nL’ouverture et l’exploitation de carrières ;\r\nToute activité risquant de poser un problème de sécurité et notamment si elle présente des risques : d’incendie, d’explosion et d’émission de fumées polluantes ;\r\nToute activité risquant de créer des désagréments pour la population, notamment en termes de bruits, de poussières, de vibrations aériennes ou transmises par le sol et de fumées (vapeurs ou odeurs...) ;\r\nLe lotissement dans le secteur SB4\r\n', 'B', 1),
(3, 'utilisation du sol', 'Dans la secteur B2 COS Maximal / Lot et libre, CES Maximal / Lot Cour de 16m², Surface Minimale du lot et 80m2, Largeur Minimale du lot et 8m ;\r\nDans la secteur B3 COS Maximal / Lot et libre, CES Maximal / Lot Cour de 36m², Surface Minimale du lot et 150m2, Largeur Minimale du lot et 10m ;\r\nDans la secteur B4 COS Maximal / Lot et libre, CES Maximal / Lot     libre,SurfaceMinimale du lot et 240m2 , Largeur Minimale du lot et 12m ;\r\nDans les secteurs B2 et B3 si le RDC est entièrement occupé par de l’artisanat ou par de petits commerces, la surface constructible au sol peut être portée à 100 %, et les possibilités d’occupation au sol sont limitées par les règles de prospects et de hauteurs\r\n', 'B', 2),
(3, 'superficie habitable', 'Le minimum logement est  70m², Sauf pour les opérations de logements sociaux régis par des cahiers des charges spécifiques ou les opérations de recasement et de relogement à réaliser sous forme d’opérations intégrées par un opérateur public ou privé dans le cadre d’un partenariat avec l’Etat.', 'B', 3),
(4, 'Hauteurs maximales des constructions', 'Les constructions, acrotère compris de 1,20m de terrasses accessibles, \r\nne peuvent dépasser la hauteur et le nombre de niveaux suivants :\r\nPour le secteur B2:11.50m et R+2 ;\r\nPour le secteur B3:14.50m et R+3 ;\r\nPour les secteurs B4 et SB4:17.50m et R+4.\r\n', 'B2 & B3 & B4 & SB4', 4),
(4, 'les cages d’escaliers ou les machineries d’ascenseurs', 'Autorisés des d’une hauteur maximale de 2.50m, dans la mesure où les trois articles suivants sont respectés', 'B2 & B3 & B4 & SB4', 5),
(5, 'Implantations et hauteurs déconstructions par rapport aux voies et emprises publiques', '  La hauteur sur voie des constructions est inférieure ou égale à la distance les séparant de l’alignement opposé : H < L.\r\nToutefois, dans les secteurs B3, B4 et SB4, la hauteur sur voie des constructions peut être égale ou inférieure à la distance les séparant de l\'alignement opposé, multipliée par 1.2 : H≤ L x 1.2, si la largeur de la voie est inférieure ou égale à 15m pour les secteurs B4 et SB4 et 12m pour le secteur B3\r\n', 'B3 & B4 & SB4', 6),
(5, 'construire des étages', 'la hauteur maximale autorisée sur voie, des étages en retrait peuvent être construits s\'ils s\'inscrivent dans un angle à 45°, attaché au sommet de cette hauteur, sans toutefois que la construction dépasse la hauteur maximale autorisée pour le secteur. Les retraits admis sont limités à 1 étage dans les secteurs B3, B4 et SB4', 'B3 & B4 & SB4', 7),
(5, '      Voies autorisées ', 'En face d\'un débouché de voie, la hauteur est calculée en considérant l\'alignement fictif, joignant les deux angles de cette voie.\r\nL’exigence d’implantation à l’alignement ne s’applique pas aux constructions et installations nécessaires aux services publics\r\n', 'B3 & B4 & SB4', 8),
(6, 'Implantation des constructions par rapport aux limites séparatives ou mitoyennes', 'Pour les secteurs B4 et SB4 dans une bande de 15m de profondeur,\r\n mesurée à partir de l’alignement sur voie, les constructions nouvelles sont implantées d’une limite séparative à l’autre.\r\nla distance entre tous points des constructions et les limites latérales ou de fond de parcelle sera égale ou supérieure à la moitié de leur hauteur prise à partir du niveau de soubassement : L > ½ H avec un minimum de 6m.\r\n', 'B4 & SB4', 9),
(6, 'les dimensions minimales', '16m² de superficie et 4m de largeur pour le secteur B2\r\n36m² de superficie et 6m de largeur pour le secteur B3.\r\n', 'B2 & B3', 10),
(7, 'Implantation des constructions sur une même propriété', 'La distance séparant les façades en vis-à-vis des constructions édifiées sur \r\nla même propriété, ne peut être inférieure ou égale à la hauteur du bâtiment le plus élevé:L≥H..\r\n', 'B', 11),
(7, 'pignon aveugle ou de façades', 'au faibles longueurs ne comportant pas de baies éclairant des pièces principales, cette distance sera supérieure ou égale à la moitié de la hauteur du bâtiment le plus élevé : L ≥½ H avec un minimum de 6m..', 'B', 12),
(8, 'Stationnement des véhicules', 'Le stationnement des véhicules sera assuré sur la parcelle privative, en dehors des emprises publiques (voies et parkings publics…), dans les conditions suivantes :\r\n-Habitat 	:une place par logement ;\r\n-Bureaux: une place pour 80m2 de surface construite hors-œuvre ;\r\n-Commerces: une place pour 50m2 de surface construite hors-œuvre ;\r\n-Hôtels :une place pour cinq chambres et une place pour 20m2 de salle de restauration\r\nPour le secteur B2 :\r\n-Une place de stationnement par lot de lotissement ;\r\n-Une place pour 100m² de surface hors œuvre d’activité commerciale ou artisanale.\r\n', 'B', 13),
(9, 'Plantations et équipements de proximité ', 'Pour les secteurs B2, B3 et B4 :\r\n5% de surface lotie nette réservé aux équipements de proximité ;\r\n5% de surface lotie nette réservé aux espaces verts et aux parkings qui ne doivent pas résulter des chutes d’espaces. Ils doivent être groupés et exploitables.\r\n', 'B2 &B3 & B4', 14),
(9, 'Plantations et équipements de proximité ', 'Pour le secteur SB4 :	\r\n10% de la surface lotie nette réservé aux équipements de proximité ;	\r\n10% de la surface lotie nette réservé aux espaces verts et aux parkings qui ne doivent pas résulter des chutes d’espaces. Ils doivent être groupés et exploitables.. \r\n', 'SB4', 15),
(9, 'Plantations et équipements de proximité ', 'Dans la zone B, les surfaces à l’intérieur des parcelles, libres de constructions ou d’aires de stationnement doivent être, dans la limite de 50% minimum, engazonnées et/ou plantées d’arbustes et d’un arbre à haute tige au minimum, pour 100m² de surface plantée, le reste sera traité en chemins piétons et aires de jeux ou sport.', 'B', 16),
(10, 'Servitudes architecturales', 'Dans la zone B, les bandes constructibles ne peuvent en aucun cas dépasser une longueur de 60m. Ces linéaires de 60 m doivent être séparés par des voies piétonnes de 6m minimum ou voies carrossables de 12m d’emprise minimum', 'B', 17),
(10, 'des balcons, des loggias ou des terrasses', 'au niveau des étages supérieurs permettant d’offrir une volumétrie diversifiée de façon à éviter la monotonie des façades et de contribuer ainsi par les vides et les pleins à leur embellissement..', 'B', 18),
(6, 'Sites et monuments', 'La conservation des monuments historiques et des sites classés, sera soumise pour chaque cas aux directives du Ministère des Affaires Culturelles.', 'RA', 19),
(7, 'Espaces verts publics', 'Réservés à des aménagements en espaces verts. Toute construction est interdite à l’exception des locaux techniques nécessaires pour assurer leur entretien', 'RA', 20),
(7, 'Places publiques', 'A l’exception des constructions d’intérêt général de faible importance en structures et matériaux légers, les places demeurent inconstructibles.', 'RA', 21),
(7, 'Parkings souterrains', 'Les parkings entièrement souterrains sont autorisés. Les installations hors terre nécessaires à leurs accès, à l’aération et à l’éclairage naturels ou artificiels doivent être limitées tant par leur nombre que par leurs dimensions. Ces constructions ainsi que les installations nécessaires à leur utilisation ne doivent pas altérer le caractère de ces espaces', 'RA', 22),
(8, 'Terrains des équipements publics', 'L’occupation des terrains réservé aux équipements publique pour toute autre destination est interdite, à l’exception des affectations provisoires autorisées.', 'RA', 23),
(8, 'Règles de hauteur pour équipements publics', 'Les règles de hauteur et d’implantation qui sont fixées pour le secteur où les équipements sont situés, s’appliquent à ceux-ci, mais lorsque des nécessités propres au fonctionnement le justifient, les règles de hauteur peuvent ne pas être appliquées', 'RA', 24),
(8, 'Déplacement équipements publics', 'Le déplacement des parcelles réservées aux équipements est permis à l’intérieur des îlots où ils se situent à condition de conserver leurs superficies et leurs nombres, de respecter leurs affectations initiales et de ne pas porter atteinte à leur accessibilité.', 'RA', 25),
(9, 'Voie d’accès', 'Un terrain doit avoir accès à une voie publique ou privée, soit directement, soit par l\'intermédiaire d\'un passage aménagé pour cette fin.', 'RA', 26),
(9, 'Condition de la voie d’accès', 'Le permis de construire peut-être refusé sur un terrain qui ne serait pas desservi par une voie publique ou privée répondant aux conditions d’hygiène, de sécurité et de circulation', 'RA', 27),
(9, 'Permis de construire', 'Le permis de construire peut-être refusé si les accès présentent un risque pour la sécurité des usagers des voies publiques ou des personnes utilisant ces accès.', 'RA', 28),
(9, 'Accès aux voies publiques', 'Le nombre des accès sur les voies publiques peut être limité dans l\'intérêt de la sécurité, les constructions ne peuvent être autorisées que sous réserve que l\'accès soit établi sur la voie où la gêne pour la circulation sera la moindre', 'RA', 29),
(9, 'Personnes à mobilité réduite', 'Les constructions neuves ou le réaménagement de constructions existantes doivent être aménagées de manière à permettre l\'accès des bâtiments aux personnes à mobilité réduite.', 'B et D', 30),
(9, 'Accès des véhicules', 'Les accès des véhicules doivent être localisés et aménagés :\r\nLa topographie et la morphologie des lieux ;\r\nLa garantie de la sécurité des personnes ;\r\nLe type de trafic généré par la construction ;\r\nLes conditions d’entrée et de sortie des véhicules sur le terrain ;\r\n', 'RA', 31),
(9, 'L’emprise des voies', 'L’emprise minimale des voies sera de 12m sauf pour des considérations de topographie, de constructions autorisées existantes ou autres obstacles.', 'RA', 32),
(9, 'Le rayon des raquettes', 'Le rayon des raquettes ne devra pas être inférieur à 10m.', 'RA', 33),
(9, 'Longueur des voies en impasse', 'La longueur des voies en impasse dans les zones d\'habitat ne devra pas dépasser 30m, avec obligation d’aménagement d’une raquette de contournement des véhicules de secours.', 'RA', 34),
(9, 'Largeur des pistes cyclables', 'Les pistes cyclables urbaines font partie intégrante de l\'emprise des voies publiques. Leur largeur minimale est de 1.5m pour une voie cyclable unidirectionnelle et 2.5m pour une voie cyclable bidirectionnelle.', 'RA', 35),
(10, 'L’eau potable', 'Un terrain doit être raccordé au réseau de distribution d’eau potable et ce, conformément aux règles et normes techniques en vigueur.', 'B et D', 36),
(10, 'L’Energie', 'Un terrain doit être raccordé au réseau de distribution d’électricité et ce, conformément aux règles et normes techniques en vigueur.', 'B et D', 37),
(10, 'Assainissement', 'Un terrain doit être raccordé au réseau d’assainissement communal s’il existe, par un branchement particulier exécuté. Le cas échéant, un dispositif d’assainissement autonome devra être réalisé également.', 'B et D', 38),
(10, 'Collecte des déchets', 'Les constructions nouvelles d’immeubles, d’habitat collectif, d’ensembles résidentiels touristiques et industrielles doivent comporter des locaux de stockage des déchets suffisamment grands et dimensionnés de manière à recevoir et permettre de manipuler sans difficultés tous les récipients nécessaires à la collecte des déchets.', 'B et D', 39),
(2, 'Types d’occupation ou d’utilisations interdites', 'L’habitat au rez-de-chaussée dans le secteur\r\nLes dépôts supérieurs à 500m² pour le secteur IN2 et 150m² pour le secteur IN3 ;\r\n-L’ouverture et l’exploitation de carrières ; \r\n-Les constructions à caractère provisoire, les campings et les caravanings ;\r\n-L’ouverture et l’exploitation de carrières ;\r\nL’hôtellerie, à l’exception dans le secteur IN2\r\nLes logements dans le secteur IN4\r\nToutefois, dans le secteur IN2, la réalisation d’un logement au maximum pour la surveillance, la gestion et la direction, est admise. Ces logements doivent avoir un isolement par rapport aux bâtiments abritant l\'activité industrielle.\r\n', 'IN', 40),
(2, 'Sécurité', 'Aucune activité ne sera admise en secteur urbain si elle pose un problème de sécurité et notamment si elle présente des risques : d’incendie, d’explosion et d’émission de fumées polluantes', 'IN', 41),
(3, 'Hauteur maximale des constructions', 'Les constructions ne peuvent dépasser la hauteur de 14m\r\nLes constructions ne peuvent dépasser la hauteur de8m et R+1\r\n', 'IN', 42),
(4, 'Possibilité maximale d’occupation du sol', 'Surface minimale : 1000m²\r\nLargeur minimale : 30m\r\nHauteur maximale : 14m\r\nSurface minimale : 500m²\r\nLargeur minimale : 15m\r\nHauteur maximale : 14m\r\nSurface minimale : 120m²\r\nLargeur minimale : 8m\r\nHauteur maximale : 8m (R+1)\r\n', 'IN', 43),
(4, 'Possibilité maximale d’occupation du sol', 'des hauteurs ponctuelles plus importantes sont admises, si elles sont nécessitées par des impératifs techniques', 'IN', 44),
(5, 'Implantation par rapport aux voies et emprises publiques', 'les constructions doivent observer un recul minimal de 5m, par rapport à l’alignement sur voie\r\nles constructions sont implantées à l’alignement sur voie, sauf indication contraire portée au plan d\'aménagement ou au plan de lotissement autorisé.\r\n', 'IN', 45),
(6, 'Implantation par rapport aux limites séparatives', 'la distance entre tous points de ces constructions et les limites séparatives doit être égale ou supérieure à la moitié de leur hauteur : L  1/2 H avec un minimum de 5m.\r\nToutefois, la construction sur limites séparatives peut être autorisée, sous réserve que les constructions soient réalisées obligatoirement avec des murs coupe-feu.\r\nsauf indication contraire portée au plan d\'aménagement ou au plan de lotissement autorisé, les constructions sont implantées sur les limites latérales. Elles peuvent également être implantées sur la limite de fond de parcelle pour le rez-de-chaussée avec un recul minimum de 4m l\'étage à usage d\'habitation\r\n', 'IN', 46),
(7, 'Implantation des constructions sur une même propriété', 'les constructions doivent observer une distance de L ≥ H, avec H = la hauteur de la construction la plus élevée avec un minimum de 8m\r\nles constructions ne peuvent être séparées par une distance inférieure à la hauteur du bâtiment le plus élevé : L ≥ H avec un minimum de 4m\r\n', 'IN', 47),
(8, 'Stationnement', 'le stationnement des véhicules doit être assuré sur la parcelle privative à raison d’une place pour 100m² de surface de plancher hors œuvre.\r\nle stationnement est prévu sur la parcelle à raison d’une place par lot.  Dans le cas de lotissement si les dimensions trop faibles des parcelles ne permettent pas de répondre à cette condition, il est admis que les aires de stationnement soient regroupées hors des parcelles et aménagées dans le cadre du plan lotissement.\r\n', 'IN', 48),
(9, 'Plantations', 'Les recules sur voies doivent être plantés.\r\nLes aires de stationnement doivent être plantées à raison d’un arbre haute tige pour deux places.\r\n', 'IN', 49),
(10, 'Voirie', 'Toutes les voies de desserte des lots industriels auront une largeur minimale de 15m. Aucune voie en impasse n’est autorisée.', 'IN', 50),
(11, 'Servitudes architecturales', 'Il y a lieu de prévoir des balcons, des loggias ou des terrasses au niveau des étages supérieurs permettant d’offrir une volumétrie diversifiée de façon à éviter la monotonie des façades et de contribuer ainsi par les vides et les pleins à leur embellissement.', 'IN', 51),
(2, 'Type d’occupation ou d’utilisations interdites', 'Les établissements industriels de 1ère, 2ème et 3ème catégorie ;\r\nLes dépôts non liés à l’activité de la zone ;\r\nLes lotissements destinés à l’habitat individuel ou collectif ;\r\nLes constructions à caractère provisoire ;\r\nL’ouverture et l’exploitation de carrières ;\r\nL’accès aux terrasses.\r\n', 'INS', 52),
(2, 'Sécurité', ' Aucune activité ne sera admise en secteur urbain si elle pose un problème de sécurité, de salubrité ou d’hygiène et notamment si elle présente des risques : d’incendie, d’explosion, d’émission et de fumées polluantes.', 'INS', 53),
(2, 'Pollution', 'Pollution : Aucune activité ne sera admise si elle crée des désagréments pour la population alentours, et notamment en termes de bruit, de poussière, de vibrations aériennes ou transmises par le sol et de fumées (vapeurs ou odeurs).', 'INS', 54),
(3, 'Possibilités maximales d’occupation au sol', 'Surface minimale : 1000m²\r\nLargeur minimale : 30m\r\nHauteur maximale : 14m\r\n', 'INS', 55),
(4, 'Hauteur maximale des constructions', 'La hauteur plafonnée à 14m ; les parapets de terrasses et les acrotères sont inclus dans les hauteurs plafond. Toutefois certains éléments tels que les souches des conduits, les superstructures, (à l’exception des chaufferies et des locaux de conditionnement d’air), peuvent dépasser la hauteur sous plafond à condition que ces éléments soient implantés au moins à 3m en arrière de la verticale du gabarit en bordure de voie', 'INS', 56),
(5, 'Implantation des constructions par rapport aux voies et emprises publiques', 'Les constructions doivent observer, par rapport à l’alignement sur voie, un recul de 10m au minimum. L’espace ainsi dégagé peut servir éventuellement d’aire de stationnement.', 'INS', 57),
(6, 'Implantation des constructions par rapport aux limites séparatives ou mitoyennes', 'la distance entre tous points de constructions et les limites séparatives, doit être égale ou supérieure à 5m.', 'INS', 58),
(7, 'Implantation des constructions sur une même propriété', 'Dans cette zone, les constructions doivent observer une distance inférieure ou égale à la hauteur du bâtiment le plus élevé : L ≤ H, avec un minimum de 5m', 'INS', 59),
(8, 'Stationnement des véhicules', 'Le stationnement des véhicules doit être assuré sur la parcelle, à raison d’une place pour 100m² de surface de planchers.\r\nLes places de stationnement pour les clients devraient être prévues en nombre suffisant en dehors de l’emprise de la voie.\r\nAires de stationnement, de dépose et de livraison :\r\n-Le stationnement et les emplacements nécessaires pour toutes les opérations usuelles de chargement, déchargement et manutention, doivent être assurées en dehors des emprises publiques, sur la parcelle privative, en sous-sol ou au sol à l’intérieur des volumes créés ;\r\n-La côte de seuil des trémies d’accès aux parkings en sous-sol doit être prise à l’alignement de la façade sur rue. Aucun dépassement des rampes n’est autorisé sur l’espace public ;\r\n-Les aires de livraison, ainsi que leurs accès, doivent présenter des caractéristiques adaptées aux besoins.\r\n', 'INS', 60),
(9, 'Plantations', 'Sont prévus plantés :\r\n-Les reculs sur voies ;\r\n-Les aires de stationnement doivent être plantées à raison d’un arbre haute tige pour 2 places.\r\nLes caractéristiques des espaces libres : Ils doivent bénéficier d’un traitement de qualité pouvant associer aux plantations d\'arbres, des surfaces engazonnées et des revêtements minéraux soignés dans leur aspect et dans le choix des matériaux (circulations de desserte, aires d\'évolution, cheminements piétons, etc.).\r\n', 'INS', 61),
(10, 'Servitudes architecturales', 'Il y a lieu de prévoir des balcons, des loggias ou des terrasses au niveau des étages supérieurs permettant d’offrir une volumétrie diversifiée de façon à éviter la monotonie des façades et de contribuer ainsi par les vides et les pleins à leur embellissement.', 'INS', 62),
(2, 'Types d’occupation interdits', 'Les sous-sols ;\r\nLes constructions à caractère provisoire, les campings et les caravanings ;\r\nL’ouverture et l’exploitation des carrières ;\r\nLes logements. Toutefois, la réalisation de deux logements maximum pour la surveillance, la gestion et la direction et admise.   \r\n', 'INL', 63),
(3, 'Hauteur maximale des constructions', 'Les constructions ne peuvent pas dépasser 12m sauf pour des cas exceptionnels justifiés par des contraintes techniques\r\nAu-dessus de cette hauteur sont autorisés :\r\nLes parapets de terrasses : 1.20m ;\r\nLes cages d’escaliers et d’ascenseurs : 2.50m ;\r\n', 'INL', 64),
(4, 'Possibilités maximales d’occupation du sol', 'Surface minimale : 2000m\r\nLargeur minimale : 40m\r\nHauteur maximale : 12m\r\nSous-sol : Interdit\r\n', 'INL', 65),
(5, 'Implantation des constructions', 'Les constructions doivent observer les recules suivants :\r\n-	10m sur la façade principale (intégré dans le traitement paysager) ;\r\n-	5m sur les trois autres côtés (fond de parcelle et mitoyens) ;\r\n-	6m pour les constructions implantées dans la même propriété.\r\n', 'INL', 66),
(6, 'Stationnement', 'Le stationnement des véhicules est assuré dans le lot et intégré dans le traitement paysager et ce, à raison de :\r\n-	Une place pour 100m² de surface planché hors œuvre ;\r\n-	Une place pour 50m² de bureaux ;\r\n-	Une place pour 5 chambres pour les hôtels et les unités d’hébergement implantés au niveau de la zone INL.\r\n\r\n', 'INL', 67),
(7, 'Voirie', 'Toutes les voies de desserte des lots doivent avoir une emprise minimale de 15m.\r\nAucune voie en impasse et aucune raquette ne rependant pas aux normes et à la règlementation en vigueur ne seront autorisées.\r\n', 'INL', 68),
(8, 'Espaces libres et plantations', 'Les servitudes de reculs, les parties non construites et les espaces libres qui ne sont pas nécessaires aux voies de circulation et aux aires de stationnement, de manœuvre et de stockage devront être plantés avec des arbres à tiges, arbustes boisements et parterres de plantes fleuries.', 'INL', 69),
(9, 'Servitudes d’architecture', '•	Aspect architectural :\r\nL’aspect architectural des constructions doit être signé et les matériaux de remplissage utilisés (tels que briques creuses, parpaings, etc.) ne doivent pas rester apparents sur les parements des murs de toutes les façades.\r\n•	Murs de clôture :\r\nLes murs de clôtures sur alignement doivent avoir au maximum une hauteur de soubassement de 0.80m. Ils peuvent être surmontés d’un élément métallique à claire voie de 1.20m de haut doublé d’une haie vive.\r\nLes autres parties des clôtures latérales et la clôture arrière peuvent être constituées de la même manière ou en maçonnerie mais traités avec les mêmes matériaux que les constructions avoisinantes sans pour autant dépasser une hauteur maximale de 2.20m\r\n•	L’hôtellerie :\r\nLes lots ou les parties de lots destinés à des structures d’hébergement et d’animation sont de surfaces conséquentes pour pouvoir recevoir des programmes variés.\r\nLe site de la zone INL à proximité des berges de l’oued Ykem impose une volumétrie adaptée à composante végétale dominante et un traitement architectural adapté.\r\nLes lots de la zone INL qui recevront uniquement de l’hôtellerie bénéficieront de la même réglementation et des mêmes dispositions réglementaires à l’exception de :\r\n-	Sous-sol permis pour y prévoir les locaux techniques et le stationnement.\r\n-	COS = 0.8 (avec une volumétrie adaptée à l’hôtellerie).\r\n-	Terrasse inaccessible.\r\n', 'INL', 70),
(1, 'definition de la zone D', 'la zone d est une zone residentielle et / ou d\'hébergement de vacances destinée à des logements individuels \r\nla zone D comprend un seul secteur DS1 avec deux possibilitées d\'occupation:\r\n-la realisation de lottisements de villas\r\n-realisation de résidences fermées de villas ou de charlets en villégiature', 'D et DS1', 71),
(2, 'types d\'occupation ou d\'utilisation interdits', 'sont interdits dans cette zone :\r\n- les établissements industriels et les dépots aussi les constructions à caractére provisoire , les campings et les caravaings aussi l\'ouverture et l\'exploitation de carriéres et les commerces incorporés à l\'habitatet le commerce incorporé à l\'habitat\r\n', 'D', 72),
(3, 'possibilités maximales d\'utilisation du sol', 'pour la bande 200 m^2 le cesmax/lot est 50% et le cosmax/lot est libre la largeur minimale du lot est 10 et pour la hauteur max est R+1 \r\n-coefficient d\'occupation du sol (cos)\r\n-le coefficient d\'emprise au sol (ces)', 'D', 73),
(4, 'hauteur maximales des constructions', 'les constructions, acotére compris, ne peuvent dépasser la hauteur de 8.50m et(R+1) les terrasses ne sont pas accessibles\r\nle rez-de-chaussées des villas ne peut etre surélevé de plus de 1m par rapport au niveau de la parcelle', 'D', 74),
(5, 'implantation des constructions par rapport aux voies et emprises publiques', 'toutes les constructions doivent observer un recul minimum de 5m par rapport à l\'alligement sur voie', 'D', 75),
(6, 'implantation des constructions par rapport aux limites séparatives ou mitoyennes', 'les constructions doivent s\'éloigner d\'une distance minimale de 4m par rapport aux limites séparatives ', 'D', 76),
(7, 'implantation des constructions sur une meme propriété', 'dans la zone D la distance séparant les facades en vis-à-vis des constructions édifiées sur la meme propriété sera égale ou supérieure à la hauteur du batiment le plus elevé avec un min de 6m\r\ndans le cas de pignon aveugle ou de facades en vis-à-vis partiel sur de faibles longeurs ne comptant pas de baies éclairent des piéces principales, cette distance sera superieure ou égale la moitié de la hauteur du batiment le plus élevé avec un minimum de 4m', 'D', 77),
(8, 'stationnement des véhicules', 'Le stationnement des véhicules doit s’effectuer sur la parcelle privative, en dehors des emprises publiques, à raison de :\r\n-	Une place par unité résidentielle (lot ou chalet)\r\n-	Une place pour 50m² de surface construite hors-œuvre pour les équipements, les services et les commerces ;\r\n-	Une place pour cinq chambres d’hôtel et une place pour 20m² de salle de restauration.\r\nDans le cadre de lotissement, il y a lieu de prévoir également un parking pour les visiteurs ; une place de stationnement pour 5 villas.\r\n', 'D et DS1', 78),
(9, 'PLANTATIONS', 'Doivent être plantés avec engazonnement, arbustes et un arbre haute tige au minimum pour 100m² de surface plantée :\r\n-	Les reculs sur voies ;\r\n-	Les surfaces de parcelles privatives, non occupées par des constructions, des aires de stationnement, des terrasses, etc.\r\nLes aires de stationnement des équipements commerciaux ou hôteliers doivent être plantées, à raison d’un arbre haute tige pour 2 places.\r\n', 'D', 79),
(10, 'Servitudes architecturales', 'Il ne peut pas être prévu plus de 6 unités mitoyennes en continu de villas ou de chalets.\r\nLes clôtures sur voies seront constituées par des murets d’une hauteur de 1 m maximum, ils peuvent être surmontés d’un élément métallique ou en bois à claire–voie de 0.5 m maximum. La hauteur totale ne dépassera pas 1.5 m.\r\nLes clôtures sur les limites séparatives peuvent être légères mais intégrées dans le paysage, avec une hauteur maximum de 2 m.\r\nIl y a lieu de prévoir des balcons, des loggias ou des terrasses au niveau des étages supérieurs permettant d’offrir une volumétrie diversifiée de façon à éviter la monotonie des façades et de contribuer ainsi par les vides et les pleins à leur embellissement\r\n', 'D', 80),
(11, 'Gestion des espaces communs', 'A l’intérieur des résidences fermées, il est interdit de procéder à la clôture des villas, tous les espaces à l’intérieur de la résidence doivent rester dans l’indivision ouverts et communicants.\r\nSeules les masses construites des villas ou chalets et leurs dépendances sont considérées comme partie divises.\r\nIl sera prévu des équipements communs dans l’indivision, tels que loges de gardien, salle polyvalente, locaux techniques, pour une surface hors CES n’excédant pas 300m² hors œuvre ainsi que piscine, cours de tennis parc de jeux à l’usage exclusif des résidents.\r\nAucun équipement à caractère commercial et de service n’est autorisé à l’intérieur des ilots. Il sera prévu l’ensemble des équipements nécessaires à la sécurité des résidents notamment en ce qui concerne l’éclairage, les bornes de sécurité d’incendie, etc.\r\n\r\n', 'D', 81);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `etat` int(100) NOT NULL DEFAULT 0,
  `datetat` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `photo` varchar(255) NOT NULL DEFAULT './img/unknown.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `prenom`, `mail`, `password`, `date`, `etat`, `datetat`, `photo`) VALUES
(1, 'charraj', 'haytem', 'mouadcharraj@gmail.com', 'asihmha', '2020-05-04 16:19:35.161038', 1, '2020-05-04 18:19:35.000000', './img/16110716103.jpg'),
(2, 'charrajovic', 'haytem', 'hcharraj@gmail.com', 'asihmha', '2020-05-04 16:33:30.960030', 1, '2020-05-04 18:33:30.000000', './img/25158902588.jpg'),
(3, 'nnjnj', 'aajkna', 'aaa@gmail.com', '123123', '2020-05-03 15:53:22.146396', 1, '2020-05-03 17:53:22.000000', './img/unknown.png'),
(4, 'bchaiker', 'amine', 'bchaikera@gmail.com', 'asihmha', '2020-05-04 16:33:26.164913', 1, '2020-05-04 18:33:26.000000', './img/41097293656.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `usermsg`
--

CREATE TABLE `usermsg` (
  `id` int(100) NOT NULL,
  `idu` int(100) NOT NULL,
  `idr` int(100) NOT NULL,
  `idm` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `usermsg`
--

INSERT INTO `usermsg` (`id`, `idu`, `idr`, `idm`) VALUES
(1, 1, 2, 1),
(2, 2, 1, 2),
(3, 1, 2, 3),
(4, 1, 2, 4),
(5, 2, 1, 5),
(6, 2, 1, 6),
(7, 1, 2, 7),
(8, 1, 2, 8),
(9, 1, 2, 9),
(10, 1, 2, 10),
(11, 1, 2, 11),
(12, 1, 2, 12),
(13, 1, 2, 13),
(14, 1, 2, 14),
(15, 1, 2, 15),
(16, 1, 2, 16),
(17, 1, 2, 17),
(18, 2, 1, 18),
(19, 2, 1, 19),
(20, 2, 3, 20),
(21, 1, 2, 21),
(22, 2, 1, 22),
(23, 1, 2, 23),
(24, 1, 2, 24),
(25, 1, 2, 25),
(26, 1, 2, 26),
(27, 1, 2, 27),
(28, 1, 2, 28),
(29, 1, 2, 29),
(30, 1, 2, 30),
(31, 2, 1, 31),
(32, 1, 2, 32),
(33, 1, 2, 33),
(34, 1, 2, 34),
(35, 1, 2, 35),
(36, 2, 1, 36),
(37, 1, 2, 37),
(38, 2, 1, 38),
(39, 1, 2, 39),
(40, 2, 3, 40),
(41, 2, 1, 41),
(42, 2, 1, 42),
(43, 3, 1, 43),
(44, 2, 1, 44),
(45, 2, 1, 45),
(46, 2, 1, 46),
(47, 2, 1, 47),
(48, 2, 1, 48),
(49, 1, 2, 49),
(50, 1, 2, 50),
(51, 1, 3, 51),
(52, 2, 1, 52),
(53, 1, 2, 53),
(54, 2, 1, 54),
(55, 2, 1, 55),
(56, 1, 2, 56),
(57, 1, 3, 57),
(58, 1, 3, 58),
(59, 2, 1, 59),
(60, 2, 1, 60),
(61, 2, 1, 61),
(62, 2, 1, 62),
(63, 2, 1, 63),
(64, 1, 2, 64),
(65, 2, 1, 65),
(66, 1, 2, 66),
(67, 1, 2, 67),
(68, 2, 1, 68),
(69, 2, 1, 69),
(70, 3, 1, 70),
(71, 1, 2, 71),
(72, 2, 1, 72),
(73, 1, 2, 73),
(74, 1, 2, 74),
(75, 2, 1, 75),
(76, 2, 1, 76),
(77, 1, 2, 77),
(78, 1, 2, 78),
(79, 1, 2, 79),
(80, 2, 1, 80),
(81, 1, 2, 81),
(82, 2, 1, 82),
(83, 1, 2, 83),
(84, 1, 2, 84),
(85, 1, 2, 85),
(86, 1, 2, 86),
(87, 1, 2, 87),
(88, 1, 2, 88),
(89, 1, 2, 89),
(90, 2, 1, 90),
(91, 1, 2, 91),
(92, 1, 2, 92),
(93, 1, 2, 93),
(94, 1, 2, 94),
(95, 1, 2, 95),
(96, 2, 1, 96),
(97, 1, 2, 97),
(98, 1, 2, 98),
(99, 1, 2, 99),
(100, 1, 2, 100),
(101, 1, 2, 101),
(102, 1, 2, 102),
(103, 1, 2, 103),
(104, 1, 2, 104),
(105, 1, 2, 105),
(106, 1, 2, 106),
(107, 1, 2, 107),
(108, 2, 1, 108),
(109, 1, 2, 109),
(110, 1, 2, 110),
(111, 1, 2, 111),
(112, 1, 2, 112),
(113, 2, 1, 113),
(114, 1, 2, 114),
(115, 2, 1, 115),
(116, 1, 2, 116),
(117, 4, 1, 117),
(118, 1, 2, 118),
(119, 2, 1, 119),
(120, 1, 2, 120),
(121, 1, 2, 121),
(122, 1, 2, 122),
(123, 1, 2, 123),
(124, 1, 2, 124),
(125, 1, 2, 125),
(126, 1, 2, 126),
(127, 1, 2, 127),
(128, 1, 2, 128),
(129, 2, 1, 129),
(130, 1, 2, 130),
(131, 1, 2, 131),
(132, 2, 1, 132),
(133, 1, 2, 133),
(134, 2, 1, 134),
(135, 1, 2, 135),
(136, 2, 1, 136),
(137, 2, 1, 137),
(138, 1, 2, 138),
(141, 2, 4, 141);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `invitations`
--
ALTER TABLE `invitations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `réglementation`
--
ALTER TABLE `réglementation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `usermsg`
--
ALTER TABLE `usermsg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `invitations`
--
ALTER TABLE `invitations`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT pour la table `réglementation`
--
ALTER TABLE `réglementation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `usermsg`
--
ALTER TABLE `usermsg`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
