'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// get models directory, will look at index.js
const Models = require('./models/')

app.get('/', (req, res) => {
  res.send({status: 'Sucess'});
});

// promise syntax
// GET genres
app.get('/genres', (req, res) => {
  Models.Genre.findAll().then(genres => res.send(genres));
});

// GET media types
app.get('/mediatypes', (req, res) => {
  Models.MediaType.findAll().then(mediatypes => res.send(mediatypes));
});

// GET artists
app.get('/artists', (req, res) => {
  Models.Artist.findAll().then(artists => res.send(artists));
});

// GET playlists
app.get('/playlists', (req, res) => {
  Models.Playlist.findAll().then(playlists => res.send(playlists));
});

// GET albums with artist name
app.get('/albums', (req, res) => {
  Models.Album.findAll({
      attributes: ['AlbumId', 'Title'],
      include: {
        model: Models.Artist,
        attributes: ['Name']
      }
    })
    .then(albums => res.send(albums));
});

// LISTEN
app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}`);
})
