-- drop database plantillamysql;
-- create database plantillamysql;
use plantillamysql;

SELECT * from App;
SELECT * from Image;

INSERT INTO image (id, name, url) VALUES ("1",'Name', 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc');

INSERT INTO App (id, name, number) VALUES ("1",'Name', 1);

SET SQL_SAFE_UPDATES = 0; -- se desactiva el modo safe para poder hacer el delete
DELETE FROM image;

INSERT INTO image (id, name, url) VALUES ("1",'Name', 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc');
INSERT INTO image (id, name, url) VALUES ("2",'Name', "https://www.nationalgeographic.com.es/medio/2023/07/14/san-bernardo-2_00dceea7_230714151906_800x800.jpg");
INSERT INTO image (id, name, url) VALUES ("3",'Name', 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc');
INSERT INTO image (id, name, url) VALUES ("4",'Name', "https://www.nationalgeographic.com.es/medio/2023/07/14/san-bernardo-2_00dceea7_230714151906_800x800.jpg");
