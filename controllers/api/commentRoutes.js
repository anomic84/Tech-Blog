// Express' router connect
const router = require('express').Router();
// Connects to Comment object in model
const { Comment, User, Post } = require('../../models');
// connects to login functions in utilities
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all comments and JOIN with user data
        const commentData = await Comment.findAll({
            include: [{ model: User }, { model: Post }],
        });

        //Serialize data
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        console.log(comments);
        res.status(200);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/', withAuth, async (req, res) => {
    try {

        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this provided id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;