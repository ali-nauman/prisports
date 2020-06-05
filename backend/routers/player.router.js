const express = require('express');

const authenticate = require('../authenticate');
const playerController = require('../controllers/player.controller');

const playerRouter = express.Router();

playerRouter.get('/practiceSessions', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getPracticeSessions);
playerRouter.get('/matches', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getMatches);

playerRouter.get('/attendances', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getAttendance);
playerRouter.post('/attendances', authenticate.verifyUser, authenticate.verifyPlayer, playerController.postAttendance);

playerRouter.get('/matchSchedules', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getPlayerMatchSchedule);
playerRouter.get('/practiceSchedules', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getPlayerPracticeSessionSchedule);

module.exports = playerRouter;