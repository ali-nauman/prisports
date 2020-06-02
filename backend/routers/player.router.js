const express = require('express');

const authenticate = require('../authenticate');
const playerController = require('../controllers/player.controller');

const playerRouter =  express.Router();

playerRouter.get('/practiceSessions', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getPracticeSessions);
playerRouter.get('/matches', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getMatches);
playerRouter.get('/playerAttendance', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getAttendance);
playerRouter.get('/playerMatchSchedule', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getPlayerMatchSchedule);
playerRouter.get('/playerPracticeSchedule', authenticate.verifyUser, authenticate.verifyPlayer, playerController.getPlayerPracticeSessionSchedule);

module.exports = playerRouter;