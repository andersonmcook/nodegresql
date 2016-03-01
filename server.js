'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// get models directory, will look at index.js
const Genre = require('./models/').Genre;

app.get('/', (req, res) => {
  res.send({status: 'Sucess'});
});

// promise syntax
app.get('/genres', (req, res) => {
  Genre.findAll().then((genres) => {
    res.send(genres);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}`);
})
