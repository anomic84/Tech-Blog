// Express' router connect
const router = require('express').Router();
// Connects to Post object in model
const { Post } = require('../../models');
// connects to login functions in utilities
const withAuth = require('../../utils/auth');

//post with Auth ADD BACK withAUTH
router.post('/',  async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        //writes out new post in json format if no err
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json(err);
    }
});

//updates by ID ADD BACK withAUTH
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update({
            ...req.body,
            user_id: req.session.user_id,
        }, {
            where: {
                id: req.params.id,
            }
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ADD BACK withAUTH
router.delete('/:id',  async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;