const mongoose = require('mongoose');

const User = mongoose.model('User');

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
        const coach = await User.find({ role: 'Coach' });
        res.statusCode = 200;
        res.json(coach);
    } catch (err) {
        console.error(err);
    }
}
