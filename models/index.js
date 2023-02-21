// connects this index to its respective models
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// User has many Post
User.hasMany(Post, {
    foreignKey: 'post_id',
});
// User has many Comment
User.hasMany(Comment, {
    foreignKey: 'comment_id',
});
//Post has *ONE* User
Post.hasOne(User, {
    foreignKey: 'user_id',
});
//Post has many Comment
Post.hasMany(Comment, {
    foreignKey: 'comment_id',
});
// Comment has *ONE* User
Comment.hasOne(User, {
    foreignKey: 'user_id',
});
// Comment has *ONE* post
Comment.hasOne(Post, {
    foreignKey: 'post_id',
});
module.exports = { User, Post, Comment };