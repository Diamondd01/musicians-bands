const {DataTypes, sequelize} = require('../db');

// TODO - define the Song model
let Song;

Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER,

})
module.exports = {
    Song
};