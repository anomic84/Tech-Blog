// Express's router method letting us build subdirectory routes
const router = require('express').Router();

//creates a const to link to api folder and homeRoutes.js file
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//This is the part links, or routes, the URL to the API folder/homeRoutes.js, by saying "if nothing connect to homeRoutes, if /api connect to api folder"
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;