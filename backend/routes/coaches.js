const express = require('express');

const coachController = require('../controllers/coach.controller');

const coachRouter = express.Router();

coachRouter.get('/:coachId/practiceSessions', coachController.getPracticeSessions);
coachRouter.get('/:coachId/matches', coachController.getMatches);

module.exports = coachRouter;