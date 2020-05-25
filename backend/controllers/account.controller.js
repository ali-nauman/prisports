const mongoose = require('mongoose');
const passport = require('passport');

const authenticate = require('../authenticate');
const User = mongoose.model('User');

exports.loginUser = (req, res) => {
    var token = authenticate.getToken({ _id: req.user._id });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        success: true,
        token: token,
        role: req.user.role
    });
}

exports.registerUser = async (req, res) => {
    try {
        await User.register(new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            phoneNumber: req.body.phoneNumber,
            role: "Player"
        }), req.body.password);

        passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({
                success: true,
                status: 'Registration Successful!'
            });
        });
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: error });
    }
}