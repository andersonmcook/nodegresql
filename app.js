'use strict';

const Sequelize = require('sequelize');
// does not create database for you
const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

// model
const Frenemy = sequelize.define('Frenemy', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE,
  friend: Sequelize.BOOLEAN
});

// diff model
const Project = sequelize.define('projects', {
  name: Sequelize.STRING
});

Project.hasMany(Frenemy, {as: 'workers'});

let jane;

// have to use return here
sequelize.sync().then(() => {
  jane = Frenemy.create({
    name: 'Jane Doe',
    birthday: new Date(1980, 6, 20),
    friend: true
  });
}).then((frenemy) => {
  // console.log(jane);
}).then(() => {
  return Project.create({
    name: 'Angular 101'
  });
}).then((project) => {
  // jane.addProject(project);
});

