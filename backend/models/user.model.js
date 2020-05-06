var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    hashedPassword: String,
    phoneNumber: String,
    role: String
});

mongoose.model('User', userSchema);