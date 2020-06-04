const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.addCoach = async (req, res, next) => {
    try {
        const coach = await User.register({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            phoneNumber: req.body.phoneNumber,
            role: "Coach"
        }, req.body.password)
        res.statusCode = 200;
        res.json(coach);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.deleteCoach = async (req, res, next) => {
    try {
        const deleteStatus = await User.findOneAndRemove({ _id: req.params.coachId });
        res.statusCode = 200;
        res.json(deleteStatus);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

exports.deletePlayer = async (req, res, next) => {
    try {
        const deleteStatus = await User.findOneAndRemove({ _id: req.params.playerId });
        res.statusCode = 200;
        res.json(deleteStatus);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

exports.getCoaches = async (req, res, next) => {
    try {
        const coaches = await User.find({ role: 'Coach' });
        res.statusCode = 200;
        res.json(coaches);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

// exports.getPlayer = async (req, res, next) => {
//     try {
//         const player = await User.findOne({ _id: req.params.userId });
//         res.statusCode = 200;
//         res.json(player);
//     } catch (err) {
//         console.error(err);
//     }
// }

exports.getPlayers = async (req, res, next) => {
    try {
        const players = await User.find({ role: 'Player' });
        res.statusCode = 200;
        res.json(players);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.updateCoach = async (req, res, next) => {
    try {
        const coach = await User.findOneAndUpdate({
            _id: req.params.coachId
        }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
                phoneNumber: req.body.phoneNumber
            }
        });
        res.statusCode = 200;
        res.json(coach);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

exports.updatePlayer = async (req, res, next) => {
    try {
        const player = await User.findOneAndUpdate({
            _id: req.params.playerId
        }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
                phoneNumber: req.body.phoneNumber
            }
        });
        res.statusCode = 200;
        res.json(player);
    } catch (err) {
        console.log(err);
        next(err);
    }
}