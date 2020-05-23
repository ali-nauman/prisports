const User = require('../models/user.model');
const Sport = require('../models/sport.model');
const Court = require('../models/court.model');
const PracticeSession = require('../models/practice.session.model');

async function seedDatabase() {
    await addUsers();
    await addSports();
    await addCourts();
    await addPracticeSessions();
}

async function addUsers() {
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
}

async function addSports() {
    await Sport.create({ name: "Badminton" });
    await Sport.create({ name: "Squash" });
    await Sport.create({ name: "Table Tennis" });
    await Sport.create({ name: "Tennis" });
}

async function addCourts() {
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
}

async function addPracticeSessions() {
    let courtId = (await Court.findOne({ name: "TenC1" }))._id;
    let coachId = (await User.findOne({ role: "Coach" }))._id;
    let playerAId = (await User.findOne({ firstName: "John", lastName: "Doe" }))._id;
    let playerBId = (await User.findOne({ lastName: "Wick" }))._id;

    await PracticeSession.create({ courtId: courtId, coachId: coachId, playerAId: playerAId, playerBId: playerBId, startTime: Date(), endTime: Date() });
}

module.exports = seedDatabase;