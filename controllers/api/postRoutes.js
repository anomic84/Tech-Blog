// Express' router connect
const router = require('express').Router();
// Connects to Post object in model
const { Post } = require('../../models');
// connects to login functions in utilities
const withAuth = require('../../utils/auth');

//post with Auth

//post.create 200 404 500

// put with id withAuth 
//Post.update 200 404 500

//delete by id

module.exports = router;