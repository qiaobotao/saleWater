DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `summary` varchar(200) NOT NULL,
  `content` text,
  `dateline` bigint(20) NOT NULL,
  `image`  varchar(100),
  PRIMARY KEY (`id`)  
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `proVariety`;
CREATE TABLE `proVariety` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `remarks` varchar(200) NOT NULL,
  `ordId` int(11) DEFAULT 0,
  `dateline` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `detail` text,
  `image`  varchar(100),
  `dateline` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;