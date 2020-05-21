const bcrypt = require('bcrypt');

const Users = require('../models/user.model');
const Sports = require('../models/sport.model');
const Courts = require('../models/court.model');
const PracticeSessions = require('../models/practice.session.model');

async function seedDatabase() {
    await addUsers();
    await addSports();
    await addCourts();
    await addPracticeSessions();
}

async function addUsers() {
    await Users.create({
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john.doe@gmail.com",
        phoneNumber: "03211234567",
        password: await bcrypt.hash("john", 10),
        role: "Player"
    });

    await Users.create({
        firstName: "John",
        lastName: "Wick",
        emailAddress: "john.wick@gmail.com",
        phoneNumber: "03211224567",
        password: await bcrypt.hash("john", 10),
        role: "Player"
    });

    await Users.create({
        firstName: "Jane",
        lastName: "Doe",
        emailAddress: "jane.doe@gmail.com",
        phoneNumber: "03211234566",
        password: await bcrypt.hash("jane", 10),
        role: "Coach"
    });

    await Users.create({
        firstName: "Tom",
        lastName: "Riddle",
        emailAddress: "tom.riddle@gmail.com",
        phoneNumber: "7777777",
        password: await bcrypt.hash("power", 10),
        role: "Admin"
    });
}

async function addSports() {
    await Sports.create({ name: "Badminton" });
    await Sports.create({ name: "Squash" });
    await Sports.create({ name: "Table Tennis" });
    await Sports.create({ name: "Tennis" });
}

async function addCourts() {
    let badmintonId = (await Sports.findOne({ name: "Badminton" }))._id;
    for (let i = 1; i <= 8; ++i) {
        await Courts.create({ name: `BDM${i}`, sportId: badmintonId });
    }

    let squashId = (await Sports.findOne({ name: "Squash" }))._id;
    for (let i = 1; i <= 6; ++i) {
        await Courts.create({ name: `Sq${i}`, sportId: squashId });
    }

    let tableTennisId = (await Sports.findOne({ name: "Table Tennis" }))._id;
    for (let i = 1; i <= 20; ++i) {
        await Courts.create({ name: `TT${i}`, sportId: tableTennisId });
    }

    let tennisId = (await Sports.findOne({ name: "Tennis" }))._id;
    for (let i = 1; i <= 10; ++i) {
        await Courts.create({ name: `TenC${i}`, sportId: tennisId });
    }
}

async function addPracticeSessions() {
    let courtId = (await Courts.findOne({ name: "TenC1" }))._id;
    let coachId = (await Users.findOne({ role: "Coach" }))._id;
    let playerAId = (await Users.findOne({ firstName: "John", lastName: "Doe" }))._id;
    let playerBId = (await Users.findOne({ lastName: "Wick" }))._id;

    await PracticeSessions.create({ courtId: courtId, coachId: coachId, playerAId: playerAId, playerBId: playerBId, startTime: Date(), endTime: Date() });
}

module.exports = seedDatabase;