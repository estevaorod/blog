var seq = require('../config/database');
//var CommentInstance = require('../comment/comment');

var Sequelize = require('sequelize');

var PostModel = seq().define('post',{
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
  txt: {type: Sequelize.STRING, notNull : true}
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'post'
});

exports.Post = PostModel;

