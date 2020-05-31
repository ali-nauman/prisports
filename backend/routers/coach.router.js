const express = require('express');

const authenticate = require('../authenticate');
const coachController = require('../controllers/coach.controller');

const coachRouter = express.Router();

coachRouter.get('/matches', authenticate.verifyUser, authenticate.verifyCoach, coachController.getMatches);
coachRouter.get('/matches/:matchId', authenticate.verifyUser, authenticate.verifyCoach, coachController.getMatch);
coachRouter.get('/practiceSessions', authenticate.verifyUser, authenticate.verifyCoach, coachController.getPracticeSessions);
coachRouter.get('/practiceSessions/:practiceSessionId', authenticate.verifyUser, authenticate.verifyCoach, coachController.getPracticeSession);

module.exports = coachRouter;