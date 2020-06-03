const mongoose = require('mongoose');

const User = mongoose.model('User');
// const PlayerSport = mongoose.model('PlayerSport');

exports.getPlayers = async (req, res, next) => {
    try {
        const players = await User.find({ role: 'Player' });
        res.statusCode = 200;
        res.json(players);
    } catch (err) {
        console.error(err);
    }
}

exports.getPlayer = async (req, res, next) => {
    try {
        const player = await User.findOne({ _id: req.params.userId });
        res.statusCode = 200;
        res.json(player);
    } catch (err) {
        console.error(err);
    }
}

exports.updatePlayer = async (req, res, next) => {
    console.log("exports.updatePlayer -> req", req)
    try {
        const player = await User.findOneAndUpdate({
            _id: req.params.playerId
        }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
                phoneNumber: req.body.phoneNo,
                role: req.body.role
            }
        });
        res.statusCode = 200;
        res.json(player);
    } catch (err) {
        console.log(err);
    }
}

exports.deletePlayer = async (req, res, next) => {
    console.log("exports.deletePlayer -> req.params.playerId", req.params.playerId)
    try {
        const deleteStatus = await User.findOneAndRemove({_id: req.params.playerId});
        res.statusCode = 200;
        res.json(deleteStatus);
    } catch (err) {
        console.log(err);
        return next(err);
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
