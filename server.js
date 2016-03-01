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

// GET invoices
app.get('/invoices', (req, res) => {
  Models.Invoice.findAll({
      attributes: { exclude: 'CustomerId' },
      include: {
        model: Models.Customer,
        attributes: { exclude: [
          'CustomerId',
          'SupportRepId'
        ]}
      }
    })
    .then(invoices => res.send(invoices));
});

// GET customers
app.get('/customers', (req, res) => {
  Models.Customer.findAll().then(customers => res.send(customers));
});

// GET customers/id/
app.get('/customers/:id/', (req, res) => {
  Models.Customer.findOne({where: {CustomerId: req.params.id}}).then(customer => res.send(customer));
});

// GET customers/id/invoices
app.get('/customers/:id/invoices', (req, res) => {
  Models.Customer.findOne({where: {CustomerId: req.params.id}, include: Models.Invoice}).then(customer => res.send(customer));
});

// LISTEN
app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}`);
})
