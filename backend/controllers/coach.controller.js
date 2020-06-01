const mongoose = require('mongoose');

const Match = mongoose.model('Match');
const PracticeSession = mongoose.model('PracticeSession');

exports.getMatch = async (req, res, next) => {
    try {
        const match = await Match.findOne({ _id: req.params.matchId })
            .populate({ path: 'courtId', select: { name: 1, _id: 0 }, populate: { path: 'sportId', select: { name: 1, _id: 0 } } })
            .populate('coachId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerAId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerBId', { firstName: 1, lastName: 1, _id: 0 });

        res.statusCode = 200;
        res.json(match);
    } catch (err) {
        console.error(err);
    }
}

exports.getMatches = async (req, res, next) => {
    try {
        const matches = await Match.find({ coachId: req.user._id })
            .populate({ path: 'courtId', select: { name: 1, _id: 0 }, populate: { path: 'sportId', select: { name: 1, _id: 0 } } })
            .populate('coachId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerAId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerBId', { firstName: 1, lastName: 1, _id: 0 });

        res.statusCode = 200;
        res.json(matches);
    } catch (err) {
        console.error(err);
    }
}

exports.getPracticeSession = async (req, res, next) => {
    try {
        const practiceSession = await PracticeSession.findOne({ _id: req.params.practiceSessionId })
            .populate({ path: 'courtId', select: { name: 1, _id: 0 }, populate: { path: 'sportId', select: { name: 1, _id: 0 } } })
            .populate('coachId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerAId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerBId', { firstName: 1, lastName: 1, _id: 0 });

        res.statusCode = 200;
        res.json(practiceSession);
    } catch (err) {
        console.error(err);
    }
}

exports.getPracticeSessions = async (req, res, next) => {
    try {
        const practiceSessions = await PracticeSession.find({ coachId: req.user._id })
            .populate({ path: 'courtId', select: { name: 1, _id: 0 }, populate: { path: 'sportId', select: { name: 1, _id: 0 } } })
            .populate('coachId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerAId', { firstName: 1, lastName: 1, _id: 0 })
            .populate('playerBId', { firstName: 1, lastName: 1, _id: 0 });

        res.statusCode = 200;
        res.json(practiceSessions);
    } catch (err) {
        console.error(err);
    }
}

exports.updateMatchRanks = async (req, res, next) => {
    try {
        const match = await Match.findByIdAndUpdate({
            _id: req.params.matchId
        }, {
            $set: {
                playerARank: req.body.playerARank,
                playerBRank: req.body.playerBRank
            }
        });
        res.statusCode = 200;
        res.json(match);
    } catch (err) {
        console.error(err);
    }
}

exports.updatePracticeSessionRanks = async (req, res, next) => {
    try {
        const match = await PracticeSession.findByIdAndUpdate({
            _id: req.params.practiceSessionId
        }, {
            $set: {
                playerARank: req.body.playerARank,
                playerBRank: req.body.playerBRank
            }
        });
        res.statusCode = 200;
        res.json(match);
    } catch (err) {
        console.error(err);
    }
}