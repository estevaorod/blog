var seq = require('../config/database');
var PostInstance = require('../post/post');
var Sequelize = require('sequelize');

var CommentModel = seq().define('comment',{
  date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
  txt: {type: Sequelize.STRING, notNull : true}
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'comment'
});

CommentModel.belongsTo(PostInstance.Post);

exports.Commnet = CommentModel;

