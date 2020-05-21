const mongoose = require('mongoose');

const seedDatabase = require('./databaseSeeder');

let dbConnection = null;
let connectionString = 'mongodb://localhost:27017/prisports';

exports.connectWithDatabase = async () => {
    try {
        await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

        dbConnection = mongoose.connection;
        dbConnection.dropDatabase();
        seedDatabase();

        console.log(`Connected to ${connectionString}...`);
    } catch (error) {
        console.error(`Error: Couldn't connect to ${connectionString}!`);
        console.error(error);
    }
    return dbConnection;
}