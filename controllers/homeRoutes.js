const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//get all with login
router.get('/', async (req, res) => {
    try {
        //find all posts using include model user (findAll which needs include:)
        const postData = await Post.findAll({
            include: [{ model: User }],
        });

        //get post data
        const posts = postData.map((post) => post.get({ plain: true }));
        // render to homepage with logged in clause
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});




//get post by id user_id
router.get('/post/:id', async (req, res) => {
    try {
        //get by id uses findByPk(req.params.id, include User and Comment model)
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User }, { model: Comment }],
        });
        //get post data
        const post = postData.get({ plain: true });
        //check wther post belongs to user
        let match = false;
        if (req.session.user_id == post.user_id) {
            match = true;
        }
        //render post
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,
            match
        })
        //404, 500
    } catch (err) {
        res.status(500).json(err);
    }
})

// get ADD BACK withAUTH
router.get('/dashboard', async (req, res) => {
    try {
        //find the user
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post },],
        });
        //gets User data
        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // Redirects if user is logged in
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});
//Export router
module.exports = router;