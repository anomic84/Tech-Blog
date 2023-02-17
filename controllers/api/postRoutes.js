// Express' router connect
const router = require('express').Router();
// Connects to Post object in model
const { Post } = require('../../models');
// connects to login functions in utilities
const withAuth = require('../../utils/auth');