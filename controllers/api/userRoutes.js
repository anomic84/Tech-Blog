// Express' router connect
const router = require('express').Router();
// Connects to User object in model
const { User } = require('../../models');
// connects to login functions in utilities
const withAuth = require('../../utils/auth');