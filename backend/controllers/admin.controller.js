const User = require('../models/user.model');

exports.getPlayers = async (req, res, next) => {
    try {
        const players = await User.find({ role: 'Player' });
        res.statusCode = 200;
        res.json(players);
    } catch (err) {
        console.error(err);
    }
}

exports.getCoaches = async (req, res, next) => {
    try {
        const coach = await User.find({ role:'Coach' });
        res.statusCode = 200;
        res.json(coach);
    } catch (err) {
        console.error(err);
    }
}
