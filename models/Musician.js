const {DataTypes, sequelize} = require('../db');

// TODO - define the Musician model
let Musician;

Musician = sequelize.define('Musician', {
    name:DataTypes.STRING,
    instruement:DataTypes.STRING
})

module.exports = {
    Musician
};