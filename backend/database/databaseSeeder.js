const Users = require('../models/user.model');

function seedDatabase() {
    Users.find({}).then((users) => {
        if (users.length == 0) {
            console.log("Users collection empty, adding users...")
            Users.create({
                firstName: "John",
                lastName: "Doe",
                emailAddress: "john.doe@gmail.com",
                password: "$2b$10$qiDK.uihjQmt7jhJa2wG9eK34zfFGCF6i9x9appiVp8LuXCEPdkFK",
                // phoneNumber: "123456789",
                role: "Player"
            }).then((user) => {
                console.log("Created user: ", user);
            })
        }
    })
}

module.exports = seedDatabase;