// Express' router connect
const router = require('express').Router();
// Connects to User object in model
const { User } = require('../../models');
// connects to login functions in utilities
const withAuth = require('../../utils/auth');

//create new user usingpost
router.post('/', async (req, res) => {
    try {

        // creates object based on the request body and stores in database
        const userData = await User.create(req.body);


        // Set up sessions with a 'loggedIn' variable and 'userid variable 
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
//Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Saves the user in code as logged in
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    //Ends the session when the user logs out
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
//Export router
module.exports = router;
