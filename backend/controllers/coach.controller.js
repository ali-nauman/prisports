const Matches = require('../models/match.model');
const PracticeSessions = require('../models/practice.session.model');

exports.getMatches = async (req, res, next) => {
    console.log(`GET /coaches/${req.params.coachId}/matches`);

    try {
        const matches = await Matches.find({ coachId: req.params.coachId })
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
    console.log(`GET /coaches/${req.params.coachId}/practiceSessions`);

    try {
        const practiceSessions = await PracticeSessions.find({ coachId: req.params.coachId })
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