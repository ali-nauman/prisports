const bcrypt = require('bcrypt');

const Users = require('../models/user.model');
const Sports = require('../models/sport.model');

function seedDatabase() {
    Users.countDocuments({})
        .then((count) => {
            if (count == 0) {
                addUsers();
            }
        });

    Sports.countDocuments({})
        .then((count) => {
            if (count == 0) {
                addSports();
            }
        });
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
    await Sports.create({
        name: "Badminton"
    });

    await Sports.create({
        name: "Squash"
    });

    await Sports.create({
        name: "Table Tennis"
    });

    await Sports.create({
        name: "Tennis"
    });
}
module.exports = seedDatabase;