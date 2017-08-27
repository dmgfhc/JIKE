-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 04 月 19 日 05:15
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL,
  `status` varchar(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`, `status`) VALUES
(5, '精选', '高铁沿线的城际垃圾：政绩“乾坤大挪移”的产物', 'img/1.jpeg', '2017-04-18 00:00:00', '百度新闻', '1'),
(6, '百家', '画面太美！小米6发布会爆料：不一样的雷军', 'img/2.jpeg', '2017-04-18 00:00:00', '百度新闻', '1'),
(7, '本地', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/3.jpeg', '2017-04-18 00:00:00', '百度新闻', '1'),
(8, '精选', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(9, '精选', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(10, '精选', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(11, '精选', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(12, '精选', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(13, '精选', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(14, '图片', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(15, '娱乐', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(16, '社会', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(17, '军事', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(18, '女人', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(19, '搞笑', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1'),
(20, '互联网', '国之重器要上天!国产大飞机C919原来是这样总装的', 'img/1.jpeg', '2017-04-19 00:00:00', '百度新闻', '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
