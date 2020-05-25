const mongoose = require('mongoose');

const Match = mongoose.model('Match');
const PracticeSession = mongoose.model('PracticeSession');

exports.getMatches = async (req, res, next) => {
    try {
        const matches = await Match.find({ coachId: req.user._id })
            .populate('courtId', { name: 1, _id: 0 })
            .populate('coachId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerAId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerBId', { firstName: 1, lastName: 1, _id: 0 });

        res.statusCode = 200;
        res.json(matches);
    } catch (err) {
        console.error(err);
    }
}

exports.getPracticeSessions = async (req, res, next) => {
    try {
        const practiceSessions = await PracticeSession.find({ coachId: req.user._id })
            .populate('courtId', { name: 1, _id: 0 })
            .populate('coachId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerAId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerBId', { firstName: 1, lastName: 1, _id: 0 });

        res.statusCode = 200;
        res.json(practiceSessions);
    } catch (err) {
        console.error(err);
    }
}