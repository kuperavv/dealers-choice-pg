const express = require('express');
const router = express.Router();
const homepage = require('./homepage');
const albumPage = require('./albums');
const { client, getArtists, getAlbums, getArtist } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const artists = await getArtists();
    res.send(homepage(artists));
  } catch (er) {
    next(er);
  }
});

router.get('/albums/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const albums = await getAlbums(id);
    console.log(albums);
    const artist = await getArtist(id);
    console.log(artist);
    res.send(albumPage(artist, albums));
  } catch (er) {
    next(er);
  }
});

module.exports = router;
