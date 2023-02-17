// Grabs the model type from sequelize
const { Model, DataTypes } = require('sequelize');
// Grabs sequelize from connection.js
const sequelize = require('../config/connection');

// Makes Post object fit into Sequelize's Model mold
class Post extends Model { }

// Makes the columns to clarify what type of backend data makes up the User MySQL table
Post.init(
    {
        // Make column here
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post',
    }
);

module.exports = Post;