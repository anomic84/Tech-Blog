// Grabs the model type from sequelize
const { Model, DataTypes } = require('sequelize');
// Grabs sequelize from connection.js
const sequelize = require('../config/connection');

// Makes Comment object fit into Sequelize's Model mold
class Comment extends Model { }

// Makes the columns to clarify what type of backend data makes up the User MySQL table
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // user_name: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: 'user',
    //     key: 'name',
    //   },
    // },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
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