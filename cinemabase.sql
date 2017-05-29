-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Май 29 2017 г., 15:53
-- Версия сервера: 5.6.17
-- Версия PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `cinemabase`
--

-- --------------------------------------------------------

--
-- Структура таблицы `films`
--

CREATE TABLE IF NOT EXISTS `films` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(256) COLLATE utf8_bin NOT NULL,
  `country` varchar(256) COLLATE utf8_bin NOT NULL,
  `genre` varchar(256) COLLATE utf8_bin NOT NULL,
  `author` varchar(256) COLLATE utf8_bin NOT NULL,
  `actors` varchar(256) COLLATE utf8_bin NOT NULL,
  `duration` varchar(256) COLLATE utf8_bin NOT NULL,
  `imdb` varchar(256) COLLATE utf8_bin NOT NULL,
  `preview` varchar(256) COLLATE utf8_bin NOT NULL,
  `about` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=62 ;

--
-- Дамп данных таблицы `films`
--

INSERT INTO `films` (`ID`, `title`, `country`, `genre`, `author`, `actors`, `duration`, `imdb`, `preview`, `about`) VALUES
(41, 'Зеленый слоник', 'Пидорашка', 'Сладкий хлеб', 'Пахом', 'Братишка, поехавший, полковник', '120', '666', 'cinemabase_Зелёный_слоник.jpg', 'Тонкая психологическая драма о богатом внутреннем мире главных героев'),
(47, 'Терминатор', 'США', 'Мясо', 'Спилберг', 'Ходячая кастрюля', '120', '740', 'cinemabase_1496059023669_1166024066-Terminator__1_.jpg', 'Приключения робота-еврея');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
