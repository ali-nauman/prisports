const Match = require('../models/match.model');
const PracticeSession = require('../models/practice.session.model');

exports.getMatches = async (req, res, next) => {
    try {
        const matches = await Match.find({ coachId: req.params.coachId })
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
        const practiceSessions = await PracticeSession.find({ coachId: req.params.coachId })
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