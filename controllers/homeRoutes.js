const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//get all with login
    //find all posts using include model user (findAll which needs include:)

    //get post data

    // render to homepage with logged in clause

// 404, 500

//get by id user_id
    //get by id uses findByPk(req.params.id, include User and Comment model)

       //get post data

       //check wther post belongs to user

       //render post
       //404, 500

