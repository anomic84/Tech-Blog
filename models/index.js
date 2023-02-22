// connects this index to its respective models
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// User has many Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// User has many Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
//Post has *ONE* User it belongs to
Post.belongsTo(User, {
    foreignKey: 'user_id',
});
//Post has many Comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
// Comment has *ONE* User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});
// Comment has *ONE* post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});
module.exports = { User, Comment, Post };