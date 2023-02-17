// Grabs the model type from sequelize
const { Model, DataTypes } = require('sequelize');
// Grabs sequelize from connection.js
const sequelize = require('../config/connection');

// Makes Comment object fit into Sequelize's Model mold
class Comment extends Model {}

// Makes the columns to clarify what type of backend data makes up the User MySQL table
Comment.init(
    {
    // Make column here
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
);

module.exports = Comment;