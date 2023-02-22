// Grabs sequelize from connection.js, and grabs the User, Post Comment models from models folder
const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

// makes an object to locate the seeds in js
const userData = require('./user-seeds.js');
const postData = require('./post-seeds.js');
//const postData = [{ name: "why is handlebars so great", description: "HandleBars.js is such a great tool to allow us to insert text using expressions, to make a smoother flowing website.", user_id: 1 }]
const commentData = require('./comment-seeds.js');

console.log("After require",userData,commentData)

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log(postData,users)
    for (const post of postData) {
        await Post.create(
             { ...post,
             user_id:  users[Math.floor(Math.random() * users.length)].id,

             }
        );
    }
    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            post_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase();