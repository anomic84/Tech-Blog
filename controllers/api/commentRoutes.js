// Express' router connect
const router = require('express').Router();
// Connects to Comment object in model
const { Comment } = require('../../models');
// connects to login functions in utilities
const withAuth = require('../../utils/auth');