CREATE TABLE `users` (
  `id` uuid PRIMARY KEY,
  `full_name` varchar(255),
  `created_at` timestamp,
  `country_code` int,
  `verified` boolean
);

CREATE TABLE `countries` (
  `code` int PRIMARY KEY,
  `name` varchar(255),
  `continent_name` varchar(255)
);

ALTER TABLE `users` ADD FOREIGN KEY (`country_code`) REFERENCES `countries` (`code`);
