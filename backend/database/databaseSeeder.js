const User = require('../models/user.model');
const Sport = require('../models/sport.model');
const Court = require('../models/court.model');
const PracticeSession = require('../models/practice.session.model');
const Match = require('../models/match.model');
const Attendance = require('../models/player.attendance.model');

async function seedDatabase() {
    try {
        await addUsers();
        await addSports();
        await addCourts();
        await addPracticeSessions();
        await addMatches();
        await addAttendance();
    } catch (error) {
        console.error(error);
    }
}

async function addUsers() {
    try {
        await User.register(new User({
            firstName: "John",
            lastName: "Doe",
            emailAddress: "john.doe@gmail.com",
            phoneNumber: "03211234567",
            role: "Player"
        }), "john");

        await User.register(new User({
            firstName: "John",
            lastName: "Wick",
            emailAddress: "john.wick@gmail.com",
            phoneNumber: "03211224567",
            role: "Player"
        }), "john");

        await User.register(new User({
            firstName: "Jane",
            lastName: "Doe",
            emailAddress: "jane.doe@gmail.com",
            phoneNumber: "03211234566",
            role: "Coach"
        }), "jane");

        await User.register(new User({
            firstName: "Tom",
            lastName: "Riddle",
            emailAddress: "tom.riddle@gmail.com",
            phoneNumber: "7777777",
            role: "Admin"
        }), "power");
    } catch (error) {
        console.error(error);
    }
}

async function addSports() {
    try {
        await Sport.create({ name: "Badminton" });
        await Sport.create({ name: "Squash" });
        await Sport.create({ name: "Table Tennis" });
        await Sport.create({ name: "Tennis" });
    } catch (error) {
        console.error(error);
    }
}

async function addCourts() {
    try {
        let badmintonId = (await Sport.findOne({ name: "Badminton" }))._id;
        for (let i = 1; i <= 8; ++i) {
            await Court.create({ name: `BDM${i}`, sportId: badmintonId });
        }

        let squashId = (await Sport.findOne({ name: "Squash" }))._id;
        for (let i = 1; i <= 6; ++i) {
            await Court.create({ name: `Sq${i}`, sportId: squashId });
        }

        let tableTennisId = (await Sport.findOne({ name: "Table Tennis" }))._id;
        for (let i = 1; i <= 20; ++i) {
            await Court.create({ name: `TT${i}`, sportId: tableTennisId });
        }

        let tennisId = (await Sport.findOne({ name: "Tennis" }))._id;
        for (let i = 1; i <= 10; ++i) {
            await Court.create({ name: `TenC${i}`, sportId: tennisId });
        }
    } catch (error) {
        console.error(error);
    }
}

async function addPracticeSessions() {
    try {
        let courtId = (await Court.findOne({ name: "TenC1" }))._id;
        let coachId = (await User.findOne({ role: "Coach" }))._id;
        let playerAId = (await User.findOne({ firstName: "John", lastName: "Doe" }))._id;
        let playerBId = (await User.findOne({ lastName: "Wick" }))._id;

        await PracticeSession.create({ courtId: courtId, coachId: coachId, playerAId: playerAId, playerARank: "Unranked", playerBId: playerBId, playerBRank: "Unranked", startTime: Date(), endTime: Date() });
    } catch (error) {
        console.error(error);
    }
}

async function addMatches() {
    try {
        let courtId = (await Court.findOne({ name: "TenC1" }))._id;
        let coachId = (await User.findOne({ role: "Coach" }))._id;
        let playerAId = (await User.findOne({ lastName: "Wick" }))._id;
        let playerBId = (await User.findOne({ firstName: "John", lastName: "Doe" }))._id;

        await Match.create({ courtId: courtId, coachId: coachId, playerAId: playerAId, playerARank: "Unranked", playerBId: playerBId, playerBRank: "Unranked", startTime: Date(), endTime: Date() });
    } catch (error) {
        console.error(error);
    }
}

async function addAttendance() {
    try {
        let playerId = (await User.findOne({ lastName: "Wick" }))._id;
        await Attendance.create({ playerId: playerId, checkinTime: Date() });
    } catch (error) {
        console.error(error);
    }
}

module.exports = seedDatabase;