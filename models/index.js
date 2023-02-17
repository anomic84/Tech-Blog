// connects this index to its respective models
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// User has many Post

// User has many Comment

//Post has *ONE* User

//Post has many Comment

// Comment has *ONE* User

// Comment has *ONE* post

module.exports = { User, Post, Comment };