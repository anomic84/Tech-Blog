// Express' router connect
const router = require('express').Router();
// Connects to Comment object in model
const { Comment, User, Post } = require('../../models');
// connects to login functions in utilities
const withAuth = require('../../utils/auth');

//get comment.findall, include model/post 200,404,500

//post withAuth comment.create



module.exports = router;