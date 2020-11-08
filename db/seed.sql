DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS albums;

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  image VARCHAR
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  artist_id INTEGER REFERENCES artists(id),
  name VARCHAR(100),
  released VARCHAR(100),
  image VARCHAR
);

INSERT INTO artists(name,image) VALUES ('J Balvin','jbalvin.jpg');
INSERT INTO artists(name, image) VALUES ('Bad Bunny','badbunny.jpeg');
INSERT INTO artists(name, image) VALUES ('Ozuna','ozuna.jpeg');

INSERT INTO albums (artist_id,name,released,image) VALUES (1,'Oasis','June 28, 2019','oasis.jpeg');
INSERT INTO albums (artist_id,name,released,image) VALUES (1,'Colores','March 19, 2020','colores.jpeg');
INSERT INTO albums (artist_id,name,released,image) VALUES (1,'Vibras','May 25, 2018','vibras.png');

INSERT INTO albums (artist_id,name,released,image) VALUES (2,'YHLQMDLG', 'February 29, 2020','YHLQMDLGX.jpeg');
INSERT INTO albums (artist_id,name,released,image) VALUES (2,'X 100PRE','December 24, 2018','X100PRE.jpeg');
INSERT INTO albums (artist_id,name,released,image) VALUES (2,'Oasis','','oasis.jpeg');

INSERT INTO albums (artist_id,name,released,image) VALUES (3,'Aura','November 29, 2019','aura.jpeg');
INSERT INTO albums (artist_id,name,released,image) VALUES (3,'Nibiru','November 29, 2019','nibiru.jpeg');
INSERT INTO albums (artist_id,name,released,image) VALUES (3,'Enoc','September 4, 2020','enoc.png');
