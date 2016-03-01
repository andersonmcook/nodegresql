'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({status: 'Sucess'});
});

app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}`);
})
