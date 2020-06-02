const mongoose = require("mongoose");

const Match = mongoose.model("Match");
const PracticeSession = mongoose.model("PracticeSession");
const Attendance = mongoose.model("PlayerAttendance");

// playerAId: req.playerAId
exports.getMatches = async (req, res, next) => {
  try {
    const matches = await Match.find({
      $or: [{ playerAId: req.user._id }, { playerBId: req.user._id }],
    })
      .populate("courtId", { name: 1, _id: 0 })
      .populate("playerAId", { firstName: 1, lastName: 1, _id: 0 })
      .populate("playerBId", { firstName: 1, lastName: 1, _id: 0 })
      .populate("coachId", { firstName: 1, lastName: 1, _id: 0 });

    res.statusCode = 200;
    res.json(matches);
  } catch (err) {
    console.error(err);
  }
};

exports.getPracticeSessions = async (req, res, next) => {
  try {
    const practiceSessions = await PracticeSession.find({
      $or: [{ playerAId: req.user._id }, { playerBId: req.user._id }],
    })
      .populate("courtId", { name: 1, _id: 0 })
      .populate("playerAId", { firstName: 1, lastName: 1, _id: 0 })
      .populate("playerBId", { firstName: 1, lastName: 1, _id: 0 })
      .populate("coachId", { firstName: 1, lastName: 1, _id: 0 });

    res.statusCode = 200;
    res.json(practiceSessions);
  } catch (err) {
    console.error(err);
  }
};

exports.getAttendance = async (req, res, next) => {
  try {
    const attendance = await Attendance.find({ playerId: req.user._id })
      .populate("playerId", { firstName: 1, lastName: 1, _id: 0 });

    res.statusCode = 200;
    res.json(attendance);
  } catch (err) {
    console.error(err);
  }
};


exports.getPlayerPracticeSessionSchedule = async (req, res, next) => {
  try {
    const practiceSessions = await PracticeSession.find({ 
      "startTime" : 
      {     
          $gte:   new Date(new Date().setHours(00,00,00)) ,     
          $lt :  new Date(new Date().setHours(23,59,59)) 
     } 
    })
      .populate("courtId", { name: 1, _id: 0 })
      .populate("playerAId", { firstName: 1, lastName: 1, _id: 0 })
      .populate("playerBId", { firstName: 1, lastName: 1, _id: 0 })
      .populate("coachId", { firstName: 1, lastName: 1, _id: 0 });

    res.statusCode = 200;
    res.json(practiceSessions);
  } catch (err) {
    console.error(err);
  }
};

exports.getPlayerMatchSchedule = async (req, res, next) => {
  try {
    const match = await Match.find({ 
      "startTime" : 
      {     
          $gte:   new Date(new Date().setHours(00,00,00)) ,     
          $lt :  new Date(new Date().setHours(23,59,59)) 
     } 
    })
      .populate("courtId", { name: 1, _id: 0 })
      .populate("playerAId", { firstName: 1, lastName: 1, _id: 0 })
      .populate("playerBId", { firstName: 1, lastName: 1, _id: 0 })
      .populate("coachId", { firstName: 1, lastName: 1, _id: 0 });

    res.statusCode = 200;
    res.json(match);
  } catch (err) {
    console.error(err);
  }
};