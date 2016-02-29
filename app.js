'use strict';

const Sequelize = require('sequelize');
// does not create database for youg
const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

// model
const Frenemy = sequelize.define('frenemy', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
});

// have to use return here
sequelize.sync().then(() => {
  return Frenemy.create({
    name: 'Jane Doe',
    birthday: new Date(1980, 6, 20)
  });
}).then((frenemy) => {
  console.log(frenemy.get({
    plain: true
  }));
});

