var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://renyo:renyo@localhost:5432/blog');

module.exports = exports = function(){
    return sequelize;
};