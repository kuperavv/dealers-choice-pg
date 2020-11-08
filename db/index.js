const { Client } = require('pg');

const client = new Client(
  process.env.DATABASE_URL || 'postgres://localhost/reggaeton'
);

const getArtists = async () => {
  return (await client.query('SELECT * FROM artists')).rows;
};

const getAlbums = async (id) => {
  return (await client.query('SELECT * FROM albums WHERE artist_id = $1', [id]))
    .rows;
};

const getArtist = async (id) => {
  return (await client.query('SELECT name FROM artists WHERE id = $1', [id]))
    .rows[0];
};

const syncAndSeed = async () => {
  const SQL = `
  DROP TABLE IF EXISTS albums;
  DROP TABLE IF EXISTS artists;


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

  INSERT INTO albums (artist_id,name,released,image) VALUES (2,'YHLQMDLG', 'February 29, 2020','YHLQMDLG.jpeg');
  INSERT INTO albums (artist_id,name,released,image) VALUES (2,'X 100PRE','December 24, 2018','X100PRE.jpeg');
  INSERT INTO albums (artist_id,name,released,image) VALUES (2,'Oasis','July 24, 2019','oasis.jpeg');

  INSERT INTO albums (artist_id,name,released,image) VALUES (3,'Aura','November 29, 2019','aura.jpeg');
  INSERT INTO albums (artist_id,name,released,image) VALUES (3,'Nibiru','November 29, 2019','nibiru.jpeg');
  INSERT INTO albums (artist_id,name,released,image) VALUES (3,'Enoc','September 4, 2020','enoc.png');
  `;
  await client.query(SQL);
};

module.exports = {
  client,
  getArtists,
  getAlbums,
  syncAndSeed,
  getArtist,
};
