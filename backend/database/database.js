const mongoose = require('mongoose');

const config = require('../config');
const seedDatabase = require('./databaseSeeder');

let connectionString = config.mongoUrl;

exports.connectWithDatabase = async () => {
    try {
        await mongoose.connect(
            connectionString,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });

        let dbConnection = mongoose.connection;
        await dbConnection.dropDatabase();
        await seedDatabase();

        console.log(`Connected to ${connectionString}...`);
    } catch (error) {
        console.error(`Error: Couldn't connect to ${connectionString}!`);
        console.error(error);
    }
}