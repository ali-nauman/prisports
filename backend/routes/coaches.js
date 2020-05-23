const express = require('express');

const authenticate = require('../authenticate');
const coachController = require('../controllers/coach.controller');

const coachRouter = express.Router();

coachRouter.get('/:coachId/matches', authenticate.verifyUser, authenticate.verifyCoach, coachController.getMatches);
coachRouter.get('/:coachId/practiceSessions', authenticate.verifyUser, authenticate.verifyCoach, coachController.getPracticeSessions);

module.exports = coachRouter;