const mongoose = require('mongoose');
const passport = require('passport');

const authenticate = require('../authenticate');
const User = mongoose.model('User');
const Rank = mongoose.model('Rank');
// const PlayerSport = mongoose.model('PlayerSport');
const PlayerSport = require('../models/player.sport.model');
const Sport = mongoose.model('Sport');

exports.logIn = (req, res) => {
    var token = authenticate.getToken({ _id: req.user._id });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        success: true,
        token: token,
        user: req.user
    });
}

exports.logOut = (req, res) => {
    req.logOut();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        success: true
    });
}

exports.register = async (req, res) => {
    try {
        let player = await User.register(new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            phoneNumber: req.body.phoneNumber,
            role: "Player"
        }), req.body.password);

        req.body.sports.forEach(async (sport) => {
            try {
                let sportId = (await Sport.findOne({ name: sport.name }))._id;
                let rankId = (await Rank.findOne({ name: sport.rank }))._id;

                await PlayerSport.create({ playerId: player._id, sportId: sportId, rankId: rankId });
            } catch (error) {
                console.error(error);
            }
        });

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