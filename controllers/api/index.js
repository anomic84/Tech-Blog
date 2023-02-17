// Sets up connection to the js files in this folder using express' router method
const router = require('express').Router();
// creates the variables to link js to the files
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// connects/routes the subdirectory in the URL to the js files
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;